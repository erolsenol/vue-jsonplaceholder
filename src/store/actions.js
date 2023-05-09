import { HttpConnector } from '@/http/clients'

export default {
  async getPosts({ state, commit }) {
    const postsRes = await HttpConnector.getAllPosts()

    if (postsRes.status == 200 && postsRes.data?.length > 0) {
      state.posts = postsRes.data
    } else {
      commit('showSnackbar', {
        text: 'Post fetch failed',
        color: 'red',
      })
    }
  },
  async getUsers({ state, commit }) {
    const usersRes = await HttpConnector.getAllUsers()

    if (usersRes.status === 200 && usersRes.data?.length > 0) {
      state.users = usersRes.data
    } else {
      commit('showSnackbar', {
        text: 'Users fetch failed',
        color: 'red',
      })
    }
  },
}
