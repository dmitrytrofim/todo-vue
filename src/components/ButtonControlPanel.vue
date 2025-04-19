<script lang="ts" setup>
defineProps({
 block: Boolean,
});
</script>

<template>
 <button
  :disabled="block"
  class="text-[18px] font-500 text-[white] bg-[black] border cursor-pointer p-[5px_10px]"
  :class="block ? 'bg-[gray]' : 'bg-[black]'"
 >
  <slot />
 </button>
</template>

<style scoped></style>
