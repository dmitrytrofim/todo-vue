import { useTodoStore } from '@/stores/store';
import { onMounted, watch } from 'vue';

export function useLoadTodos() {
 const store = useTodoStore();
 onMounted(() => {
  const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
  store.loadTodos(storedTodos);
 });
 watch(
  store.listTodos,
  (newVal) => {
   localStorage.setItem('todos', JSON.stringify(newVal));
  },
  { deep: true },
 );
}
