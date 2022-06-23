<template>
  <div class="todo-list-wrapper">
    <PersonCenter userId="007" />
    <div class="input-item-wrapper">
      <input type="text" v-model="inputValue" class="item-input" />
      <button class="add-todo-btn" @click="addItem">Add</button>
    </div>
    <Item
      v-for="(item, index) in todoItems"
      :key="`item${index}`"
      :title="item.title"
      :completed="item.completed"
      @toggle="toggleItem(index)"
      @remove="removeItem(index)"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Item from "./Item.vue";
import PersonCenter from "../PersonCenter.vue";
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

const toggleItem = (index: number) => {
  const currentStatus = todoItems.value[index].completed;
  todoItems.value[index].completed = !currentStatus;
};
</script>
<style lang="scss" scoped>
.todo-list-wrapper {
  width: 500px;
  margin: 20px auto;
}
.input-item-wrapper {
  margin: 8px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.item-input {
  padding: 8px;
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 0;
}
.add-todo-btn {
  padding: 8px;
  width: 60px;
  background: #3fb983;
  color: #fff;
  font-weight: 700;
  border: none;
}
</style>
