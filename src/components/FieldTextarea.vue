<script lang="ts" setup>
import { useTodoStore } from '@/stores/store';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const store = useTodoStore();
const { fieldRef } = storeToRefs(store);

onMounted(() => {
 store.fieldRef?.focus();
});
</script>

<template>
 <textarea
  ref="fieldRef"
  v-model="store.fieldMessage"
  rows="3"
  @keydown.enter.prevent="store.addTodo"
  class="w-full border rounded-[20px] p-[15px]"
 ></textarea>
</template>

<style scoped></style>
