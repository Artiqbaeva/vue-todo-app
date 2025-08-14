<template>
  <li>
    <span :class="{ done: task.done }" @click="emit('toggle', task.id)">
      {{ task.text }}
    </span>
    <button class="delete" @click="emit('delete', task.id)">❌</button>
  </li>
</template>

<script setup lang="ts">
import type { Task } from "../composables/useTodos";

defineProps<{ task: Task }>();

const emit = defineEmits<{
  (event: "toggle", id: number): void;
  (event: "delete", id: number): void;
}>();
</script>
