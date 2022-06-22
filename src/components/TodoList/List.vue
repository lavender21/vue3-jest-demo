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
      v-for="(item, index) in todoItems"
      :key="`item${index}`"
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

const todoItems = ref(props.todos);
const inputValue = ref("");
const removeItem = (index: number) => {
  todoItems.value.splice(index, 1);
};
const addItem = () => {
  todoItems.value.push({
    title: inputValue.value,
    completed: false,
  });
  inputValue.value = "";
};
</script>
<style lang="scss" scoped></style>
