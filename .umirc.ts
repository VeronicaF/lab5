import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  base: '/lab5/',
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/flv/live',
          component: '@/pages/flv/Stream.tsx',
        },
        {
          path: '/hls/live',
          component: '@/pages/hls/HLSLive.tsx',
        },
        {
          path: '/record',
          component: '@/pages/record/Record.tsx',
        },
      ]
    },
  ],
  fastRefresh: {},
});
