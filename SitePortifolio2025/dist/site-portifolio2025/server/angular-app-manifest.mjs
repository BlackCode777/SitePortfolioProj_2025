
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 27103, hash: '09ecf549dfff254d142ebce90aad4bdb7e453ea7d2e2a07292b8d8fe367b1926', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1395, hash: 'ee79ecef2593adc2f8c3f88430f5661c710a8e52eeb4c99aef0e7b458119135f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 52327, hash: '72542955e6c4c2ddda540003e10ebada033dde09229c3925ddf8bf91f96e8b79', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VBHOU5WK.css': {size: 111723, hash: 'RB1pI/pPGQY', text: () => import('./assets-chunks/styles-VBHOU5WK_css.mjs').then(m => m.default)}
  },
};
