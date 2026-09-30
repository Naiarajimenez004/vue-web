
<script setup lang="ts">
import { House } from '@lucide/vue';

</script>

<template>

    <div class="Batman">
 
        <RouterLink to="/">
            <House class="icon-home" />
        </RouterLink>

        <header class="Titulo">

            <h1>Simpsons</h1>
            <div id="Titulo-Simpsons" class="Titulo-img"></div>
            <p>Soy homero chino</p>
        </header>
    </div>

</template>

<style scoped>

.icon-home {
    width: 2rem;
    Height: 2rem ;
    color: slateblue;
}

.icon-home {
    margin-left: 200px;
}

.icone-home :hover {
    color: white;
    background-color: red;

}

.Titulo-img {
  background-size: 100% 100%;
  background-position: center center;
  background-image: url("../imagines/Simpsons/images.jpg");
  min-height: 100vh;
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


</style>