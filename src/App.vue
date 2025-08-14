<template>
  <div class="todo-app">
    <h1>Vue ToDo App </h1>
    <TodoInput @add-task="addTask" />
    <TodoList
      :tasks="tasks"
      @toggle-task="toggleTask"
      @delete-task="deleteTask"
    />
  </div>
</template>

<script setup lang="ts">
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import { useTodos } from "./composables/useTodos";

const { tasks, addTask, toggleTask, deleteTask } = useTodos();
</script>
