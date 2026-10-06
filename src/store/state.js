import { readSession } from './session'

export default {
  navigationDrawerValue: true,
  ...readSession(),
  count: 0,
  snackbar: {
    state: false,
    text: '',
    color: 'red',
  },
  posts: [],
  users: [],
}
