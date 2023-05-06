import Home from '@/pages/Home'
import Auth from '@/container/Auth'

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
  { path: '/home', component: Home },
]

export default routes
