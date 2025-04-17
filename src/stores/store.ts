import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useTodoStore = defineStore('counter', () => {
 const fieldMessage = ref('');
 return { fieldMessage };
});
