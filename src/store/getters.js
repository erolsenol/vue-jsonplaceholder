export default {
  getCount(state) {
    return state.count
  },
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
}
