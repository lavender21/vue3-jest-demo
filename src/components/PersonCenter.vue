<template>
  <div>
    <span> {{ personInfo.name }} </span>
    <span> {{ personInfo.level }}</span>
  </div>
</template>
<script lang="ts" setup>
import axios from "axios";
import { ref } from "vue";
import { getUserInfoApi } from "@/api/api";

const props = defineProps<{ userId: string }>();
const personInfo = ref({});
const fetchPersonInfo = async () => {
  personInfo.value = await getUserInfoApi(props.userId);
};
fetchPersonInfo();
</script>
<style lang="scss" scoped></style>
