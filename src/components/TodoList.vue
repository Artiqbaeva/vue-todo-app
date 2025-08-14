<template>
  <ul>
    <TodoItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggle="$emit('toggle-task', $event)"
      @delete="$emit('delete-task', $event)"
    />
  </ul>
</template>

<script setup lang="ts">
import type { Task } from "../composables/useTodos";
import TodoItem from "./TodoItem.vue";

defineProps<{ tasks: Task[] }>();

defineEmits<{
  (event: "toggle-task", id: number): void;
  (event: "delete-task", id: number): void;
}>();
</script>
