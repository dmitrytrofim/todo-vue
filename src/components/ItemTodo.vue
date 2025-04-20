<script lang="ts" setup>
import { useTodoStore } from '@/stores/store';

defineProps({
 id: String,
 text: String,
 complete: Boolean,
});
const store = useTodoStore();
</script>

<template>
 <li class="flex border rounded-[5px]">
  <button
   @click="store.completeTodo(id!)"
   class="text-[white] bg-[black] p-[0_10px] cursor-pointer"
   :class="complete ? 'font-400' : 'text-[20px] font-700'"
   type="button"
  >
   {{ complete ? '&#128399;' : '&#10004;' }}
  </button>
  <span
   class="grow text-[18px] p-[5px_10px] cursor-grab"
   :class="complete && 'text-[white] bg-[gray]'"
   >{{ text }}</span
  >
  <button
   @click="store.deleteTodo(id!)"
   class="text-[20px] font-700 text-[white] bg-[black] p-[0_10px] cursor-pointer"
   type="button"
  >
   &#10008;
  </button>
 </li>
</template>

<style scoped></style>
