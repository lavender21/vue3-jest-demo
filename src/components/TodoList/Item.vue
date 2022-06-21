<template>
  <div>
    <span class="todo-item" :class="dynimacClass">{{ title }}</span>
    <span class="remove-btn" @click="removeItem">remove</span>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{title: string, completed: boolean}>()

const dynimacClass = computed(() => props.completed ? 'completed' : '')

const emit = defineEmits(['remove'])

const removeItem = () => {
  emit('remove')
}

</script>
<style lang="scss" scoped>

</style>
