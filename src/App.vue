<script lang="ts" setup>
import ControlPanel from '@/components/ControlPanel.vue';
import FieldTextarea from '@/components/FieldTextarea.vue';
import ListTodos from '@/components/ListTodos.vue';
import { useLoadTodos } from '@/hooks/useLoadTodos';
import ContainerLayout from '@/layouts/ContainerLayout.vue';
useLoadTodos();
</script>

<template>
 <div class="">
  <ContainerLayout>
   <h1 class="text-[50px] text-center font-700 mb-[30px]">ToDo</h1>
   <FieldTextarea class="mb-[10px]" />
   <ControlPanel class="mb-[20px]" />
   <ListTodos />
  </ContainerLayout>
 </div>
</template>

<style scoped></style>
