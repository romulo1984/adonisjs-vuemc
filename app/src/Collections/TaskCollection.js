import BaseCollection from './BaseCollection'
import TaskModel from '../Models/TaskModel'

/**
* Task model
*/
export default class TaskCollection extends BaseCollection {

  // Model that is contained in this collection.
  model() {
    return TaskModel;
  }

  // Default attributes
  defaults() {
    return {
        orderBy: 'title',
    }
  }

  // Route configuration
  routes() {
      return {
        fetch: 'tasks',
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
}
