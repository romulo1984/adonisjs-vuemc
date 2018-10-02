<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        Essa é a lista com todas as tarefas.
      </div>
      <div class="col-12">
        <TaskItem v-for="task in tasks.models" :task="task" :key="task.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import TaskItem from './TaskItem'
import TaskCollection from '../Collections/TaskCollection'
import TaskModel from '../Models/TaskModel'

export default {
  name: 'TaskList',
  components: {
    TaskItem
  },
  data() {
    let tasks = new TaskCollection()
    let newTask = new TaskModel({}, tasks)

    return {tasks, newTask}
  },
  mounted() {
    this.tasks.fetch()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
