<template>
  <div class="input-container">
    <input
      v-model="taskText"
      @keyup.enter="submitTask"
      placeholder="Add a new task"
    />
    <button @click="submitTask">Add</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Emits definition
const emit = defineEmits<{
  (event: "add-task", text: string): void;
}>();

const taskText = ref<string>("");

function submitTask(): void {
  if (taskText.value.trim() !== "") {
    emit("add-task", taskText.value);
    taskText.value = "";
  }
}
</script>
