// app.js
const app = Vue.createApp({
    data() {
        return {
            newTodo: '',
            todos: [],
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim() !== '') {
                this.todos.push({ text: this.newTodo, completed: false });
                this.newTodo = '';
            }
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
        },
    },
});

app.mount('#app');
