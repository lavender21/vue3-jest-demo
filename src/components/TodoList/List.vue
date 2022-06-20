<template>
  <div>
    <Item v-for="item in todos" :title="item.title" :completed="item.completed"/>
  </div>
</template>
<script lang="ts" setup>
import Item from './Item.vue'
const props = defineProps<{todos: [{title: string, completed: boolean}]}>()
</script>
<style lang="scss" scoped>

</style>
