<template>
  <div>
    <div>
      <input type="text" v-model="inputValue" /><button
        class="add-todo-btn"
        @click="addItem"
      >
        Add
      </button>
    </div>
    <Item
      v-for="(item, index) in todos"
      :title="item.title"
      :completed="item.completed"
      @remove="removeItem(index)"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Item from "./Item.vue";
const props = defineProps<{ todos: [{ title: string; completed: boolean }] }>();

const inputValue = ref("");
const removeItem = (index: number) => {
  props.todos.splice(index, 1);
};
const addItem = () => {
  props.todos.push({
    title: inputValue.value,
    completed: false,
  });
  inputValue.value = "";
};
</script>
<style lang="scss" scoped></style>
