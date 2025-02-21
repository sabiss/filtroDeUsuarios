
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 23599, hash: 'eb293678011884e26c08039494ea742835dc0a6da78572f1562c1db98b23decb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17119, hash: '66c18b0baec8fc69d5beb7327bccace20aaa12a008385df189818e805b577b96', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-6U65HP2S.css': {size: 7072, hash: 'fuh2MUpjIDs', text: () => import('./assets-chunks/styles-6U65HP2S_css.mjs').then(m => m.default)}
  },
};
