<template>
  <div>
    <Item v-for="(item,index) in todos" :title="item.title" :completed="item.completed" @remove="handleRemove(index)"/>
  </div>
</template>
<script lang="ts" setup>
import Item from './Item.vue'
const props = defineProps<{todos: [{title: string, completed: boolean}]}>()


const handleRemove = (index: number) => {
  props.todos.splice(index, 1)
}
</script>
<style lang="scss" scoped>

</style>
