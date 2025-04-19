import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Ref } from 'vue';
import type { ITodo } from '@/types/todos.type';
import { useSaveLocal } from '@/stores/hooks/useSaveLocal';

export const useTodoStore = defineStore('counter', () => {
 const fieldMessage = ref('');
 const listTodos: Ref<ITodo[]> = ref([]);
 const addTodo = (todo: ITodo) => listTodos.value.push(todo);
 useSaveLocal(listTodos);
 return { fieldMessage, listTodos, addTodo };
});
