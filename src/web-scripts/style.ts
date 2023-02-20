const style = `body{--v2p-font-noto-sans: -apple-system, BlinkMacSystemFont, "Noto Sans SC", sans-serif;--v2p-color-main-100: #f1f5f9;--v2p-color-main-200: #e2e8f0;--v2p-color-main-300: #cbd5e1;--v2p-color-main-400: #94a3b8;--v2p-color-main-500: #64748b;--v2p-color-main-600: #475569;--v2p-color-main-700: #334155;--v2p-color-main-800: #1e293b;--v2p-color-main-900: #0f172a;--v2p-color-accent-50: #ecfdf5;--v2p-color-accent-100: #d1fae5;--v2p-color-accent-200: #a7f3d0;--v2p-color-accent-300: #6ee7b7;--v2p-color-accent-400: #34d399;--v2p-color-accent-500: #10b981;--v2p-color-accent-600: #059669;--v2p-color-border: rgb(238 238 238);--v2p-color-wrapper-bg: rgb(249 250 252);--v2p-color-content-bg: rgb(255 255 255);--color-fade: var(--v2p-color-main-400);--color-gray: var(--v2p-color-main-400);--link-color: var(--v2p-color-main-800);--link-caution-color: #f59e0b;--box-border-color: var(--v2p-color-main-100);--box-foreground-color: var(--v2p-color-main-800);--box-background-color: #fff;--box-background-alt-color: var(--v2p-color-main-100);--box-background-hover-color: var(--v2p-color-main-200);--button-background-color: var(--v2p-color-main-200);--button-foreground-color: var(--v2p-color-main-500);--button-border-color: var(--v2p-color-main-300);--v2p-box-shadow: 0 2px 2px var(--v2p-color-main-200);color:var(--v2p-color-main-800);font-family:var(--v2p-font-noto-sans);background-color:var(--v2p-color-wrapper-bg)}body #Top{height:55px;background-color:var(--v2p-color-content-bg);border:none}body #Bottom{border:none}body #Wrapper{background-color:inherit;background-image:none}body #Wrapper.Night{background-color:inherit;background-image:none}body #Wrapper .content{display:flex;gap:15px}body #Leftbar{order:1;float:none}body #Main{flex:1;order:2;margin:0}body #Rightbar{order:3;float:none}body h1{text-shadow:2px 2px var(--v2p-color-content-bg)}body .box{overflow:hidden;background-color:var(--v2p-color-content-bg);border:none;border-radius:8px;box-shadow:none}body .box .header .gray{color:var(--v2p-color-main-400)}body .button.normal,body .button.super{position:relative;display:inline-flex;gap:5px;align-items:center;height:28px;padding:0 12px;color:var(--v2p-color-main-500);font-weight:500;font-size:14px;font-family:inherit;line-height:28px;background:none;background-color:var(--v2p-color-main-100);border:none;border-radius:6px;outline:none;box-shadow:0 1.8px 0 var(--v2p-color-main-200),0 1.8px 0 var(--v2p-color-main-100);cursor:pointer;user-select:none}body .button.normal:hover:enabled,body .button.super:hover:enabled{color:var(--v2p-color-main-500);font-weight:500;text-shadow:none;background-color:var(--v2p-color-main-100);border:none;box-shadow:0 1.8px 0 var(--v2p-color-main-200),0 1.8px 0 var(--v2p-color-main-100)}body .button.normal.hover_now,body .button.normal.disable_now,body .button.super.hover_now,body .button.super.disable_now{color:var(--v2p-color-main-500) !important;text-shadow:none !important;background-color:var(--v2p-color-main-100) !important}body .button.normal.disable_now,body .button.super.disable_now{cursor:default;opacity:.5;pointer-events:none}body .button.normal kbd,body .button.super kbd{position:relative;right:-4px;padding:0 3px;line-height:initial;border:1px solid var(--v2p-color-main-200);border-radius:4px}body .button.v2p-prev-btn,body .button.v2p-next-btn{padding:0 15px}body a.node:link{padding:5px 6px;color:var(--v2p-color-main-400);font-size:13px;background-color:var(--v2p-color-main-100);border-radius:4px}body .outdated{font-size:12px;border-color:var(--v2p-color-main-200);border-bottom:none}body .page_normal:link,body .page_normal:visited,body .page_current:link,body .page_current:visited{border:none}body .page_normal:link,body .page_normal:visited{background-color:var(--v2p-color-content-bg);box-shadow:0 2px 2px var(--v2p-color-main-200)}body .page_current:link,body .page_current:visited{font-weight:500;background-color:var(--v2p-color-main-200);box-shadow:none}body .page_input{display:none}::selection{color:currentcolor;background-color:var(--v2p-color-main-200)}img::selection{background-color:var(--v2p-color-main-400)}#reply-box.reply-box-sticky{bottom:20px;overflow:hidden;border:none;border-radius:10px;box-shadow:0 0 15px 5px var(--v2p-color-main-200)}#reply-box #reply_content{border-color:var(--v2p-color-main-300);border-radius:6px}#reply-box #reply_content+.flex-one-row{gap:10px;justify-content:flex-start}#reply-box #reply_content+.flex-one-row .gray{margin-left:auto}#Main #reply-box>.cell.flex-one-row,#Main #reply-box>.cell.flex-row-end{padding:12px 10px;font-size:12px}#Main #reply-box .flex-one-row{padding:0;font-size:12px}#search-container{height:30px;margin:0 30px;background-color:var(--v2p-color-main-100);border:none;border-radius:6px}#search-container::before{top:0;left:4px;background-size:14px 14px;opacity:.6;filter:none}#search-container.active{background-color:var(--v2p-color-main-100)}#search-container #search-result{top:42px;box-shadow:0 0 15px 5px var(--v2p-color-main-200)}#no-comments-yet{color:var(--v2p-color-main-400);border-color:var(--v2p-color-main-400)}.box .tag{color:var(--v2p-color-main-400);font-size:12px;background-color:var(--v2p-color-main-100);border-radius:5px}.box .tag::before{color:var(--v2p-color-main-500)}.box .tag>li{opacity:.6}#Top .content{height:100%}#Top .site-nav{height:100%;padding:0}#Top .tools{display:flex;gap:8px 15px;align-items:center;justify-content:flex-end;font-weight:400;font-size:14px}#Top .tools .top{margin-left:0;padding:3px 5px;color:var(--v2p-color-main-400);border-radius:4px}#Top .tools .top:hover{color:var(--v2p-color-main-800)}#Top .tools .top:not(.effect-btn):hover{background-color:var(--v2p-color-main-100)}#Top .tools .top.effect-btn{transition:color .3s}#Main>.box{padding:0 12px}#Main>.box .cell{padding:20px 10px}#Main .topic_content{font-size:16px}#Main .subtle{background-color:var(--v2p-color-accent-50);border-left:3px solid var(--v2p-color-accent-200)}#Main .vote:link{color:var(--v2p-color-main-500);border-color:var(--v2p-color-main-300);border-radius:5px}#Main .vote:link:hover{box-shadow:0 2px 2px var(--v2p-color-main-200)}#Main .cell_tab_current{border-color:var(--v2p-color-main-800)}#Main .cell.item{border-bottom:1px solid var(--v2p-color-border)}#Main .cell.item .item_title{font-weight:600;opacity:.8}#Main .cell.item .item_title:hover{opacity:1}#Main .cell.item .topic-link{color:var(--v2p-color-main-800);text-decoration:none}#Main .cell.item .topic-link:visited{color:var(--v2p-color-main-400)}#Main .cell.item .topic_info{position:relative}#Main .cell.item .topic_info::after{position:absolute;top:0;right:0;bottom:-6px;left:0;z-index:1;background-color:var(--v2p-color-content-bg);content:""}#Main .cell.item .topic_info .votes,#Main .cell.item .topic_info .node,#Main .cell.item .topic_info strong:first-of-type,#Main .cell.item .topic_info span:first-of-type{position:relative;z-index:99}#Main .cell.item .topic_info a[href^="/member"]{color:var(--v2p-color-main-500)}#Main .cell.item:hover .count_livid{opacity:1}#Main .cell.item .count_livid{display:inline-block;padding:5px 10px;color:var(--v2p-color-main-400);font-weight:400;font-size:12px;white-space:nowrap;background-color:var(--v2p-color-main-200);border-radius:5px;opacity:.8}#Main .cell.item tr>td:nth-child(2){width:30px}#Main #Tabs{display:flex;gap:6px 8px;align-items:center}#Main #SecondaryTabs{padding:10px;background-color:var(--v2p-color-main-100);border-radius:5px}#Main .cell[id^=r]:hover>table td:last-of-type .fr a{opacity:1}#Main .cell[id^=r]>table:first-of-type td:first-of-type{width:40px}#Main .cell[id^=r]>table:first-of-type td:first-of-type .avatar{width:40px !important;border-radius:5px}#Main .cell[id^=r]>table~.cell{padding:20px 0 0 15px;border:none}#Main .cell[id^=r]>table~.cell .cell{padding:20px 0 0;border:none}#Main .cell[id^=r]>table~.cell tr td:first-of-type{width:25px}#Main .cell[id^=r]>table~.cell tr td:first-of-type .avatar{width:25px !important;border-radius:4px}#Main .cell[id^=r]>table~.cell tr td:nth-child(3) strong a{font-size:13px;opacity:.75}#Main .cell[id^=r]>table~.cell .reply_content{font-size:14px}#Main .cell[id^=r]>table td:nth-of-type(2){width:15px}#Main .cell[id^=r]>table td:last-of-type a.dark{color:var(--v2p-color-main-600);text-decoration:none}#Main .cell[id^=r]>table td:last-of-type .fr{position:relative;top:-3px;user-select:none}#Main .cell[id^=r]>table td:last-of-type .fr a{opacity:0}#Main .cell[id^=r]>table td:last-of-type .fr+.sep3{height:0}#Main .cell[id^=r]:last-of-type{border:none}#Main .cell[id^=r] .no{position:relative;top:-4px;padding:5px 10px;color:var(--v2p-color-main-300);font-size:12px;background-color:rgba(0,0,0,0);border-radius:5px;user-select:none}#Main .cell[id^=r] .badge{padding:2px 5px;font-weight:600;border:1px solid var(--v2p-color-accent-400);user-select:none}#Main .cell[id^=r] .badge:first-child{border-top-left-radius:4px;border-bottom-left-radius:4px}#Main .cell[id^=r] .badge:last-child{border-top-right-radius:4px;border-bottom-right-radius:4px}#Main .cell[id^=r] .badge.op{color:var(--v2p-color-accent-500);background-color:var(--v2p-color-accent-50)}#Main .cell[id^=r] .badge.mod{color:var(--v2p-color-content-bg);background-color:var(--v2p-color-accent-400)}#Main .topic_content a[href^=http],#Main .reply_content a[href^=http]{color:var(--v2p-color-main-500);font-size:12px;text-decoration:none;background-color:var(--v2p-color-main-100)}#Main .topic_content a[href^=http]:hover,#Main .reply_content a[href^=http]:hover{color:var(--v2p-color-accent-500);background-color:var(--v2p-color-accent-50)}#Main .reply_content{font-size:15px}#Main .reply_content a[href^=http]{color:var(--v2p-color-main-500);text-decoration:none;background-color:var(--v2p-color-main-100)}#Main .reply_content a[href^=http]:hover{color:var(--v2p-color-accent-500);background-color:var(--v2p-color-accent-50)}#Main .reply_content a[href^="/member"]{color:var(--v2p-color-main-400);font-size:13px;text-decoration:underline;background-color:var(--v2p-color-main-100)}#Main .thank_area{font-size:12px}#Main .tab{margin:0;background-color:rgba(0,0,0,0)}#Main .tab:not(.effect-btn):hover{background-color:var(--v2p-color-main-100)}#Main .tab_current{background-color:var(--v2p-color-main-700)}.topic_buttons{display:flex;flex-direction:row-reverse;align-items:center;padding:8px 0;column-gap:5px;background:none}.topic_buttons .topic_stats{margin-left:auto;padding:0 !important;font-size:12px;text-shadow:none}.topic_buttons a.tb:link{display:flex;flex-direction:row-reverse;align-items:center;padding:5px;column-gap:5px;background:none;border-radius:4px}.topic_buttons .tb:hover:not(.effect-btn){background:var(--v2p-color-main-100);filter:none}.topic_buttons .tb:nth-child(1)::after{content:"🙏"}.topic_buttons .tb:nth-child(2)::after{content:"⭐"}.topic_buttons .tb:nth-child(3)::after{content:"🐦"}.topic_buttons .tb:nth-child(4)::after{content:"🙈"}#Rightbar .box{opacity:.5;transition:opacity .25s}#Rightbar .box:hover{opacity:1}#Rightbar .balance_area{display:flex;align-items:center}#Bottom .inner .small.fade{display:none}#Bottom a.dark:link{color:var(--v2p-color-main-600)}body.modal-open{overflow:hidden}.effect-btn{position:relative;z-index:1;margin:0;background:none;background-color:rgba(0,0,0,0);cursor:pointer;user-select:none}.effect-btn::before{position:absolute;top:0;right:-5px;bottom:0;left:-5px;z-index:-1;background-color:var(--v2p-color-main-100);border-radius:5px;transform:scale(0.6);opacity:0;transition:transform .3s,opacity .3s;content:""}.effect-btn:hover::before{transform:scale(1);opacity:1}.v2p-popular-btn{padding:5px 0}.v2p-dot{margin:0 8px;font-weight:800;font-size:20px;font-size:15px}.v2p-paging{background:none !important}.v2p-cm-mask{position:fixed;z-index:999;padding:60px;overflow:hidden;overflow-y:auto;background-color:rgba(0,0,0,.25);inset:0}.v2p-cm-content.box{position:relative;box-sizing:border-box;width:800px;height:100%;margin:0 auto;padding:0 20px;overflow-x:hidden;overflow-y:auto}.v2p-cm-content.box .v2p-ac-reply{display:none}.v2p-cm-content.box .no{pointer-events:none}.v2p-cm-bar{position:sticky;top:0;right:0;left:0;z-index:10;display:flex;align-items:center;padding:15px 0 20px;background-color:var(--v2p-color-content-bg)}.v2p-cm-close-btn{margin-left:auto}.heart-box{position:relative;top:3px;display:inline-flex;align-items:center;column-gap:5px}.icon-heart{display:inline-flex;width:16px;height:16px;color:#f43f5e}.icon-heart svg{fill:#ffe4e6}@supports not selector(:has(*)){#Main .cell[id^=r]>table:hover .v2p-controls{opacity:1}}@supports selector(:has(*)){#Main .cell[id^=r]:not(:has(.cell:hover))>table:hover .v2p-controls{opacity:1}}.v2p-controls{display:inline-flex;align-items:center;margin-right:15px;font-size:12px;column-gap:15px;opacity:0}.v2p-controls>a{text-decoration:none;opacity:1}.v2p-control{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;padding:4px 0;color:var(--v2p-color-main-400)}.topic_buttons .v2p-tb.effect-btn{color:var(--v2p-color-main-400);transition:color .3s}.topic_buttons .v2p-tb.effect-btn:hover{color:currentcolor}.topic_buttons .v2p-tb.effect-btn::after{display:none}.v2p-tb-icon{width:15px;height:15px}#v2p-tooltip{position:absolute;top:0;left:0;z-index:999;width:max-content;padding:12px;color:var(--v2p-color-main-600);font-weight:bold;font-size:14px;background:var(--v2p-color-content-bg);border-radius:5px;box-shadow:var(--v2p-box-shadow);visibility:hidden}#v2p-tooltip-arrow{position:absolute;width:8px;height:8px;background:inherit;transform:rotate(45deg)}.v2p-emoticons{display:grid;grid-template-columns:repeat(6, 1fr);gap:8px}
`

/**
 * 通过 JS 注入主题样式。
 */
export function addGlobalStyle() {
  $(`<style type='text/css'>${style}</style>`).appendTo('head')
}
