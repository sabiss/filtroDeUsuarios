
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/filtroDeUsuariosAngular/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 23623, hash: 'ffbd68c2ea4f41db35dc60f926b4ccd890546599cebc9126f12af4fc3ab4fb60', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17143, hash: '209595c6a9929b4ef4bf356a46c921922098c1e8765a06bfef825d1d0ba8791a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-6U65HP2S.css': {size: 7072, hash: 'fuh2MUpjIDs', text: () => import('./assets-chunks/styles-6U65HP2S_css.mjs').then(m => m.default)}
  },
};
