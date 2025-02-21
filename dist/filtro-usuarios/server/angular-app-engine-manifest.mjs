
export default {
  basePath: '/filtroDeUsuariosAngular',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
