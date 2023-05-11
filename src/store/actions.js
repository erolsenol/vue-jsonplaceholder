import { HttpConnector } from '@/http/clients'

export default {
  async getPosts({ state, commit }) {
    const postsRes = await HttpConnector.getAllPosts()

    if (postsRes.status == 200 && postsRes.data?.length > 0) {
      state.posts = postsRes.data
      console.log('postsRes.data', postsRes.data)
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
      console.log('usersRes.data', usersRes.data)
    } else {
      commit('showSnackbar', {
        text: 'Users fetch failed',
        color: 'red',
      })
    }
  },
  async getUser({ commit }, id) {
    const userRes = await HttpConnector.getUserFromId(id)

    if (userRes.status === 200 && userRes.data) {
      return userRes.data
    } else {
      commit('showSnackbar', {
        text: 'An error occurred while fetching the user',
        color: 'red',
      })
      return false
    }
  },
  // eslint-disable-next-line no-empty-pattern
  async saveUser({ commit }, { user, id }) {
    const saveUserRes = await HttpConnector.userEdit({ user, id })
    if (saveUserRes.status === 200) {
      console.log(saveUserRes)

      commit('userEditStateChange', { user: saveUserRes.data })
      commit('showSnackbar', {
        text: 'User information has been changed',
        color: 'green',
      })
      return true
    }
    return false
  },
}
