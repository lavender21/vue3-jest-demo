<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TodoList />
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
});
</script>
