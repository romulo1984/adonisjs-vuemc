'use strict'

const Task = use('App/Models/Task')

/**
 * Resourceful controller for interacting with tasks
 */
class TaskController {
  /**
   * Show a list of all tasks.
   * GET tasks
   */
  async index ({ auth }) {
    const user = await auth.getUser()

    return user.tasks().fetch()
    //return await Task.all()
  }

  /**
   * Create/save a new task.
   * POST tasks
   */
  async store ({ request, auth }) {
    const data = request.only(['title'])
    const user = await auth.getUser()

    const task = await user.tasks().create(data)

    return task
  }

  /**
   * Display a single task.
   * GET tasks/:id
   */
  async show ({ params, auth }) {
    const user = await auth.getUser()

    const task = await Task
      .query()
      .where({
        id: params.id,
        user_id: user.id
      })
      .first()

    return task
  }

  /**
   * Update task details.
   * PUT or PATCH tasks/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a task with id.
   * DELETE tasks/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = TaskController
