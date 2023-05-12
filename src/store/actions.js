import { HttpConnector } from '@/http/clients'
import router from '@/router'

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
      commit('userEditStateChange', { user: saveUserRes.data })
      commit('showSnackbar', {
        text: 'User information has been changed',
        color: 'green',
      })
      return true
    }
    return false
  },
  async getComments({ commit }, postId) {
    const getCommentsRes = await HttpConnector.getCommentsFromPostId(postId)
    if (getCommentsRes.status === 200) {
      commit('setComments', { postId, comments: getCommentsRes.data })
      return getCommentsRes.data
    } else {
      commit('showSnackbar', {
        text: 'An error occurred while fetching comments',
        color: 'red',
      })
      return false
    }
  },
  async newComment({ commit }, { postId, comment }) {
    commit
    const newCommentRes = await HttpConnector.postComment({ postId, comment })

    if (newCommentRes.status === 201) {
      return newCommentRes.data
    } else {
      commit('showSnackbar', {
        text: 'An error occurred while submitting the comment',
        color: 'red',
      })
      return false
    }
  },

  async loginOrRegisterUser({ commit }, { username, email }) {
    const loginRes = await HttpConnector.loginRequest()

    if (loginRes) {
      const generateId = Math.floor(Math.random() * (9 - 0) + 1)
      commit('setUser', { username, email, id: generateId })
      localStorage.setItem('login', 'true')
      localStorage.setItem(
        'user',
        JSON.stringify({ username, email, id: generateId })
      )

      router.push({ name: 'home' })
    }
  },

  logout({ commit }) {
    commit('clearUser')
    localStorage.clear()
    router.push({ name: 'authLogin' })
  },
}
