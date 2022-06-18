<template>
  <div>
    <span class="todo-item">{{ title }}</span>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{title: string, completed: boolean}>()

</script>
<style lang="scss" scoped>

</style>
