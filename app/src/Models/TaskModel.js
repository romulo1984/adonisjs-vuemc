import { Model } from 'vue-mc'

/**
* Task model
*/
export default class TaskModel extends Model {

  // Default attributes that define the "empty" state.
  defaults() {
    return {
      id:   null,
      name: '',
      done: false,
    }
  }

  // Attribute mutations.
  mutations() {
    return {
      id:   (id) => Number(id) || null,
      name: String,
      done: Boolean,
    }
  }

    // Attribute validation
  validation() {
    return {
      id:   integer.and(min(1)).or(equal(null)),
      name: string.and(required),
      done: boolean,
    }
  }

  // Route configuration
  routes() {
    return {
      fetch: `${BASE_API}tasks/{id}`,
      save: `${BASE_API}tasks`,
    }
}
}
