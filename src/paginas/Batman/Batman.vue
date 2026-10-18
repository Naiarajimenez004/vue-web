<script setup lang="ts">
import { House } from '@lucide/vue';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { CardContent } from '@/components/ui/card'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'

const scrollToSection = (sectionId: string) => {
  if (sectionId === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return
    }

    const element = document.querySelector<HTMLElement>(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

const fotos = ["justice", "arkham", "superman", "varios", "villana", "villano", "grupo", "robin", "anne", "joker", "resplandor", "cat", "gafas", "league", "fondoVerde"];

</script>


<template>

  <div class="Batman">

      <nav class="extra-nav flex flex-col sm:flex-row justify-between px-3">
      <RouterLink to="/">
        <House class="icon-home" />
      </RouterLink>

        <NavigationMenu>
          <NavigationMenuList class="flex flex-col sm:flex-row">
            <NavigationMenuItem>
              <a href="#" @click.prevent="scrollToSection('#')"> 
              <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-brand-purple hover:text-white transition-colors']">
                Portada
              </NavigationMenuLink>
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a href="#vehiculos" @click.prevent="scrollToSection('#vehiculos')">
              <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-brand-purple hover:text-white transition-colors']">
                Vehiculos
              </NavigationMenuLink>
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a href="#imagenes" @click.prevent="scrollToSection('#imagenes')">
              <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-brand-purple hover:text-white transition-colors']">
                Imágenes
              </NavigationMenuLink>
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a href="#contacto" @click.prevent="scrollToSection('#contacto')">
              <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-brand-purple hover:text-white transition-colors']">
                Contacto
              </NavigationMenuLink>
              </a>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    
      <header class="Titulo">
          <h1>Batman</h1>
          <p>Él puede tomar la decisión que nadie más puede, la decisión correcta</p>
        <div id="Titulo-Batman" class="Titulo-img"></div>
      </header>
  </div>

<section id="vehiculos">    
  <div class="vehiculos-arca">

      <div class="item uno">
          <div class="notitia">
            <h2>Avión</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vulputate elit eget fermentum. Ut laoreet ante lacus. Quisque ut tincidunt metus. Curabitur congue, arcu nec tempus sodales, neque sem ultrices mauris, eu tincidunt nibh nibh eu massa. Aenean rhoncus quis nibh ac facilisis.</p>
            <small>Fabricado en 2005</small>
            
          </div>
          <img src="/imagines/Batman/avion.jpg"/>
      </div>

      <div class="item dos">
        <div class="notitia">
          <h2>Moto</h2>
          <p>Nulla aliquip cupidatat voluptate veniam nostrud aliquip sit enim officia. Sit eu pariatur officia qui dolor adipisicing cupidatat. Sit consectetur et eu ut esse laboris nulla.</p>
          <small>Fabricado en 2006</small>
          
        </div>
        <img src="/imagines/Batman/moto.jpg"/>
      </div>
      
      <div class="item tres">
        <div class="notitia">
          <h2>Coche</h2>
          <p>Irure adipisicing est minim eu ad dolor. Eu ea commodo pariatur ut occaecat in cupidatat reprehenderit ut laborum duis. Sunt minim ex fugiat reprehenderit. Lorem consectetur reprehenderit commodo non</p>
          <small>Fabricado en 2007</small>
          
        </div>
        <img src="/imagines/Batman/car.jpg"/>
      </div>
  </div> 

      <div class="vehiculos-Titulos">
        <h1>Vehículos de Batman</h1>
      </div>
</section>
<section id="videre" class="w-full flex justify-center min-h-[60vh] lg:min-h-[95vh] items-center bg-gray-900">

  <Carousel 
    class="w-full, max-w-md md:max-w-2xl lg:max-w-4xl"
    :opts="{
      dragFree:true,
      loop:true,
    }"
    :plugins="[Autoplay({
      delay: 2000,
    })]"
    >
    <CarouselContent>
      <CarouselItem v-for="i in fotos.length" :key="i">
        <div class="p-1">
          <Card>
            <CardContent 
              class="flex aspect-6/4 items-center justify-center p-6">
              <img 
              :src="`/imagines/Batman/${fotos[i-1]}.jpg`"
              class="w-full h-full object-cover"
              alt:="`imagen ${i} de Batman`"
               />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious class="hidden md:flex justify-center items-center bg-gray-900 text-white"/>
    <CarouselNext class="hidden md:flex justify-center items-center bg-gray-900 text-white" />
  </Carousel>

</section>

</template>

<style scoped>

.Batman {
    font-family: Arial, Helvetica, sans-serif; 

}


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

.extra-nav {
  background-color: rgb(187, 56, 253);
  opacity: 0.7;
  box-shadow: rgba(0, 0, 0, 0.7);
  position: fixed;
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
    
  }

}

@media (min-width: 450px){
  .extra-nav {
    width: fixed;
    padding-inline: calc(var(--spacing) * 1);
    padding-block: calc(var(--spacing) * 6);
    margin: calc(var(--spacing) * 0);
    border-radius: 2;
    opacity: 1;
    
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

@media (min-width: 600px) {
  .Titulo > p {
    display: block;
  }
}

#vehiculos {
  max-width: 510px;
  margin: 0 auto;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
}

.vehiculos-arca {
  display: flex;
  flex-direction: column;
  order: 1;
}

.vehiculos-Titulos {
  height: 9rem; /* 88px */
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: center;
  justify-content: center;
  align-items: center;
}

.item {
  padding: 1.5rem 0;
  height: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.item > img {
  width: 420px;
}

.uno {
  background-color: rgba(220, 220, 220, 0.2) ; 
  order: 2;
}
  .uno > img {
    order: -1;

  }
.dos {
  background-color: rgba(220, 220, 220, 0.8);
}

.tres {
  background-color: rgba(220, 220, 220, 0.8);
  order: 3;
}

.notitia {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.notitia > small {
  font-weight: bold;
  padding: 1rem;

}

.notitia > h2 {
  font-size: 1.7rem; 
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
  padding-bottom: 1rem;
} 

@media (min-width: 640px) {
  #vehiculos {
    max-width: 576px;
  }   

}

@media (min-width: 768px) {
  #vehiculos {
    max-width: 900px;

  }   

  .item {
    flex-direction: row;
    height: 320px;

  }

  .notitia {
    width: 40%;

  }

}

@media (min-width: 1024px) {
  #vehiculos {
    max-width: 1280px;

  } 

  .vehiculos-arca {
    flex-direction: row;

  }

  .item {
    flex-direction: column;
    height: 500px;

  }

  .notitia {
    width: 90%;
  }

  .uno > img {
    order: -1;

  }

}




</style>





 


 

  
 







  



 