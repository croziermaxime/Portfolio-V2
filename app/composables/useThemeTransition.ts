import { ref, onMounted, onUnmounted } from 'vue'

export const useThemeTransition = () => {
  const isDarkTheme = ref(false)
  const themeProgress = ref(0) // 0 = clair, 1 = sombre

  // Configuration des sections
  const sections = {
    hero: '.hero-section',
    services: '.services-section',
    projects: '#projets',
    contact: '#contact'
  }

  // Fonction pour calculer le progrès de la transition basé sur la position de scroll
  const calculateThemeProgress = () => {
    const heroSection = document.querySelector(sections.hero)
    const servicesSection = document.querySelector(sections.services)
    const projectsSection = document.querySelector(sections.projects)
    const contactSection = document.querySelector(sections.contact)
    
    if (!heroSection || !servicesSection || !projectsSection || !contactSection) return themeProgress.value

    const heroRect = heroSection.getBoundingClientRect()
    const servicesRect = servicesSection.getBoundingClientRect()
    const projectsRect = projectsSection.getBoundingClientRect()
    const contactRect = contactSection.getBoundingClientRect()
    const windowHeight = window.innerHeight

    if (heroRect.top <= 100 && heroRect.bottom > 100) {
      return 1
    }
    if ((servicesRect.top <= 100 && servicesRect.bottom > 100) || 
      (projectsRect.top <= 100 && projectsRect.bottom > 100)) {
      return 0
    }

    // Calculer la position relative entre les sections
    const projectsBottom = projectsRect.bottom
    const contactTop = contactRect.top
    
    // Zone de transition : commencer seulement quand on arrive vraiment sur la section contact
    const transitionStart = contactTop - windowHeight * 0.2 // Commencer la transition quand la section contact est à 20% de la hauteur d'écran
    const transitionEnd = contactTop + windowHeight * 0.3 // Finir la transition quand la section contact est à 60% de la hauteur d'écran
    
    // Si on est dans la zone de transition
    if (transitionStart < windowHeight && transitionEnd > 0) {
      const totalTransitionDistance = transitionEnd - transitionStart
      const currentPosition = windowHeight - transitionStart
      const progress = Math.max(0, Math.min(1, currentPosition / totalTransitionDistance))
      
      // Appliquer une courbe d'easing pour une transition plus fluide
      return easeInOutCubic(progress)
    }
    
    // Si on est avant la zone de transition
    if (transitionStart >= windowHeight) {
      return 0
    }
    
    // Si on est après la zone de transition
    if (transitionEnd <= 0) {
      return 1
    }

    return themeProgress.value
  }

  // Fonction d'easing pour une transition plus uniforme
  const easeInOutCubic = (t: number): number => {
    // Transition plus douce et uniforme
    return t * t * (3 - 2 * t) // Smoothstep function
  }

  // Fonction pour appliquer la transition de thème
  const applyThemeTransition = (progress: number) => {
    themeProgress.value = progress
    isDarkTheme.value = progress > 0.5

    // Appliquer les styles CSS variables pour la transition
    const root = document.documentElement
    root.style.setProperty('--theme-progress', progress.toString())
    root.style.setProperty('--is-dark-theme', isDarkTheme.value ? '1' : '0')

    // Mettre à jour les classes sur le body pour les transitions CSS
    if (isDarkTheme.value) {
      document.body.classList.add('dark-theme')
      document.body.classList.remove('light-theme')
    } else {
      document.body.classList.add('light-theme')
      document.body.classList.remove('dark-theme')
    }
  }

  // Fonction de gestion du scroll
  let animationFrameId: number | null = null
  
  const handleScroll = () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }
    
    animationFrameId = requestAnimationFrame(() => {
      const progress = calculateThemeProgress()
      
      if (Math.abs(progress - themeProgress.value) > 0.005) {
        applyThemeTransition(progress)
      }
      
      animationFrameId = null
    })
  }

  // Fonction pour initialiser la transition de thème
  const initThemeTransition = () => {
    // Appliquer l'état initial
    applyThemeTransition(0)
    
    // Ajouter l'écouteur de scroll
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Calculer l'état initial
    const initialProgress = calculateThemeProgress()
    if (initialProgress !== themeProgress.value) {
      applyThemeTransition(initialProgress)
    }
  }

  // Fonction pour détruire la transition de thème
  const destroyThemeTransition = () => {
    window.removeEventListener('scroll', handleScroll)
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }
  }

  // Fonction pour forcer un thème spécifique (utile pour les tests)
  const setTheme = (dark: boolean) => {
    applyThemeTransition(dark ? 1 : 0)
  }

  // Fonction pour obtenir l'état actuel du thème
  const getCurrentTheme = () => ({
    isDark: isDarkTheme.value,
    progress: themeProgress.value
  })


  onMounted(() => {
    initThemeTransition()
  })

  onUnmounted(() => {
    destroyThemeTransition()
  })

  return {
    isDarkTheme,
    themeProgress,
    initThemeTransition,
    destroyThemeTransition,
    setTheme,
    getCurrentTheme
  }
}
