/** @format */

import NotFound from '@pages/partials/NotFound'

export default [
  {
    path: '/',
    meta: {
      title: window.$appTitle
    },
    component: resolve => require(['@pages/Main'], resolve)
  },
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '*',
    meta: {
      title: 'Page Not Found'
    },
    component: NotFound
  }
]
