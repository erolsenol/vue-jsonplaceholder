import HttpApi from './api'

export const HttpConnector = new HttpApi(import.meta.env.VITE_API_BASE_URL)
