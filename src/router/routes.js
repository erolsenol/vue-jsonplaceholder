import Auth from '@/container/Auth'
import Full from '@/container/Full'

import Home from '@/pages/home'
import PostComments from '@/pages/home/post-comments.vue'
import User from '@/pages/user'
import UserEdit from '@/pages/user/edit.vue'

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
        children: [
          {
            path: '/home/comments/:postId',
            component: PostComments,
            name: 'postComments',
          },
        ],
      },
      {
        path: '/user',
        component: User,
        name: 'user',
        children: [
          {
            path: '/user/edit/:id',
            component: UserEdit,
            name: 'userEdit',
          },
        ],
      },
    ],
  },
]

export default routes
