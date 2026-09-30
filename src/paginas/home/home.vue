
<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';


</script>

<template>
    <div class = "fondo-home">
    <h1>
       <span> Diseño </span> Web y 
       <br> 
       Apps <span> interactivas </span> 
    </h1>
        <div class="Botones">
            <Button>
                <RouterLink to="/Indecision">Sí o no</RouterLink>
            </Button>

            <Button>
                <RouterLink to="/Simpsons">Simpsons</RouterLink>
            </Button>

            <Button>
                <RouterLink to="/Batman">Batman</RouterLink>
            </Button>

            <Button>
                <a href="https://www.youtube.com/">Sí o no</a>
            </Button>
        </div>
    </div>

</template>

<style scooped>

.Botones > Button {
    background-color: rgb(118, 141, 224);
}

 h1 {
    font-size: 3rem;
 }

.fondo-home {
  background-color: rgb(231, 163, 214);
  height: 100vh;
  color: rgb(24, 182, 246);
}


.Botones > Button:hover {
  background-color: rgba(16, 169, 229, 0.7);
} 

</style>