import { minifyTemplates, writeFiles } from 'esbuild-minify-templates'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    'common.min': 'src/contents/common.ts',
    'v2ex-home.min': 'src/contents/home/index.ts',
    'v2ex-topic.min': 'src/contents/topic/index.ts',
    'decode-base64.min': 'src/contents/decode-base64.ts',

    'popup.min': 'src/pages/popup.ts',
    'options.min': 'src/pages/options.ts',

    'toggle-icon.min': 'src/background/toggle-icon.ts',
    'background.min': 'src/background/main.ts',
  },

  outDir: './extension/scripts',

  minify: true,

  define: {
    'process.env.NODE_ENV': '"production"',
  },

  noExternal: ['@floating-ui/dom', 'webext-patterns'],

  esbuildPlugins: [minifyTemplates(), writeFiles()],

  esbuildOptions(options) {
    options.write = false
  },
})
