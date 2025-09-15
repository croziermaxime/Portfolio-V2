import { ref, onMounted, onUnmounted } from 'vue'

export const useTextRevealAnimation = () => {
  const isAnimating = ref(false)
  const animationProgress = ref(0)

  // Fonction pour diviser un texte en lettres individuelles
  const splitTextIntoLetters = (text: string) => {
    return text.split('').map((char, index) => ({
      char: char === ' ' ? '\u00A0' : char, // Remplacer les espaces par des espaces insécables
      index,
      visible: false,
      delay: 0
    }))
  }

  // Fonction pour calculer les délais d'apparition en escalier du haut vers le bas
  const calculateStaircaseDelays = (letters: any[], topToBottom = true) => {
    const totalLetters = letters.length
    
    letters.forEach((letter, index) => {
      let delay = 0
      
      if (topToBottom) {
        // Animation du haut vers le bas (gauche à droite)
        delay = index * 80 // 80ms entre chaque lettre
      } else {
        // Animation linéaire de gauche à droite
        delay = index * 50
      }
      
      letter.delay = delay
    })
    
    return letters
  }

  // Fonction pour animer l'apparition des lettres (forward ou reverse)
  const animateLetters = (letters: any[], forward = true, onComplete?: () => void) => {
    isAnimating.value = true
    animationProgress.value = 0
    
    const maxDelay = Math.max(...letters.map(l => l.delay))
    const totalDuration = maxDelay + 500 // 500ms supplémentaires pour la dernière lettre
    
    if (forward) {
      // Animation forward : lettres apparaissent
      letters.forEach(letter => {
        setTimeout(() => {
          letter.visible = true
        }, letter.delay)
      })
    } else {
      // Animation reverse : lettres disparaissent
      letters.forEach(letter => {
        setTimeout(() => {
          letter.visible = false
        }, maxDelay - letter.delay) // Inverser l'ordre
      })
    }
    
    // Mettre à jour le progrès de l'animation
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - (Date.now() - totalDuration)
      animationProgress.value = Math.min(elapsed / totalDuration, 1)
      
      if (animationProgress.value >= 1) {
        clearInterval(progressInterval)
        isAnimating.value = false
        onComplete?.()
      }
    }, 16) // ~60fps
  }

  // Fonction pour réinitialiser l'animation
  const resetAnimation = (letters: any[]) => {
    letters.forEach(letter => {
      letter.visible = false
    })
    isAnimating.value = false
    animationProgress.value = 0
  }

  // Fonction pour créer un effet de révélation au scroll bidirectionnel
  const createScrollReveal = (element: HTMLElement, letters: any[], threshold = 0.3) => {
    let isVisible = false
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            // Entrer dans le viewport - animation forward
            isVisible = true
            animateLetters(letters, true) // true = forward
          } else if (!entry.isIntersecting && isVisible) {
            // Sortir du viewport - animation reverse
            isVisible = false
            animateLetters(letters, false) // false = reverse
          }
        })
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    )
    
    observer.observe(element)
    
    return () => observer.disconnect()
  }

  return {
    isAnimating,
    animationProgress,
    splitTextIntoLetters,
    calculateStaircaseDelays,
    animateLetters,
    resetAnimation,
    createScrollReveal
  }
}
