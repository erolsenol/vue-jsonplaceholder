import { HttpConnector } from '@/http/clients'

export default {
  async getPosts({ state, commit }) {
    const postsRes = await HttpConnector.getAllPosts()

    if (postsRes.status == 200 && postsRes.data?.length > 0) {
      state.posts = postsRes.data
      commit('showSnackbar', { text: 'Post fetch success', color: 'green' })
    } else {
      commit('showSnackbar', {
        text: 'Post fetch failed',
        color: 'red',
      })
    }
  },
}
