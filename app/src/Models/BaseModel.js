import { Model } from 'vue-mc'
import { BASE_API, JWT } from '../config/app'

export default class BaseModel extends Model {
  getRequest(config) {
    config.baseURL = BASE_API
      config.headers = {
        Authorization: `Bearer ${JWT}`
      }

    return super.getRequest(config)
  }
}
