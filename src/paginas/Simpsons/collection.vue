<script setup lang="ts">
import Card from '@/components/ui/card/Card.vue';
import CardContent from '@/components/ui/card/CardContent.vue';
import { computed, ref } from 'vue';
import { personajes } from './data';
import { useRouter } from 'vue-router';

const router = useRouter()

const inPagina = 6

const nuncPagina = ref(1)

const totalPaginas = Math.ceil(personajes.length / inPagina)

const listaSimpsons = computed(() => {
    const inicio = (nuncPagina.value - 1) * inPagina
    const fin = inicio + inPagina
    return personajes.slice(inicio, fin)
})

const ireAdPagina = (pagina: number) => {
    if (pagina >= 1 && pagina <= totalPaginas) {
        nuncPagina.value = pagina
    }
}

const NumeroPagina: number[] = [...Array(totalPaginas)].map((_, i) => i + 1)

</script>

<template>
<div class="flex flex-col items-center gap-8 w-full max-w-page my-8 mx-auto">
    <div>
        <h1 class="font-bold text-xl lg:text-5xl mb-5">
        the simpsons quote App
        </h1>

        <p class="mb-5 "> Click on the quote ot the character to get more info </p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
        <Card
            v-for="personaje in listaSimpsons"
            :key="personaje.id"
            class="cursor-pointer w-55 h-70 hover:bg-simpsons-red hover:text-white transition-colors"
        >
            <CardContent
            @click="router.push(`/simpsons/galeria/${ personaje.id }`)"
            class="flex flex-col items-center gap-1 w-full px-0"
            >
                <img
                    :src="`/imagines/Simpsons/${personaje.image}`"
                    class="w-48 h-48 object-cover object-top mt-2 bg-simpsons-yellow border border-black rounded-t-md"
                />
                <h2 class="font-bold text-lg">{{ personaje.name }}n</h2>
            </CardContent>
        </Card>
     </div>

    <div class="flex items-center justify-center gap-2 mt-4">
        <button
            @click="ireAdPagina(nuncPagina - 1)"
            :disabled="nuncPagina === 1"
            :class="[
            'px-4 py-2 rounded-md font-medium transition-colors',
            nuncPagina === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-simpsons-yellow hover:bg-simpsons-red hover:text-white'
            ]"
        >
            Anterior
        </button>

        <button
            v-for="pagina in NumeroPagina"
            @click="ireAdPagina(pagina)"
            :class="[ 'w-10 h-10 rounded-md font-medium transition-colors',
                nuncPagina === pagina 
                ? 'bg-simpsons-red text-white'
                : 'bg-simpsons-yellow hover:bg-simpsons-red hover:text-white'
            ]"
              
        >
            {{ pagina }}
        </button>

        <button
            @click="ireAdPagina(nuncPagina + 1)"
            :disabled="nuncPagina === totalPaginas"
            :class="[
            'px-4 py-2 rounded-md font-medium transition-colors bg-simpsons-yellow hover:bg-simpsons-red hover:text-white',
            nuncPagina === totalPaginas
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-simpsons-yellow hover:bg-simpsons-red hover:text-white'
        ]"
        >
            Siguiente
        </button>
    </div>

</div>
</template>

<style scoped>

</style>