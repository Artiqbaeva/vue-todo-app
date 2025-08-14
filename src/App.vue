<template>
  <div class="todo-app">
    <h1>Vue ToDo App</h1>
    <TodoInput @add-task="addTask" />
    <TodoList
      :tasks="tasks"
      @toggle-task="toggleTask"
      @delete-task="deleteTask"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

interface Task {
  text: string;
  done: boolean;
}

const tasks = ref<Task[]>([]);

function addTask(text: string): void {
  tasks.value.push({ text, done: false });
}

function toggleTask(index: number): void {
  tasks.value[index].done = !tasks.value[index].done;
}

function deleteTask(index: number): void {
  tasks.value.splice(index, 1);
}
</script>
