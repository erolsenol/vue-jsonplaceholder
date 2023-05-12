export default {
  navigationDrawerValue: true,
  login: localStorage.getItem('login') == 'true',
  user: {
    id: localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')).id
      : null,
    username: localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')).username
      : null,
    email: localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')).email
      : null,
  },
  count: 0,
  snackbar: {
    state: false,
    text: '',
    color: 'red',
  },
  posts: [],
  users: [],
}
