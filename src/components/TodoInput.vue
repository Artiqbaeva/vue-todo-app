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

const emit = defineEmits<{
  (event: "add-task", text: string): void;
}>();

const taskText = ref("");

function submitTask() {
  if (taskText.value.trim() !== "") {
    emit("add-task", taskText.value.trim());
    taskText.value = "";
  }
}
</script>
