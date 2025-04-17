<script lang="ts" setup>
import { useAttrs } from 'vue';
const attr = useAttrs();
</script>

<template>
 <div class="w-full mx-auto" :class="!attr['class'] && 'max-w-[1000px]'">
  <slot />
 </div>
</template>

<style scoped></style>
