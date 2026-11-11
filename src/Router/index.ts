import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../paginas/home/home.vue";
import Batman from "../paginas/Batman/Batman.vue";
import Respuesta from "../paginas/Respuesta/Respuesta.vue";
import Primus from "../paginas/Simpsons/Primus.vue";
import Layout from "@/paginas/Simpsons/layout.vue";
import Circa from "@/paginas/Simpsons/circa.vue";
import collection from "@/paginas/Simpsons/collection.vue";

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
        children: [
            {
            path: '',
            name: 'Simpsons',
            component: Primus
            },
            {

            path: 'about',
            component: Layout,
            children: [
            {
            path: '',
            name: 'Simpsons-about',
            component: Circa
            }
        ]
            },
            {

            path: 'galeria',
            component: Layout,
            children: [
            {
            path: '',
            name: 'Simpsons-personajes',
            component: collection
            }
        ]
            },
            {
            path: 'id',
            name: 'simpsons-personajes',
            component: collection
            }  
]
},

        {
            path: '/:pathMatch(.*)*',
            redirect: '/'
        },
        
    ]
})
