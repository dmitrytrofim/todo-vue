<script lang="ts" setup>
import ControlPanel from '@/components/ControlPanel.vue';
import FieldTextarea from '@/components/FieldTextarea.vue';
import { useLoadTodos } from '@/hooks/useLoadTodos';
import ContainerLayout from '@/layouts/ContainerLayout.vue';
import { useTodoStore } from '@/stores/store';
const store = useTodoStore();
useLoadTodos();
</script>

<template>
 <div class="">
  <ContainerLayout>
   <h1 class="text-[50px] text-center font-700 mb-[30px]">ToDo</h1>
   <FieldTextarea class="mb-[10px]" />
   <ControlPanel />
   <ul>
    <li v-for="item in store.listTodos" :key="item.id">{{ item.text }}</li>
   </ul>
  </ContainerLayout>
 </div>
</template>

<style scoped></style>
