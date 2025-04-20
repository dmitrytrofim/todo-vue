import { ref, shallowRef } from 'vue';
import { defineStore } from 'pinia';
import type { Ref, ShallowRef } from 'vue';
import type { ITodo } from '@/types/todos.type';

export const useTodoStore = defineStore('counter', () => {
 const fieldMessage: Ref<string> = ref('');
 const fieldRef: ShallowRef<HTMLTextAreaElement | null> = shallowRef(null);
 const listTodos: Ref<ITodo[]> = ref([]);
 const loadTodos = (todos: ITodo[]) => {
  listTodos.value.length = 0;
  listTodos.value.push(...todos);
 };
 const addTodo = () => {
  if (fieldMessage.value === '') return;
  listTodos.value.push({
   id: crypto.randomUUID(),
   text: fieldMessage.value,
   complete: false,
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
 const deleteTodo = (id: string) => {
  const idVal = listTodos.value.findIndex((item) => item.id === id);
  listTodos.value.splice(idVal, 1);
 };
 const completeTodo = (id: string) => {
  const idVal = listTodos.value.findIndex((item) => item.id === id);
  listTodos.value[idVal].complete = !listTodos.value[idVal].complete;
  const item = listTodos.value.splice(idVal, 1);
  if (item[0].complete === true) {
   listTodos.value.push(...item);
  } else {
   listTodos.value.unshift(...item);
  }
 };
 return {
  fieldMessage,
  fieldRef,
  listTodos,
  loadTodos,
  addTodo,
  clearFields,
  deleteAllTodos,
  deleteTodo,
  completeTodo,
 };
});
