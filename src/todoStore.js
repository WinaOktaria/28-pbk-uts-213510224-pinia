import { defineAsyncComponent, ref, computed } from 'vue';
import axios from 'axios';

const TodoStore = defineAsyncComponent(() =>
  import('path/to/TodoStore').then((module) => module.useTodoStore)
);

export default {
  async setup() {
    const store = ref(null);

    // Mengambil instance store setelah komponen TodoStore selesai diimpor
    await new Promise((resolve) => {
      TodoStore().then((instance) => {
        store.value = instance;
        resolve();
      });
    });

    // Mengakses state
    console.log(store.value.newTodo);

    // Menggunakan getter
    const filteredTodos = computed(() => store.value.filteredTodos);

    // Menggunakan action
    function addTodo() {
      store.value.addTodo();
    }

    // Menggunakan async action
    async function asyncAction() {
      await store.value.asyncAction();
    }

    // Mengakses state lokal
    const newTodo = ref('');

    // Menggunakan state lokal
    const hideCompleted = ref(false);
    const todos = ref([]);

    // Menggunakan state lokal
    const localFilteredTodos = computed(() => {
      return hideCompleted.value
        ? todos.value.filter((t) => !t.done)
        : todos.value;
    });

    // Menggunakan action lokal
    function addLocalTodo() {
      todos.value.push({ id: store.value.id++, text: newTodo.value, done: false });
      newTodo.value = '';
    }

    // Menggunakan action lokal untuk menghapus todo
    function removeLocalTodo(todo) {
      todos.value = todos.value.filter((t) => t !== todo);
    }

    return {
      addTodo,
      asyncAction,
      newTodo,
      hideCompleted,
      localFilteredTodos,
      addLocalTodo,
      removeLocalTodo
    };
  }
};
import axios from 'axios';

export const useTodoStore = defineStore('todo', {
  // ...
  actions: {
    // ...

    async addTodo() {
      this.todos.push({ id: this.id++, text: this.newTodo, done: false });
      this.newTodo = '';

      try {
        await axios.post('http://localhost:3000/todos', {
          id: this.id - 1,
          text: this.newTodo,
          done: false
        });
      } catch (error) {
        console.error('Failed to save todo:', error);
      }
    },

    async removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo);

      try {
        await axios.delete(`http://localhost:3000/todos/${todo.id}`);
      } catch (error) {
        console.error('Failed to remove todo:', error);
      }
    },

    async asyncAction() {
      try {
        // Panggil API atau lakukan operasi lainnya
        await axios.get('http://localhost:3000/some-api-endpoint');
        
        // Perbarui state atau lakukan operasi lain setelah aksi selesai
      } catch (error) {
        // Tangani kesalahan jika ada
      }
    }
  }
});
