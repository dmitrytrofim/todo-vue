import { onMounted, watch, type Ref } from 'vue';

export function useSaveLocal(listTodos: Ref) {
 onMounted(() => {
  const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
  listTodos.value = [...storedTodos];
 });
 watch(
  listTodos,
  (newVal) => {
   localStorage.setItem('todos', JSON.stringify(newVal));
  },
  { deep: true },
 );
}
