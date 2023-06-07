import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Todo from '../components/Todo.vue'
import contact from '../components/contact.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        name: 'About',
        component: About
    },
    {
        path: '/',
        name: 'Todo',
        component: Todo
    },
    {
        path: '/',
        name: 'contact',
        component: contact
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router