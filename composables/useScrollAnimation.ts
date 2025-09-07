export const useScrollAnimation = () => {
  const initScrollAnimation = () => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const heroSection = document.querySelector('.hero-section') as HTMLElement | null
      const servicesSection = document.querySelector('.services-section') as HTMLElement | null
      const navbar = document.querySelector('.navbar') as HTMLElement | null

      if (heroSection && servicesSection) {
        // Initialiser les styles immédiatement pour éviter le flash
        heroSection.style.opacity = '1'
        heroSection.style.transform = 'scale(1)'
        heroSection.style.transition = 'none'
        
        servicesSection.style.transform = 'translateY(100vh)'
        servicesSection.style.opacity = '1'
        servicesSection.style.transition = 'none'
        
        if (navbar) {
          navbar.style.opacity = '1'
          navbar.style.transform = 'translateY(0)'
          navbar.style.transition = 'all 0.3s ease'
        }

        const handleScroll = () => {
          const scrollY = window.scrollY
          const windowHeight = window.innerHeight
          
          // Animation de la section Services qui glisse par-dessus la hero section
          const servicesScrollProgress = Math.max(0, Math.min(scrollY / windowHeight, 1))
          
          if (servicesScrollProgress < 1) {
            // Pendant l'animation : glisser par-dessus la hero section
            const translateY = (1 - servicesScrollProgress) * 100
            servicesSection.style.transform = `translateY(${translateY}vh)`
            servicesSection.style.opacity = '1'
            servicesSection.style.position = 'fixed'
            servicesSection.style.zIndex = '10'
            servicesSection.style.top = '0'
            
            // Garder la hero section visible pendant l'animation
            heroSection.style.opacity = '1'
            heroSection.style.transform = 'scale(1)'
          } else {
            // Une fois l'animation terminée : transformer en position normale
            servicesSection.style.position = 'relative'
            servicesSection.style.zIndex = '5'
            servicesSection.style.top = 'auto'
            servicesSection.style.transform = 'translateY(0)'
            servicesSection.style.opacity = '1'
            
            // Cacher la hero section
            heroSection.style.opacity = '0'
            heroSection.style.transform = 'scale(0.95)'
          }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        
        // Déclencher l'animation au chargement
        handleScroll()
      }
    }
  }

  return {
    initScrollAnimation
  }
}
// Removed duplicate export