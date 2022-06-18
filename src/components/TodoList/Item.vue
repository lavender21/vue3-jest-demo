<template>
  <div>
    <span class="todo-item" :class="dynimacClass">{{ title }}</span>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{title: string, completed: boolean}>()

const dynimacClass = computed(() => props.completed ? 'completed' : '')

</script>
<style lang="scss" scoped>

</style>
