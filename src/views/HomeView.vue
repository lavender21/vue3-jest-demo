<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TodoList :todos="todos" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoList from "@/components/TodoList"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    TodoList,
  },
  setup() {
    const todos = [
      { title: "准备session ppt", completed: true },
      { title: "准备session demo code", completed: false },
    ];
    return { todos };
  },
});
</script>
