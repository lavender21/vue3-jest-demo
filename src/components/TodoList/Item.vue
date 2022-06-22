<template>
  <div>
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

const emit = defineEmits(["remove", "complete"]);

const removeItem = () => {
  emit("remove");
};
const setItemCompleted = () => {
  emit("complete");
};
</script>
<style lang="scss" scoped></style>
