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
    name: 'auth',
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: '/auth/login',
        component: () => import('@/components/LoginForm'),
        name: 'authLogin',
        meta: {
          requiresAuth: false,
        },
      },
    ],
  },
  {
    path: '/',
    component: Full,
    redirect: '/home',
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '/home',
        component: Home,
        name: 'home',
        meta: {
          requiresAuth: true,
        },
        children: [
          {
            path: '/home/comments/:postId',
            component: PostComments,
            name: 'postComments',
            meta: {
              requiresAuth: true,
            },
          },
        ],
      },
      {
        path: '/user',
        component: User,
        name: 'user',
        meta: {
          requiresAuth: true,
        },
        children: [
          {
            path: '/user/edit/:id',
            component: UserEdit,
            name: 'userEdit',
            meta: {
              requiresAuth: true,
            },
          },
        ],
      },
    ],
  },
]

export default routes
