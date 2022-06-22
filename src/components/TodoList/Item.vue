<template>
  <div class="todo-item-wrapper">
    <span class="todo-item" :class="dynimacClass" @click="setItemCompleted">
      {{ title }}
    </span>
    <span class="remove-btn" @click="removeItem">remove</span>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{ title: string; completed: boolean }>();

const dynimacClass = computed(() => (props.completed ? "completed" : ""));

const emit = defineEmits(["remove", "toggle"]);

const removeItem = () => {
  emit("remove");
};
const setItemCompleted = () => {
  emit("toggle");
};
</script>
<style lang="scss" scoped>
.todo-item-wrapper {
  width: 100%;
  margin: 8px;
  display: flex;
  justify-content: space-between;
  background: #eee;
  cursor: pointer;
  .todo-item {
    padding: 8px;
    flex: 1;
    text-align: left;
    &.completed {
      text-decoration: line-through;
    }
  }
  .remove-btn {
    padding: 8px;
    width: 100px;
    color: #fff;
    font-weight: 700;
    text-align: center;
    background: #e76767;
  }
}
</style>
