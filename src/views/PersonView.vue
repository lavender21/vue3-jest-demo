<template>
  <PersonCenter :userId="userId" />
</template>
<script lang="ts" setup>
import { useRoute } from "vue-router";
import PersonCenter from "@/components/PersonCenter.vue";

const route = useRoute();
const userId = route.query.userId;
</script>
<style lang="scss" scoped></style>
