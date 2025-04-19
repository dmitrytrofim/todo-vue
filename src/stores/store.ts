import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Ref } from 'vue';
import type { ITodo } from '@/types/todos.type';
import { saveLocal } from '@/stores/actions/saveLocal';

export const useTodoStore = defineStore('counter', () => {
 const fieldMessage = ref('');
 const listTodos: Ref<ITodo[]> = ref([]);
 const addTodo = (todo: ITodo) => listTodos.value.push(todo);
 saveLocal(listTodos);
 return { fieldMessage, listTodos, addTodo };
});
