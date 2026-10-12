
<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';


</script>

<template>
    <div class="bg-(--color-domus-navy) h-screen text-white font-press Start 2p text-center flex flex-col items-center justify-center gap-12 fixed w-screen overflow-hidden">

      <img class="absolute opacity-30" src="/imagines/tonitrui.png"/>

        <h1 class="text-5xl md:text-7xl lg:text-8xl fond-bold pb-5 md:pb-20 z-10 transition-all">
            <span class="text-domus-cyan"> Diseño </span> Web y 
            <br> 
            Apps <span class="text-domus-cyan"> interactivas </span> 
        </h1>

        <p class="text-lg md:text-4xl transition-all ">
            Aprendiendo a crear aplicaciones web
        </p>

    <div class="scale-z-10">
            <Button variant="home" class="mr-2">
                <RouterLink to="/Indecision">Sí o no</RouterLink>
            </Button>

            <Button variant="home" class="mr-2">
                <RouterLink to="/Simpsons">Simpsons</RouterLink>
            </Button>

            <Button variant="home" class="mr-2">
                <RouterLink to="/Batman">Batman</RouterLink>
            </Button>

            <Button variant="home" class="mr-2">
                <a href="https://www.youtube.com/">Sí o no</a>
            </Button>
        </div>
    </div>

</template>
