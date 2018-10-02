<template>
  <div class="card task">
    <div class="card-body">
      <div class="input-group mb-3">
        <textarea-autosize
          placeholder="Task title"
          rows="1"
          class="form-control input-editable"
          v-model="task.title"
        />
        <div class="input-group-append">
          <button
            class="btn btn-link text-success"
            type="button"
            @click="task.save"
          >save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)

export default {
  name: 'TaskItem',
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
.input-editable {
  border: 0;
  border-bottom: 1px dashed #ccc;
  padding-left: 0;
  transition: border 0.2s linear;
  &:focus {
    outline: none;
    border-color: inherit;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-bottom-color: #42b983;
  }
}
</style>

