<script lang="ts" setup>
import ButtonControlPanel from '@/components/ButtonControlPanel.vue';
import { useTodoStore } from '@/stores/store';
const store = useTodoStore();
</script>

<template>
 <div class="flex justify-center gap-[10px]">
  <ButtonControlPanel @click="store.addTodo" :block="!store.fieldMessage">
   Add todo
  </ButtonControlPanel>
  <ButtonControlPanel @click="store.clearFields" :block="!store.fieldMessage">
   Clear the field
  </ButtonControlPanel>
  <ButtonControlPanel @click="store.deleteAllTodos" :block="store.listTodos.length === 0">
   Delete all todos
  </ButtonControlPanel>
 </div>
</template>

<style scoped></style>
