export const useLocomotiveScroll = () => {
  let scroll: any = null
  let isInitialized = false

  const initLocomotiveScroll = async (container?: string) => {
    // Vérifier que nous sommes côté client
    if (typeof window === 'undefined' || process.server) {
      console.log('Locomotive Scroll: Skipping server-side initialization')
      return null
    }

    // Éviter les initialisations multiples
    if (isInitialized) {
      console.log('Locomotive Scroll: Already initialized')
      return scroll
    }

    try {
      // Import dynamique de Locomotive Scroll
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      
      // Attendre que le DOM soit prêt
      await new Promise(resolve => {
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', resolve)
        } else {
          resolve(undefined)
        }
      })

      // Attendre un peu plus pour s'assurer que tous les composants sont montés
      await new Promise(resolve => setTimeout(resolve, 200))
      
      const scrollContainer = container || document.querySelector('[data-scroll-container]') as HTMLElement
      
      if (!scrollContainer) {
        console.warn('Locomotive Scroll: Aucun conteneur [data-scroll-container] trouvé')
        return null
      }

      // Configuration optimisée pour votre site
      const config = {
        el: scrollContainer,
        smooth: true,
        multiplier: 1,
        class: 'is-revealed',
        scrollbarContainer: false,
        lerp: 0.08, // Plus fluide
        smartphone: {
          smooth: true,
          breakpoint: 768
        },
        tablet: {
          smooth: true,
          breakpoint: 1024
        },
        // Configuration pour préserver vos animations
        getDirection: true,
        getSpeed: true,
        // Désactiver les animations par défaut pour les éléments sans data-scroll-animate
        resetNativeScroll: true
      }

      // Initialiser Locomotive Scroll
      scroll = new LocomotiveScroll(config)
      isInitialized = true

      // Événements de scroll
      scroll.on('scroll', (instance: any) => {
        // Vous pouvez ajouter des callbacks personnalisés ici
        // Par exemple pour vos animations de thème
      })

      // Événement de call (pour les éléments avec data-scroll-call)
      scroll.on('call', (func: string, way: string, obj: any) => {
        console.log('Locomotive Scroll Call:', func, way, obj)
      })

      // Événement de ready
      scroll.on('ready', () => {
        console.log('Locomotive Scroll ready')
        // Mettre à jour après le ready
        setTimeout(() => {
          updateLocomotiveScroll()
        }, 100)
      })

      console.log('Locomotive Scroll initialisé avec succès')
      return scroll

    } catch (error) {
      console.error('Erreur lors de l\'initialisation de Locomotive Scroll:', error)
      return null
    }
  }

  const destroyLocomotiveScroll = () => {
    if (scroll) {
      try {
        scroll.destroy()
        scroll = null
        isInitialized = false
        console.log('Locomotive Scroll détruit')
      } catch (error) {
        console.error('Erreur lors de la destruction de Locomotive Scroll:', error)
      }
    }
  }

  const updateLocomotiveScroll = () => {
    if (scroll) {
      try {
        scroll.update()
        console.log('Locomotive Scroll mis à jour')
      } catch (error) {
        console.error('Erreur lors de la mise à jour de Locomotive Scroll:', error)
      }
    }
  }

  const scrollTo = (target: string | number | HTMLElement, options?: any) => {
    if (scroll) {
      try {
        scroll.scrollTo(target, options)
      } catch (error) {
        console.error('Erreur lors du scroll vers:', target, error)
      }
    }
  }

  const start = () => {
    if (scroll) {
      try {
        scroll.start()
      } catch (error) {
        console.error('Erreur lors du démarrage de Locomotive Scroll:', error)
      }
    }
  }

  const stop = () => {
    if (scroll) {
      try {
        scroll.stop()
      } catch (error) {
        console.error('Erreur lors de l\'arrêt de Locomotive Scroll:', error)
      }
    }
  }

  const getScrollInstance = () => {
    return scroll
  }

  const isReady = () => {
    return isInitialized && scroll !== null
  }

  return {
    initLocomotiveScroll,
    destroyLocomotiveScroll,
    updateLocomotiveScroll,
    scrollTo,
    start,
    stop,
    getScrollInstance,
    isReady
  }
}
