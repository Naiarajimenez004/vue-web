
<script setup lang="ts">
import logoSimpsons from '@/components/logoSimpsons.vue';
import Button from '@/components/ui/button/Button.vue';
</script>

<template>
<div class="bg-simpsons-yellow min-h-screen text-center p-4 flex flex-col items-center justify-center">
	
<logoSimpsons estilo="w-[24rem] h-[35rem] bg-green-500"/>

    <h1 class="text-xl my-1 font-medium">
    	Discover some of the most amazing Quotes from The Simpsons
	</h1>
	<div>
    	<strong>This is an unofficial app (even though it looks so cool!)</strong>
	</div>
	<div className="mt-8 flex gap-5">
		<Button variant="Terciario" size="largo">
      		<RouterLink to="/">Exit</RouterLink>
    	</Button>
    	<Button variant="Terciario" size="largo">
      		<RouterLink to="">Enter</RouterLink>
    	</Button>
	</div>

<div class="flex gap-12">
    <img class="object-contain hidden md:block" src="/imagines/Simpsons/bart.png" width="200"/>
    <img class="object-contain mt-20 hidden md:block" src="/imagines/Simpsons/homer.png" width="195"/>
    <img class="object-contain mt12 md:mt-0" src="/imagines/Simpsons/moe.png" width="220"/>
</div>

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