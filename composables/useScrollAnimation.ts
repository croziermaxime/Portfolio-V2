export const useScrollAnimation = () => {
  const initScrollAnimation = () => {
    if (process.client) {
      const heroSection = document.querySelector('.hero-section')
      const contentSections = document.querySelectorAll('.content-section')

      if (heroSection && contentSections.length > 0) {
        let hasScrolled = false
        
        const handleScroll = () => {
          const scrollY = window.scrollY
          
          if (!hasScrolled && scrollY > 100) {
            hasScrolled = true
            
            // Faire apparaître les sections de contenu une par une
            contentSections.forEach((section, index) => {
              setTimeout(() => {
                section.classList.add('visible')
              }, index * 300)
            })

            // Faire disparaître la hero section
            setTimeout(() => {
              heroSection.style.opacity = '0'
              heroSection.style.transform = 'scale(0.95)'
            }, 500)
          }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
      }
    }
  }

  return {
    initScrollAnimation
  }
}