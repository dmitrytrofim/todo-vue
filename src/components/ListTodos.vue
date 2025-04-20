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
</template>

<style scoped></style>
