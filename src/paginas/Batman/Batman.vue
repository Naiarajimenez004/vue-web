<script setup lang="ts">
import { House } from '@lucide/vue';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

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


</script>


<template>

  <div class="Batman">
      <div class="extra-nav">
      <RouterLink to="/">
        <House class="icon-home" />
      </RouterLink>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <a href="#" @click.prevent="scrollToSection('#')"> 
              <NavigationMenuLink :class="navigationMenuTriggerStyle">
                Portada
              </NavigationMenuLink>
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a href="#vehiculos" @click.prevent="scrollToSection('#vehiculos')">
              <NavigationMenuLink :class="navigationMenuTriggerStyle">
                Vehiculos
              </NavigationMenuLink>
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a href="#imagenes" @click.prevent="scrollToSection('#imagenes')">
              <NavigationMenuLink :class="navigationMenuTriggerStyle">
                Imágenes
              </NavigationMenuLink>
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a href="#contacto" @click.prevent="scrollToSection('#contacto')">
              <NavigationMenuLink :class="navigationMenuTriggerStyle">
                Contacto
              </NavigationMenuLink>
              </a>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </div>
    
      <header class="Titulo">
          <h1>Batman</h1>
          <p>Él puede tomar la decisión que nadie más puede, la decisión correcta</p>
        <div id="Titulo-Batman" class="Titulo-img"></div>
      </header>
  </div>

<section id="vehiculos">    
<div class="vehiculos -titulo">
      <h1>Vehículos de Batman</h1>
    </div>
  <div class="vehiculos-caja">
    <div class="item uno">
        <div class="informacion">
          <h2>Avión</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vulputate elit eget fermentum. Ut laoreet ante lacus. Quisque ut tincidunt metus. Curabitur congue, arcu nec tempus sodales, neque sem ultrices mauris, eu tincidunt nibh nibh eu massa. Aenean rhoncus quis nibh ac facilisis.</p>
          <small>Fabricado en 2005</small>
        </div>
        <img src="/imagines/Batman/avion.jpg"/>
      </div>

      <div class="item dos">
        <div class="informacion">
          <h2>Moto</h2>
          <p>Nulla aliquip cupidatat voluptate veniam nostrud aliquip sit enim officia. Sit eu pariatur officia qui dolor adipisicing cupidatat. Sit consectetur et eu ut esse laboris nulla.</p>
          <small>Fabricado en 2006</small>
        </div>
        <img src="/imagines/Batman/moto.jpg"/>
      </div>
      
      <div class="item tres">
        <div class="informacion">
          <h2>Coche</h2>
          <p>Irure adipisicing est minim eu ad dolor. Eu ea commodo pariatur ut occaecat in cupidatat reprehenderit ut laborum duis. Sunt minim ex fugiat reprehenderit. Lorem consectetur reprehenderit commodo non</p>
          <small>Fabricado en 2007</small>
        </div>
        <img src="/imagines/Batman/car.jpg"/>
      </div>
    </div>


 </section>

</template>

<style scoped>

.Batman {
    font-family: Arial, Helvetica, sans-serif; 

}


.icon-home {
    width: 60px;
    height: 60px;
    color: slateblue;
}

.icon-home {
    margin-left: 0px;
}

.icon-home :hover {
    color: rgb(255, 255, 255);
    background-color: red;

}

.extra-nav {
  background-color: rgb(209, 126, 251);
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

#vehiculos {
  max-width: 600px;
  margin: 0 auto;
  padding: 8rem 0;
}

.vehiculos-titulus {
  height: 5.5rem; /* 88px */
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
}

.item {
  padding: 2.5rem 0;
  height: 555px;
}

.uno {
  background-color: rgba(220, 220, 220, 0.2) ; 
}

.dos {
  background-color: rgba(220, 220, 220, 0.8);
}

.tres {
  background-color: rgba(220, 220, 220, 0.8);
}
 
.informacion > small {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 1rem;
}
 
.informacion > p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  padding: 1rem;
}

.informacion > h2 {
 font-size: 1.7rem; 
 font-weight: 600;
 color: rgba(0, 0, 0, 0.7);
 padding-bottom: 1rem;
} 

img {
  width: 70%;
  height: 70%;
  object-fit: center;
  
}
</style>

