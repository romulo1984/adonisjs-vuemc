import { Collection } from 'vue-mc'
import TaskModel from '../Models/TaskModel'

/**
* Task model
*/
export default class TaskCollection extends Collection {

  // Model that is contained in this collection.
  model() {
    return TaskModel;
  }

  // Default attributes
  defaults() {
    return {
        orderBy: 'name',
    }
  }

  // Route configuration
  routes() {
      return {
        fetch: `${BASE_API}tasks`,
      }
  }

  // Number of tasks to be completed.
  get todo() {
    return this.sum('done');
  }

  // Will be `true` if all tasks have been completed.
  get done() {
    return this.todo == 0;
  }

  coiso() {
    let config = {
      url: `${BASE_API}tasks`,
      method: 'get',
      // data
      // params
      headers: {
        Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTUzODM1NjMzMn0.9JIzGYtK1WZg81u4VIu1N5nmvo4_mAwTjEV8GGPyPaQ',
      }
    }

    return this.getRequest(config)
      .send()
      .then((res) => {
          return res
      }).catch((error) => {
          return error
      })
  }
}
