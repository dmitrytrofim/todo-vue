import { ref, shallowRef } from 'vue';
import { defineStore } from 'pinia';
import type { Ref, ShallowRef } from 'vue';
import type { ITodo } from '@/types/todos.type';

export const useTodoStore = defineStore('counter', () => {
 const fieldMessage: Ref<string> = ref('');
 const fieldRef: ShallowRef<HTMLTextAreaElement | null> = shallowRef(null);
 const listTodos: Ref<ITodo[]> = ref([]);
 const loadTodos = (todos: ITodo[]) => listTodos.value.push(...todos);
 const addTodo = () => {
  if (fieldMessage.value === '') return;
  listTodos.value.push({
   id: crypto.randomUUID(),
   text: fieldMessage.value,
  });
  fieldMessage.value = '';
  fieldRef.value?.focus();
 };
 const clearFields = () => {
  fieldMessage.value = '';
  fieldRef.value?.focus();
 };
 const deleteAllTodos = () => {
  if (confirm('Are you sure?')) listTodos.value.length = 0;
  fieldRef.value?.focus();
 };
 return { fieldMessage, fieldRef, listTodos, loadTodos, addTodo, clearFields, deleteAllTodos };
});
