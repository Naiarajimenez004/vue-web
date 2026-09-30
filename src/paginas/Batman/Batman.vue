<script setup lang="ts">
import { House } from '@lucide/vue';

</script>


<template>

  <div class="Batman">
      <nav class="extra-nav">
        <RouterLink to="/">
          <House class="icon-home" />
        </RouterLink>
      </nav>
    
      <RouterLink to="/">
        <House class="icon-home" />
      </RouterLink>

      <header class="Titulo">
          <h1>Batman</h1>
          <p>Él puede tomar la decisión que nadie más puede, la decisión correcta</p>
        <div id="Titulo-Batman" class="Titulo-img"></div>
      </header>
  </div>



</template>

<style scoped>

.Batman {
    font-family: Arial, Helvetica, sans-serif; 

}

.icon-home {
    width: center;
    Height: center;
    color: slateblue;
}

.icon-home {
    margin-left: 350px;
}

.icon-home :hover {
    color: white;
    background-color: red;

}

.extra-nav {
  background-color: white;
  opacity: 0.7;
  box-shadow: rgba(0, 0, 0, 0.7);
  position: center;
  top: 0;
  width: 11rem;
  border-radius: 0 0 1rem 0;
  z-index: 1;
}

@media (min-width: 640px){
  .extra-nav {
    width: 100%;
    border-radius: 0;
    opacity: 1;
    left: 0;
  }
}

.Titulo-img {
  background-size: 100% 100%;
  background-position: center center;
  background-image: url("../imagines/Batman/batman.jpg");
  min-height: 100vh;
}

.Titulo-img:hover {
  background-size: 115% 115%;
}

.Titulo > h1 {
  position: absolute;
  top: 63%;
  width: 100%;
  text-align: center;
  font-size: 5rem; 
  color: white;
  pointer-events:none;
  font-family: "batman";
}

.Titulo > p {
  position: absolute;
  top: 36%;
  width: 100%;
  text-align: center;
  font-size: 1rem;
  color: white;
  pointer-events:none;
  font-family: "batman";
}

@media (min-width: 900px) {
  .titulus > p {
    display: block;
  }
}
</style>