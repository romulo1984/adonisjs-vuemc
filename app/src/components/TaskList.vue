<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        Essa é a lista com todas as tarefas.
      </div>
      <div class="col-12">
        <Task v-for="task in tasks.models" :task="task" :key="task.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import Task from './Task.vue'
import TaskCollection from '../Collections/TaskCollection'
import TaskModel from '../Models/TaskModel'

export default {
  name: 'TaskList',
  components: {
    Task
  },
  data() {
    let tasks = new TaskCollection()
    let task = new TaskModel({}, tasks)

    return {tasks, task}
  },
  mounted() {
    this.tasks.fetch()
      .then((res) => {
        console.warn(res)
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
