import HttpApi from './api'

export const HttpConnector = new HttpApi(process.env.VUE_APP_BASE_URL)
