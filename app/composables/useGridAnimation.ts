import { ref, onMounted, onUnmounted } from 'vue'

export interface GridCell {
  id: string
  x: number
  y: number
  highlighted: boolean
  delay: number
  highlightTime: number
  fadeOutDelay: number
}

export const useGridAnimation = () => {
  // État de la grille interactive
  const gridCells = ref<GridCell[]>([])
  const mousePosition = ref({ x: 0, y: 0 })
  const isInitialized = ref(false)

  // Configuration de la grille
  const GRID_SIZE = 25
  const HIGHLIGHT_RADIUS = 50

  // Variables pour l'optimisation des performances
  let animationFrameId: number | null = null
  let lastMouseX = 0
  let lastMouseY = 0
  const fadeOutTimeouts = new Map<string, number>()
  let lastHighlightedCells = new Set<string>()

  // Initialisation de la grille
  const initGrid = () => {
    const cells: GridCell[] = []
    
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    
    const cols = Math.ceil(viewportWidth / GRID_SIZE)
    const rows = Math.ceil(viewportHeight / GRID_SIZE)
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        cells.push({
          id: `${row}-${col}`,
          x: col * GRID_SIZE,
          y: row * GRID_SIZE,
          highlighted: false,
          delay: Math.random() * 200,
          highlightTime: 0,
          fadeOutDelay: Math.random() * 300 + 200 // Délai aléatoire entre 200-500ms
        })
      }
    }
    
    gridCells.value = cells
    isInitialized.value = true
  }

  // Fonction pour gérer l'effet de trainée
  const highlightCellWithTrail = (cell: GridCell) => {
    // Si la cellule est déjà en surbrillance, ne pas refaire le timeout
    if (cell.highlighted) {
      return
    }
    
    // Mettre en surbrillance immédiatement
    cell.highlighted = true
    cell.highlightTime = Date.now()
    
    // Programmer le retour à la normale avec délai aléatoire
    const timeoutId = setTimeout(() => {
      cell.highlighted = false
      fadeOutTimeouts.delete(cell.id)
    }, cell.fadeOutDelay)
    
    fadeOutTimeouts.set(cell.id, timeoutId)
  }

  // Gestion du mouvement de la souris
  const handleMouseMove = (event: MouseEvent) => {
    const mouseX = event.clientX
    const mouseY = event.clientY
    
    // Mettre à jour la position de la souris
    mousePosition.value = { x: mouseX, y: mouseY }
    
    // Éviter les calculs inutiles si la souris n'a pas bougé (seuil plus élevé)
    if (Math.abs(mouseX - lastMouseX) < 10 && Math.abs(mouseY - lastMouseY) < 10) {
      return
    }
    
    lastMouseX = mouseX
    lastMouseY = mouseY
    
    // Annuler l'animation précédente si elle existe
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }
    
    // Utiliser requestAnimationFrame pour des performances optimales
    animationFrameId = requestAnimationFrame(() => {
      // Calculer la position de grille directement (plus rapide)
      const gridX = Math.floor(mouseX / GRID_SIZE)
      const gridY = Math.floor(mouseY / GRID_SIZE)
      
      // Vérifier si on est dans les limites de la grille
      if (gridX >= 0 && gridY >= 0) {
        // Randomiser le rayon d'effet (entre 1 et 2 cellules pour de meilleures performances)
        const effectRadius = Math.floor(Math.random() * 2) + 1
        
        // Randomiser le nombre de cellules à affecter (entre 2 et 6 pour de meilleures performances)
        const maxCells = Math.floor(Math.random() * 5) + 2
        
        // Créer une liste de toutes les cellules possibles dans le rayon
        const possibleCells: GridCell[] = []
        for (let r = gridY - effectRadius; r <= gridY + effectRadius; r++) {
          for (let c = gridX - effectRadius; c <= gridX + effectRadius; c++) {
            const cellId = `${r}-${c}`
            const cell = gridCells.value.find(cell => cell.id === cellId)
            if (cell) {
              possibleCells.push(cell)
            }
          }
        }
        
        // Mélanger et prendre un nombre aléatoire de cellules
        const shuffledCells = possibleCells.sort(() => Math.random() - 0.5)
        const cellsToHighlight = shuffledCells.slice(0, Math.min(maxCells, possibleCells.length))
        
        // Appliquer l'effet de trainée aux cellules sélectionnées
        cellsToHighlight.forEach(cell => {
          highlightCellWithTrail(cell)
        })
      }
    })
  }

  // Gestion de la sortie de la souris
  const handleMouseLeave = () => {
    gridCells.value.forEach(cell => {
      cell.highlighted = false
    })
  }


  // Initialisation
  const initGridAnimation = () => {
    if (typeof window !== 'undefined') {
      initGrid()
      
      // Attacher les événements au document pour s'assurer qu'ils fonctionnent
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseleave', handleMouseLeave)
      
      // Recalculer la grille lors du redimensionnement
      window.addEventListener('resize', initGrid)
    }
  }

  // Nettoyage
  const cleanup = () => {
    if (typeof window !== 'undefined') {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', initGrid)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      
      // Nettoyer tous les timeouts de fade-out
      fadeOutTimeouts.forEach(timeoutId => {
        clearTimeout(timeoutId)
      })
      fadeOutTimeouts.clear()
    }
  }

  // Auto-initialisation au montage
  onMounted(() => {
    initGridAnimation()
  })

  // Auto-nettoyage au démontage
  onUnmounted(() => {
    cleanup()
  })

  return {
    gridCells,
    mousePosition,
    isInitialized,
    initGridAnimation,
    cleanup
  }
}
