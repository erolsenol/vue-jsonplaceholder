import axios from 'axios'

const TIMEOUT = 10000

export default class HttpApi {
  constructor(BASE_URL) {
    this.client = axios.create({
      baseURL: BASE_URL,
      timeout: TIMEOUT,
    })
  }

  create(BASE_URL) {
    this.client = axios.create({
      baseURL: BASE_URL,
      timeout: TIMEOUT,
    })
  }

  getClient() {
    return this
  }

  get(resource, config = {}) {
    return this.client.get(resource, config)
  }

  post(resource, data, config = {}) {
    return this.client.post(resource, data, config)
  }

  put(resource, data, config = {}) {
    return this.client.put(resource, data, config)
  }

  patch(resource, data, config = {}) {
    return this.client.patch(resource, data, config)
  }

  delete(resource, config = {}) {
    return this.client.delete(resource, config)
  }

  getAllPosts() {
    return this.client.get('posts')
  }

  getAllUsers() {
    return this.client.get('users')
  }

  getUserFromId(id) {
    return this.client.get(`users/${id}`)
  }

  userEdit({ user, id }) {
    return this.client.put(`users/${id}`, user)
  }

  getCommentsFromPostId(postId) {
    return this.client.get(`posts/${postId}/comments`)
  }

  postComment({ postId, comment }) {
    return this.client.post(`posts/${postId}/comments`, comment)
  }

  loginRequest() {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(true)
      }, 1500)
    )
  }

  customRequest(config) {
    return this.client(config)
  }
}
