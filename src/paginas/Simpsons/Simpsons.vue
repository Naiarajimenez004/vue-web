
<script setup lang="ts">
import { House } from '@lucide/vue';

</script>

<template>

    <div class="Batman">
 
        <RouterLink to="/">
            <House class="icon-home" />
        </RouterLink>

        <header class="Titulo">

            <h1 class="text-6x1 m-8 text-red-800 bg-amber-300 w-fit px-12 py-5 rounded-2xl shadow-x1 hover:bg-red-800 hover:text-white">Simpsons</h1>  
        </header>
    </div>

</template>

<style scoped>

.icon-home {
    width: 3rem;
    height: 3rem;
    color: slateblue;
}

.icon-home {
    margin-left: 0px;
}

.icon-home :hover {
    color: rgb(255, 255, 255);
    background-color: slateblue;

}


.Titulo-img:hover {
  background-size: 115% 115%;
}

.Titulo-img > h1 {
  position: absolute;
  top: 63%;
  width: 100%;
  text-align: center;
  font-size: 5rem; 
  color: white;
  pointer-events:none; 
}

.Titulo > p {
  position: absolute;
  top: 36%;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: white;
  pointer-events:none;
}

.saludo {
  color: red;
  font-size: rem;
}

</style>