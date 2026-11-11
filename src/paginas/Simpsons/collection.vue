<script setup lang="ts">
import Card from '@/components/ui/card/Card.vue';
import CardContent from '@/components/ui/card/CardContent.vue';
import { ref } from 'vue';
import { personajes } from './data';



const listaSimpsons = ref(personajes.slice(0, 6))

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
            <CardContent class="flex flex-col items-center gap-1 w-full px-0">
                <img
                    :src="`/imagines/Simpsons/${personaje.image}`"
                    class="w-48 h-48 object-cover object-top mt-2 bg-simpsons-yellow border border-black rounded-t-md"
                />
                <h2 class="font-bold text-lg">{{ personaje.name }}n</h2>
            </CardContent>
        </Card>

     </div>



</div>
</template>

<style scoped>

</style>