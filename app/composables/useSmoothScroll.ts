export const useSmoothScroll = () => {
  let isScrolling = false
  let scrollTarget = 0
  let currentScroll = 0
  let scrollVelocity = 0
  let animationId: number | null = null

  // Configuration de l'effet de scroll
  const config = {
    // Facteur d'accélération (plus élevé = plus lourd au début)
    acceleration: 0.40, // Augmenté pour plus de fluidité
    // Facteur de décélération (plus élevé = plus de friction)
    friction: 0.40, // Augmenté pour éliminer les à-coups
    // Vitesse minimale pour continuer l'animation
    minVelocity: 0.08, // Réduit pour plus de fluidité
    // Vitesse maximale pour éviter des déplacements trop rapides
    maxVelocity: 50
  }

  const smoothScrollTo = (targetY: number) => {
    scrollTarget = targetY
    if (!isScrolling) {
      isScrolling = true
      animateScroll()
    }
  }

  const animateScroll = () => {
    if (!isScrolling) return

    // Calculer la distance à parcourir
    const distance = scrollTarget - currentScroll
    
    // Si on est très proche de la cible, arrêter l'animation
    if (Math.abs(distance) < 0.5) {
      currentScroll = scrollTarget
      window.scrollTo(0, currentScroll)
      isScrolling = false
      scrollVelocity = 0
      if (animationId) {
        cancelAnimationFrame(animationId)
        animationId = null
      }
      return
    }

    // Calculer la vélocité basée sur la distance et l'accélération
    const targetVelocity = distance * config.acceleration
    
    // Appliquer la friction à la vélocité actuelle
    scrollVelocity *= config.friction
    
    // Ajouter la vélocité cible avec un facteur d'accélération
    scrollVelocity += targetVelocity * (1 - config.friction)
    
    // Limiter la vélocité maximale
    scrollVelocity = Math.max(-config.maxVelocity, Math.min(config.maxVelocity, scrollVelocity))
    
    // Mettre à jour la position de scroll
    currentScroll += scrollVelocity
    window.scrollTo(0, currentScroll)
    
    // Continuer l'animation si la vélocité est suffisante
    if (Math.abs(scrollVelocity) > config.minVelocity) {
      animationId = requestAnimationFrame(animateScroll)
    } else {
      isScrolling = false
      scrollVelocity = 0
    }
  }

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault()
    
    // Calculer la vélocité de scroll basée sur la vitesse de la molette
    const wheelDelta = e.deltaY
    const scrollSpeed = Math.abs(wheelDelta) / 100 // Normaliser la vitesse
    
    // Appliquer un facteur d'accélération basé sur la vitesse
    const accelerationFactor = Math.min(scrollSpeed * 2, 3) // Max 3x d'accélération
    
    // Calculer la nouvelle position cible
    const scrollAmount = wheelDelta * accelerationFactor
    const newTarget = Math.max(0, Math.min(
      document.documentElement.scrollHeight - window.innerHeight,
      scrollTarget + scrollAmount
    ))
    
    smoothScrollTo(newTarget)
  }

  const initSmoothScroll = () => {
    if (typeof window === 'undefined') return

    // Initialiser la position actuelle
    currentScroll = window.scrollY
    scrollTarget = currentScroll

    // Ajouter l'écouteur d'événements wheel
    window.addEventListener('wheel', handleWheel, { passive: false })
    
    // Gérer les changements de taille de fenêtre
    const handleResize = () => {
      currentScroll = window.scrollY
      scrollTarget = currentScroll
    }
    
    window.addEventListener('resize', handleResize)
    
    // Nettoyer les écouteurs au démontage
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('resize', handleResize)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }

  const destroySmoothScroll = () => {
    if (typeof window === 'undefined') return
    
    window.removeEventListener('wheel', handleWheel)
    if (animationId) {
      cancelAnimationFrame(animationId)
      animationId = null
    }
    isScrolling = false
  }

  return {
    initSmoothScroll,
    destroySmoothScroll,
    smoothScrollTo
  }
}
