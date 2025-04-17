<script lang="ts" setup>
import { useTodoStore } from '@/stores/store';

const store = useTodoStore();
</script>

<template>
 <textarea
  v-model="store.fieldMessage"
  rows="3"
  class="w-full border rounded-[20px] p-[15px]"
 ></textarea>
</template>

<style scoped></style>
