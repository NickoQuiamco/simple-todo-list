
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Login.vue'), alias: '/login' },
      { path: '/menu', component: () => import('pages/Menu.vue') },
      { path: '/history', component: () => import('pages/History.vue') },
      { path: '/contact-us', component: () => import('pages/ContactUs.vue') },
      { path: '/about-us', component: () => import('pages/AboutUs.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
