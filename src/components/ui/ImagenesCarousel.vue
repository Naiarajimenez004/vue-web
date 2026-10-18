<script setup lang="ts">

import { CardContent } from '@/components/ui/card'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'


interface Props {
    fotos: string[]
    basePath: string
    autoplayDelay?: number
    loop?: boolean 
    dragFree?: boolean
}

const props = withDefaults( defineProps<Props>(), {
    autoplayDelay: 2000,
    loop: true,
    dragFree: true
})
</script>

<template>
    <div>
  <Carousel
    class="w-full, max-w-md md:max-w-2xl lg:max-w-4xl"
    :opts="{
      dragFree:props.dragFree,
      loop:props.loop, 
    }"
    :plugins="[Autoplay({
      delay: props.autoplayDelay,
    })]"
    >
    <CarouselContent>
      <CarouselItem v-for="(fotos, index) in props.fotos" :key="index">
        <div class="p-1">
          <Card>
            <CardContent 
              class="flex aspect-6/4 items-center justify-center p-6">
              <img 
              :src="`${props.basePath}/${fotos}.jpg`"
              class="w-full h-full object-cover"
              alt:="`imagen ${index + 1} de Batman`"
               />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious class="hidden md:flex bg-gray-900 text-white"/>
    <CarouselNext class="hidden md:fle bg-gray-900 text-white" />
  </Carousel>
    </div>
</template>


<style scoped>

</style>