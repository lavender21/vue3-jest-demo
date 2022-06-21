<template>
  <div>
    <button @click="increment">Add</button>
    <span>{{ count }}</span>
  </div>
</template>
<script lang="ts" setup>
import { ref} from "vue";

const count = ref(0)
const increment = () => {
  count.value = count.value + 1
}

</script>
<style lang="scss" scoped>

</style>
