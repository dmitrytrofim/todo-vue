<script lang="ts" setup>
import { useTodoStore } from '@/stores/store';

const store = useTodoStore();
const addTodo = () => {
 store.addTodo({
  id: crypto.randomUUID(),
  text: store.fieldMessage,
 });
 store.fieldMessage = '';
};
</script>

<template>
 <textarea
  v-model="store.fieldMessage"
  rows="3"
  @keydown.enter.prevent="addTodo"
  class="w-full border rounded-[20px] p-[15px]"
 ></textarea>
</template>

<style scoped></style>
