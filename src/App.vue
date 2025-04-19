<script lang="ts" setup>
import FieldTextarea from '@/components/FieldTextarea.vue';
import ContainerLayout from '@/layouts/ContainerLayout.vue';
import { useTodoStore } from '@/stores/store';
const store = useTodoStore();
</script>

<template>
 <div class="">
  <ContainerLayout>
   <h1 class="text-[50px] text-center font-700 mb-[30px]">ToDo</h1>
   <FieldTextarea />
   <ul>
    <li v-for="item in store.listTodos" :key="item.id">{{ item.text }}</li>
   </ul>
  </ContainerLayout>
 </div>
</template>

<style scoped></style>
