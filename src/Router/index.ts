import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../paginas/home/home.vue";
import Batman from "../paginas/Batman/Batman.vue";
import Respuesta from "../paginas/Respuesta/Respuesta.vue";
import Simpsons from "../paginas/Simpsons/Simpsons.vue";

export const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/Batman',
            name: 'Batman',
            component: Batman
        },
        {
            path: '/Indecision',
            name: 'Indecision',
            component: Respuesta
        },
        {
            path: '/Simpsons',
            name: 'Simpsons',
            component: Simpsons
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/'
        },
    ]
})
