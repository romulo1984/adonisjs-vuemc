import BaseModel from './BaseModel'
import {
  boolean,
  equal,
  integer,
  min,
} from 'vue-mc/validation'

/**
* Task model
*/
export default class TaskModel extends BaseModel {

  // Default attributes that define the "empty" state.
  defaults() {
    return {
      id: null,
      title: '',
      done: false,
    }
  }

  // Attribute mutations.
  mutations() {
    return {
      id: (id) => Number(id) || null,
      title: String,
      done: Boolean,
    }
  }

    // Attribute validation
  validation() {
    return {
      id: integer.and(min(1)).or(equal(null)),
      title: String,
      done: boolean,
    }
  }

  // Route configuration
  routes() {
    return {
      fetch: 'tasks/{id}',
      save: 'tasks',
    }
  }
}
