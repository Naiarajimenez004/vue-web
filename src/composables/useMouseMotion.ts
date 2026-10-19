
interface coordenadas {
  x: number
  y: number
}

import { ref } from 'vue'

export const useMouseMotion = () => {

    const mousePosition = ref<coordenadas>({
        x: 0,
        y: 0
    })
    
const cumMouseMove = (event: MouseEvent) => {
  
  const rect = (event.target as HTMLElement).getBoundingClientRect()

  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2

  const mouseX = event.clientX - rect.left
  const mouseY = event.clientY - rect.top

  mousePosition.value = {
    x: (centerX - mouseX) * 0.1,
    y: (centerY - mouseY) * 0.1
  }
}

const cumMouseLeave = () => {
  mousePosition.value ={
    x: 0,
    y: 0
  }
}

    return {
        mousePosition,
        cumMouseLeave,
        cumMouseMove

    }
}