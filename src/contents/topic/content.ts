import { createButton } from '../../components/button'
import { MAX_CONTENT_HEIGHT, READABLE_CONTENT_HEIGHT } from '../../constants'
import { iconIgnore, iconLove, iconStar, iconTwitter } from '../../icons'
import type { Member, Tag } from '../../types'
import { getMemberTags, getOptions } from '../../utils'
import { $commentCells, $topicContentBox } from '../globals'
import { setMemberTags } from '../helpers'

/**
 * 处理主题的正文内容。
 */
export async function handlingContent() {
  {
    const options = await getOptions()

    if (options.openInNewTab) {
      $topicContentBox
        .find('.topic_content a[href]')
        .prop('target', '_blank')
        .prop('rel', 'noopener noreferrer')
    }
  }

  {
    const $topicContents = $topicContentBox.find('.subtle > .topic_content')

    const textLength = $topicContents.text().length

    if (textLength >= 200) {
      $topicContents.each((_, topicContent) => {
        if (textLength >= 400) {
          topicContent.style.fontSize = '14px'
        }
        topicContent.style.fontSize = '14.5px'
      })
    }
  }

  {
    const topicBtn = $('.topic_buttons .tb').addClass('v2p-tb v2p-hover-btn')
    topicBtn.eq(0).append(`<span class="v2p-tb-icon">${iconStar}</span>`)
    topicBtn.eq(1).append(`<span class="v2p-tb-icon">${iconTwitter}</span>`)
    topicBtn.eq(2).append(`<span class="v2p-tb-icon">${iconIgnore}</span>`)
    topicBtn.eq(3).append(`<span class="v2p-tb-icon">${iconLove}</span>`)
  }
}

/**
 * 处理回复内容：
 *  - 过长内容会被折叠。
 */
export function processReplyContent($cellDom: JQuery) {
  if ($cellDom.find('.v2p-reply-content').length > 0) {
    return
  }

  const $replyContent = $cellDom.find('.reply_content')

  const contentHeight = $replyContent.height() ?? 0

  const shouldCollapsed = contentHeight + READABLE_CONTENT_HEIGHT >= MAX_CONTENT_HEIGHT

  if (shouldCollapsed) {
    const collapsedCSS = {
      maxHeight: `${READABLE_CONTENT_HEIGHT}px`,
      overflow: 'hidden',
      paddingBottom: '0',
    }

    const $contentBox = $('<div class="v2p-reply-content v2p-collapsed">').css(collapsedCSS)

    const $expandBtn = createButton({ children: '展开回复', className: 'v2p-expand-btn' })

    const toggleContent = () => {
      const collapsed = $contentBox.hasClass('v2p-collapsed')

      $contentBox
        .toggleClass('v2p-collapsed')
        .css(
          collapsed ? { maxHeight: 'none', overflow: 'auto', paddingBottom: '40px' } : collapsedCSS
        )
      $expandBtn.html(collapsed ? '收起回复' : '展开回复')
    }

    $expandBtn.on('click', () => {
      toggleContent()
    })

    $contentBox.append($replyContent.clone()).replaceAll($replyContent).append($expandBtn)
  }
}

/**
 * 根据用户的昵称设置用户的标签。
 */
export function updateMemberTag(memberName: Member['username'], tags: Tag[] | undefined) {
  const $v2pTags = $(`.v2p-tags-${memberName}`)

  const tagsValue = tags?.map((it) => it.name).join('，')

  if ($v2pTags.length > 0) {
    if (tagsValue) {
      $v2pTags.html(`<b>#</b>&nbsp;${tagsValue}`)
    } else {
      $v2pTags.remove()
    }
  } else {
    if (tagsValue) {
      $(`<div class="v2p-reply-tags v2p-tags-${memberName}"><b>#</b>&nbsp;${tagsValue}</div>`)
        .on('click', () => {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          openTagsSetter(memberName)
        })
        .insertBefore(
          $commentCells
            .filter(`:has(> table strong > a[href="/member/${memberName}"])`)
            .find('> table .reply_content')
        )
    }
  }
}

export function openTagsSetter(memberName: Member['username']) {
  void (async () => {
    const latestTagsData = await getMemberTags(false)

    const tagsValue = latestTagsData
      ? Reflect.has(latestTagsData, memberName)
        ? latestTagsData[memberName].tags?.map((it) => it.name).join('，')
        : undefined
      : undefined

    const newTagsValue = window.prompt(
      '⚠ 用户标签是实验性的功能，后续版本可能会调整，请勿过于依赖。\n设置用户标签，多个标签以逗号（，）分隔。',
      tagsValue
    )

    if (newTagsValue !== null) {
      const tags =
        newTagsValue.trim().length > 0
          ? newTagsValue.split(/,|，/g).map((it) => ({ name: it }))
          : undefined

      await setMemberTags(memberName, tags)

      updateMemberTag(memberName, tags)
    }
  })()
}
