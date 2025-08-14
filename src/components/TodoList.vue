<template>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <span
        :class="{ done: task.done }"
        @click="emit('toggle-task', index)"
      >
        {{ task.text }}
      </span>
      <button class="delete" @click="emit('delete-task', index)">❌</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface Task {
  text: string;
  done: boolean;
}

defineProps<{
  tasks: Task[];
}>();

const emit = defineEmits<{
  (event: "toggle-task", index: number): void;
  (event: "delete-task", index: number): void;
}>();
</script>
