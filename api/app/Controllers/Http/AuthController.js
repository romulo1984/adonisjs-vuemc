'use strict'

const User = use('App/Models/User')

class AuthController {
  async authenticate ({ request, auth }) {
    const { email, password } = request.all()
    const token = await auth.attempt(email, password)

    return token
  }

  /**
   * Create/save a new task.
   * POST users
   */
  async register ({ request }) {
    const data = request.only(['email', 'password', 'username'])
    return await User.create(data)
  }
}

module.exports = AuthController
