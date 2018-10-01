<template>
  <div class="card task">
    <div class="card-body">
      <h5 class="m-0">
        {{ task.$.title }}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: ['task']
}
</script>

<style lang="scss" scoped>
.task {
  margin-bottom: 10px;
  &.task-done {
    h5 {
      color: #42b983;
    }
  }
}
</style>

