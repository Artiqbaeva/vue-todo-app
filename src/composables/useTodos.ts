import { ref, watch } from "vue";

export interface Task {
  id: number;
  text: string;
  done: boolean;
}

export function useTodos() {
  const STORAGE_KEY = "vue-todos";
  const tasks = ref<Task[]>(loadFromLocalStorage());

  function loadFromLocalStorage(): Task[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks.value));
  }

  function addTask(text: string) {
    tasks.value.push({ id: Date.now(), text, done: false });
  }

  function toggleTask(id: number) {
    const task = tasks.value.find((t) => t.id === id);
    if (task) task.done = !task.done;
  }

  function deleteTask(id: number) {
    tasks.value = tasks.value.filter((t) => t.id !== id);
  }

  watch(tasks, saveToLocalStorage, { deep: true });

  return { tasks, addTask, toggleTask, deleteTask };
}
