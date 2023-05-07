export default {
  increment(state) {
    state.count++
  },
  showSnackbar(state, { text, color }) {
    state.snackbar.text = text
    state.snackbar.color = color
    state.snackbar.state = true
  },
}
