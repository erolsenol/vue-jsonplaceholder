import Auth from '@/container/Auth.vue'
import Full from '@/container/Full.vue'

import Home from '@/pages/Home/index.vue'
import PostComments from '@/pages/Home/post-comments.vue'
import User from '@/pages/user/index.vue'
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
        component: () => import('@/components/LoginForm.vue'),
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
