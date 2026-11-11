<script setup lang="ts">
import { ref } from 'vue';
import { route, useRouter } from 'vue-router';
import { personajes, type personaje } from './data';

const route = useRouter()
const router = useRouter()

const personaje = ref<personaje | undefined>(
    personajes.find(personaje => personaje.find === Number(route.params.id))
)

</script>

<template>
<div 
class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8"
v-if="personaje"
>
    <div>
        <h1 class="titulus-quote"> 
            {{ personaje.name }}
        </h1>

        <div class="info-quote">
            <p class="description">
                {{ personaje.description }}
            </p>
                    
            <div class="arca-quote" @click="router.push(`/Simpsons/galeria`)">
                <p class="quote"> « {{ personaje.quote }} »</p>
            </div>
        </div>
    </div>

    <figure class="figure-quote">
    <img :src="`/imagines/Simpsons/${personaje.image}`" alt="" />
    </figure>
</div>


</template>



<style scoped>
.titulus-quote {
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin-bottom: 1.25rem;
}

@media (min-width: 1024px) {
  .titulus-quote {
    font-size: 3rem;
    line-height: 1;
  }
}

.arca-quote {
  background-color: rgb(239 68 68);
  padding: 1.25rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 48rem;
}
 
.quote {
  color: white;
  text-align: center;
  font-weight: 200;
  font-size: 1.8rem;
  line-height: 2.2rem;
  margin-bottom: 1.25rem; 
}
 
@media (min-width: 1024px) {
  .quote {
    font-size: 2.2rem;
    line-height: 2.5rem;
  }
}
 
.description {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 300;
  margin-bottom: 2.5rem;
  max-width: 48rem;
}
 
@media (min-width: 1024px) {
  .description {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}
 
@media (min-width: 1024px) {
  .info-quote {
    max-width: 48rem;
  }
}

.figure-quote {
  display: flex;
  justify-content: center;
  min-width: min-content;
}

.figure-quote > img {
  object-fit: contain;
}
</style>