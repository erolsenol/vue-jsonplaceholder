export default {
  showSnackbar(state, { text, color }) {
    state.snackbar.text = text
    state.snackbar.color = color
    state.snackbar.state = true
  },
  userEditStateChange(state, { user }) {
    const userIndex = state.users.findIndex(
      (findUser) => findUser.id === user.id
    )
    if (userIndex > -1) {
      state.users.splice(userIndex, 1, user)
    }
  },
  setComments(state, { postId, comments }) {
    const postIndex = state.posts.findIndex((post) => post.id === postId)
    if (postIndex > -1) {
      state.posts[postIndex].comments = comments
    }
  },
  setUser(state, { username, email }) {
    state.user.username = username
    state.user.email = email
    state.login = true
  },
}
