export const useNavbarColor = () => {
  const logoColor = ref('#ffffff')
  const burgerColor = ref('#ffffff')
  
  const updateNavbarColors = () => {
    if (process.client) {
      const navbar = document.querySelector('.navbar-klimenko')
      if (!navbar) return
      
      // Analyser plusieurs points pour une détection plus précise
      const navbarRect = navbar.getBoundingClientRect()
      const samplePoints = [
        { x: navbarRect.left + 50, y: navbarRect.top + navbarRect.height / 2 },
        { x: navbarRect.right - 50, y: navbarRect.top + navbarRect.height / 2 },
        { x: navbarRect.left + navbarRect.width / 2, y: navbarRect.top + navbarRect.height / 2 }
      ]
      
      let totalLuminance = 0
      let validSamples = 0
      
      samplePoints.forEach(point => {
        // Utiliser l'API Canvas pour analyser la couleur du pixel
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        
        canvas.width = 1
        canvas.height = 1
        
        // Créer un élément temporaire pour capturer le rendu
        const tempElement = document.createElement('div')
        tempElement.style.position = 'fixed'
        tempElement.style.left = point.x + 'px'
        tempElement.style.top = point.y + 'px'
        tempElement.style.width = '1px'
        tempElement.style.height = '1px'
        tempElement.style.pointerEvents = 'none'
        tempElement.style.zIndex = '-1'
        tempElement.style.opacity = '0'
        
        document.body.appendChild(tempElement)
        
        // Obtenir la couleur calculée
        const computedStyle = window.getComputedStyle(tempElement)
        const backgroundColor = computedStyle.backgroundColor
        
        // Analyser la luminosité
        const rgb = backgroundColor.match(/\d+/g)
        if (rgb && rgb.length >= 3) {
          const r = parseInt(rgb[0])
          const g = parseInt(rgb[1])
          const b = parseInt(rgb[2])
          
          // Calculer la luminosité relative
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
          totalLuminance += luminance
          validSamples++
        }
        
        document.body.removeChild(tempElement)
      })
      
      if (validSamples > 0) {
        const averageLuminance = totalLuminance / validSamples
        
        // Choisir la couleur en fonction de la luminosité moyenne
        const newColor = averageLuminance > 0.5 ? '#000000' : '#ffffff'
        
        // Transition fluide
        logoColor.value = newColor
        burgerColor.value = newColor
      }
    }
  }
  
  const initNavbarColorDetection = () => {
    if (process.client) {
      // Mise à jour initiale
      updateNavbarColors()
      
      // Observer les changements de scroll
      let ticking = false
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            updateNavbarColors()
            ticking = false
          })
          ticking = true
        }
      }
      
      window.addEventListener('scroll', handleScroll, { passive: true })
      
      // Observer les changements de résize
      window.addEventListener('resize', updateNavbarColors)
      
      // Cleanup
      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', updateNavbarColors)
      })
    }
  }
  
  return {
    logoColor,
    burgerColor,
    updateNavbarColors,
    initNavbarColorDetection
  }
}
