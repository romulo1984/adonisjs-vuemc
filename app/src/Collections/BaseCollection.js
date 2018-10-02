import { Collection } from 'vue-mc'
import { BASE_API, JWT } from '../config/app'

export default class BaseCollection extends Collection {
  getRequest(config) {
    config.baseURL = BASE_API
      config.headers = {
        Authorization: `Bearer ${JWT}`
      }

    return super.getRequest(config)
  }
}
