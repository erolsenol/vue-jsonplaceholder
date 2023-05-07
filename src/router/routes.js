import Auth from '@/container/Auth'
import Full from '@/container/Full'

import Home from '@/pages/home'

const routes = [
  {
    path: '/auth',
    component: Auth,
    redirect: '/auth/login',
    children: [
      {
        path: '/auth/login',
        component: () => import('@/components/LoginForm'),
        name: 'login',
      },
    ],
  },
  {
    path: '/',
    component: Full,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home,
        name: 'home',
      },
    ],
  },
]

export default routes
