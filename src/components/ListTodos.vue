<script lang="ts" setup>
import ItemTodo from '@/components/ItemTodo.vue';
import { useTodoStore } from '@/stores/store';
import { VueDraggableNext } from 'vue-draggable-next';
const store = useTodoStore();
</script>

<template>
 <VueDraggableNext :list="store.listTodos" class="flex flex-col gap-[5px]">
  <ItemTodo
   v-for="item in store.listTodos"
   :key="item.id"
   :text="item.text"
   :id="item.id"
   :complete="item.complete"
  />
 </VueDraggableNext>
 <p v-show="store.listTodos.length === 0" class="text-[26px] font-500 text-center">
  The to-do list is empty!
 </p>
</template>

<style scoped></style>
