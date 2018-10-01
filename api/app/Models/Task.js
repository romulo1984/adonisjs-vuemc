'use strict'

const Model = use('Model')

class Task extends Model {
  user () {
    return this.hasOne('App/Models/User')
  }
}

module.exports = Task
