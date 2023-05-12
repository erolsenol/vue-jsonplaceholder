export default {
  getSnackbar(state) {
    return state.snackbar
  },
  getPosts(state) {
    return state.posts
  },
  getUsers(state) {
    return state.users
  },
  getIdByUser: (state) => (userId) => {
    return state.users.find((user) => user.id === userId)
  },
  getIdByPost: (state) => (postId) => {
    return state.posts.find((post) => post.id === Number(postId))
  },
}
