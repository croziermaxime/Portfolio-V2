<template>
  <div>
    <!-- Hero Section - Thème sombre fixe avec grille interactive -->
    <section class="hero-section">
      <!-- Grille interactive en arrière-plan -->
      <div class="hero-grid"></div>
      
      <!-- Cellules de la grille pour l'interaction -->
      <div 
        v-for="cell in gridCells" 
        :key="cell.id"
        :class="['grid-cell', { highlighted: cell.highlighted }]"
        :style="{ 
          left: cell.x + 'px', 
          top: cell.y + 'px',
          transitionDelay: cell.delay + 'ms'
        }"
      ></div>
      
      <!-- Contenu principal -->
      <div class="hero-content">
        <div class="container-custom">
          <div class="max-w-6xl mx-auto">
            <div class="grid md:grid-cols-2 gap-12 items-end">
              <!-- Colonne gauche - Photo (à venir) -->
              <div class="hidden md:block">
                <div class="w-80 h-96 mx-auto bg-gray-800/20 rounded-2xl border border-gray-700/30 flex items-center justify-center">
                  <p class="text-gray-500 text-sm">Photo à intégrer</p>
                </div>
              </div>
              
              <!-- Colonne droite - Texte -->
              <div class="text-center md:text-left">
                <h1 class="text-4xl md:text-6xl font-serif-display font-bold text-blue-600 radian-gradient mb-4 matte-glow">
                  M. Crozier
                </h1>
                <h2 class="text-xl md:text-2xl text-gray-300 mb-6 font-medium">
                  Développeur IA / Fullstack
                </h2>
                <p class="text-base md:text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
                  Transformer vos idées en solutions intelligentes grâce à l'intelligence artificielle et au développement fullstack de nouvelle génération.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <NuxtLink to="#contact" class="btn-primary text-lg px-8 py-4 hover-button pulse-cta">
                    Démarrer un projet
                  </NuxtLink>
                  <NuxtLink to="#projets" class="btn-secondary text-lg px-8 py-4 hover-button">
                    Voir mes projets
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="stack-section">
    <!-- Container de scroll pour permettre le scroll naturel -->
    <div class="scroll-container">
      <!-- Espace pour permettre le scroll -->
    </div>

    <!-- Services Section - Thème clair -->
    <section id="services" class="services-section section-padding bg-white">
        <div class="container-custom">
          <div class="max-w-6xl mx-auto">
            <div class="text-left mb-16">
                <h2 class="text-3xl md:text-5xl font-grayfel font-bold mb-6">
                  <span class="text-gray-400">Services&nbsp;Qui</span>&nbsp;
                  <span 
                    class="transforment-animated text-blue-900"
                    @mouseenter="handleMouseEnter"
                    @mouseleave="handleMouseLeave"
                  >
                    <span 
                      v-for="(letter, index) in currentLetters" 
                      :key="index" 
                      class="letter"
                    >
                      {{ letter }}
                    </span>
                  </span>&nbsp;
                  <span class="text-gray-400">Vos&nbsp;Idées</span>
                </h2>
              <p class="text-lg text-gray-600 max-w-2xl">
                Développement, intelligence artificielle et automatisation—conçus pour donner vie à vos idées et rendre chaque interaction significative.
              </p>
              <div class="w-3 h-3 bg-gray-900 rounded-full mt-8"></div>
            </div>

            <!-- Section Expertise -->
            <div class="mt-12">
              <h3 class="text-2xl font-grayfel font-bold text-gray-900 mb-8">Expertise</h3>
              
              <div class="space-y-0">
                <!-- Développement Web -->
                <div class="py-6 border-b border-blue-900">
                  <div class="flex items-center gap-4 mb-3">
                    <span class="text-gray-900 font-medium">[1]</span>
                    <span class="text-gray-900 font-medium">Développement Web</span>
                  </div>
                  <p class="text-gray-500 italic text-sm ml-12">
                    Je crée des expériences web modernes et performantes qui transforment vos idées en solutions digitales exceptionnelles.
                  </p>
                </div>

                <!-- Développement Mobile -->
                <div class="py-6 border-b border-blue-900">
                  <div class="flex items-center gap-4 mb-3">
                    <span class="text-gray-900 font-medium">[2]</span>
                    <span class="text-gray-900 font-medium">Développement Mobile</span>
                  </div>
                  <p class="text-gray-500 italic text-sm ml-12">
                    Je développe des applications mobiles cross-platform qui offrent une expérience utilisateur fluide et intuitive sur tous les appareils.
                  </p>
                </div>

                <!-- Intégration IA -->
                <div class="py-6 border-b border-blue-900">
                  <div class="flex items-center gap-4 mb-3">
                    <span class="text-gray-900 font-medium">[3]</span>
                    <span class="text-gray-900 font-medium">Intégration IA</span>
                  </div>
                  <p class="text-gray-500 italic text-sm ml-12">
                    J'intègre l'intelligence artificielle dans vos processus pour automatiser, optimiser et révolutionner votre façon de travailler.
                  </p>
                </div>

                <!-- Automatisation de Process -->
                <div class="py-6 border-b border-blue-900">
                  <div class="flex items-center gap-4 mb-3">
                    <span class="text-gray-900 font-medium">[4]</span>
                    <span class="text-gray-900 font-medium">Automatisation de Process</span>
                  </div>
                  <p class="text-gray-500 italic text-sm ml-12">
                    Je conçois des solutions d'automatisation qui simplifient vos tâches répétitives et libèrent votre temps pour l'essentiel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    
    <!-- Projets Section -->
    <section id="projets" class="content-section section-padding bg-white" style="min-height: 120vh;">
        <div class="container-custom">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-20">
              <h2 class="text-4xl md:text-5xl font-serif-display font-bold text-gray-900 mb-8">
                Projets
              </h2>
              <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Découvrez quelques-uns de mes projets récents qui illustrent mon approche technique et créative.
              </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <!-- Projet 1 -->
              <div class="group">
                <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover-card h-full relative">
                  <div class="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center relative overflow-hidden">
                    <div class="text-6xl text-white z-10">🌐</div>
                  </div>
                  <div class="p-6">
                    <h3 class="text-xl font-serif-display font-bold text-gray-900 mb-2">
                      E-commerce Moderne
                    </h3>
                    <p class="text-gray-600 mb-4 text-sm">
                      Plateforme e-commerce complète avec gestion des commandes, paiements sécurisés et interface admin.
                    </p>
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Vue.js</span>
                      <span class="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Node.js</span>
                      <span class="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">MongoDB</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-sm text-gray-500">2024</span>
                      <a href="#" class="text-gray-900 hover:text-blue-600 text-sm font-medium transition-colors">
                        Voir le projet →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Projet 2 -->
              <div class="group">
                <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover-card h-full relative">
                  <div class="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center relative overflow-hidden">
                    <div class="text-6xl text-white z-10">📱</div>
                  </div>
                  <div class="p-6">
                    <h3 class="text-xl font-serif-display font-bold text-gray-900 mb-2">
                      App Mobile Fitness
                    </h3>
                    <p class="text-gray-600 mb-4 text-sm">
                      Application mobile de suivi d'entraînement avec synchronisation cloud et analytics avancés.
                    </p>
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React Native</span>
                      <span class="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Firebase</span>
                      <span class="px-3 py-1 bg-red-100 text-red-800 text-xs rounded-full">Redux</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-sm text-gray-500">2024</span>
                      <a href="#" class="text-gray-900 hover:text-blue-600 text-sm font-medium transition-colors">
                        Voir le projet →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Projet 3 -->
              <div class="group">
                <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover-card h-full relative">
                  <div class="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center relative overflow-hidden">
                    <div class="text-6xl text-white z-10">⚡</div>
                  </div>
                  <div class="p-6">
                    <h3 class="text-xl font-serif-display font-bold text-gray-900 mb-2">
                      Dashboard Analytics
                    </h3>
                    <p class="text-gray-600 mb-4 text-sm">
                      Tableau de bord temps réel pour visualiser et analyser les données métier avec des graphiques interactifs.
                    </p>
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span class="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Nuxt 3</span>
                      <span class="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">TypeScript</span>
                      <span class="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">D3.js</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-sm text-gray-500">2024</span>
                      <a href="#" class="text-gray-900 hover:text-blue-600 text-sm font-medium transition-colors">
                        Voir le projet →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    
    <!-- Contact Section - Design minimaliste inspiré -->
    <section id="contact" class="content-section section-padding bg-white">
        <div class="container-custom">
          <div class="max-w-5xl mx-auto">
            <!-- En-tête de la section -->
            <div class="text-center mb-12">
              <p class="text-sm font-grayfel text-blue-800 uppercase tracking-widest mb-8">
                DÉMARRONS LA CONVERSATION
              </p>
              
                <!-- Titre principal avec typographie audacieuse -->
                <div class="space-y-4 mb-12">
                  <h2 class="text-5xl md:text-7xl font-grayfel font-bold text-gray-900 leading-none">
                    <span class="text-reveal-container">
                      <span 
                        v-for="(letter, index) in title1Letters" 
                        :key="`title1-${index}`"
                        class="text-reveal-letter"
                        :class="{ 'visible': letter.visible }"
                        :style="{ transitionDelay: `${letter.delay}ms` }"
                      >
                        {{ letter.char }}
                      </span>
                    </span>
                  </h2>
                  <p class="text-sm font-grayfel text-gray-500 uppercase tracking-widest">
                    N A I S S E N T &nbsp;&nbsp; D ' U N E &nbsp;&nbsp; V R A I E
                  </p>
                  <h2 class="text-5xl md:text-7xl font-grayfel font-bold text-gray-900 leading-none">
                    <span class="text-reveal-container">
                      <span 
                        v-for="(letter, index) in title2Letters" 
                        :key="`title2-${index}`"
                        class="text-reveal-letter"
                        :class="{ 'visible': letter.visible }"
                        :style="{ transitionDelay: `${letter.delay}ms` }"
                      >
                        {{ letter.char }}
                      </span>
                    </span>
                  </h2>
                </div>
            </div>

            <!-- Formulaire de contact -->
            <div class="max-w-2xl mx-auto">
              <form class="space-y-8">
                <!-- Champ Nom -->
                <div class="contact-field">
                  <label class="contact-label">VOTRE NOM*</label>
                  <div class="contact-input-container">
                    <input 
                      type="text" 
                      class="contact-input"
                      placeholder=""
                    />
                    <div class="contact-line"></div>
                  </div>
                </div>

                <!-- Champ Téléphone -->
                <div class="contact-field">
                  <label class="contact-label">TÉLÉPHONE*</label>
                  <div class="contact-input-container">
                    <input 
                      type="tel" 
                      class="contact-input"
                      placeholder=""
                    />
                    <div class="contact-line"></div>
                  </div>
                </div>

                <!-- Champ Email -->
                <div class="contact-field">
                  <label class="contact-label">VOTRE EMAIL*</label>
                  <div class="contact-input-container">
                    <input 
                      type="email" 
                      class="contact-input"
                      placeholder=""
                    />
                    <div class="contact-line"></div>
                  </div>
                </div>

                <!-- Champ Message -->
                <div class="contact-field">
                  <label class="contact-label">COMMENT PUIS-JE VOUS AIDER</label>
                  <div class="contact-input-container">
                    <textarea 
                      class="contact-input contact-textarea"
                      placeholder=""
                      rows="4"
                    ></textarea>
                    <div class="contact-line"></div>
                  </div>
                </div>

                <!-- Section Budget -->
                <div class="contact-field">
                  <label class="contact-label">BUDGET DU PROJET (EUR)</label>
                  <div class="budget-options">
                    <button type="button" class="budget-option" @click="selectBudget('1k-5k')" :class="{ active: selectedBudget === '1k-5k' }">
                      1K-5K
                    </button>
                    <button type="button" class="budget-option" @click="selectBudget('5k-10k')" :class="{ active: selectedBudget === '5k-10k' }">
                      5K-10K
                    </button>
                    <button type="button" class="budget-option" @click="selectBudget('more')" :class="{ active: selectedBudget === 'more' }">
                      PLUS
                    </button>
                  </div>
                </div>

                <!-- Bouton d'envoi -->
                <div class="text-center pt-8">
                  <button type="submit" class="contact-submit-btn">
                    ENVOYER LE MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, nextTick, ref } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'
import { useGridAnimation } from '~/composables/useGridAnimation'
import { useSmoothScroll } from '~/composables/useSmoothScroll'
import { useTextRevealAnimation } from '~/composables/useTextRevealAnimation'
import { useThemeTransition } from '~/composables/useThemeTransition'

// Meta tags pour le SEO
useHead({
  title: 'Maxime - Développeur Full Stack',
  meta: [
    { name: 'description', content: 'Portfolio de Maxime - Développeur Full Stack spécialisé en développement web moderne, applications mobiles et consulting tech.' },
    { name: 'keywords', content: 'développeur, full stack, web, mobile, vue.js, react, nuxt, typescript' }
  ]
})

// Utilisation des composables
const { initScrollAnimation } = useScrollAnimation()
const { 
  gridCells, 
  mousePosition, 
  isInitialized
} = useGridAnimation()
const { initSmoothScroll, destroySmoothScroll } = useSmoothScroll()
const { 
  splitTextIntoLetters, 
  calculateStaircaseDelays, 
  createScrollReveal 
} = useTextRevealAnimation()
const { 
  isDarkTheme, 
  themeProgress, 
  initThemeTransition,
  destroyThemeTransition
} = useThemeTransition()

// Animation de changement d'alphabet pour Transforment
const isHovering = ref(false)
const currentLetters = ref(['T', 'r', 'a', 'n', 's', 'f', 'o', 'r', 'm', 'e', 'n', 't'])

// Gestion du budget sélectionné
const selectedBudget = ref('')

// Animation des lettres pour les titres de contact
const title1Letters = ref<any[]>([])
const title2Letters = ref<any[]>([])

// Différents alphabets à tester
const georgianLetters = ['თ', 'რ', 'ა', 'ნ', 'ს', 'ფ', 'ო', 'რ', 'მ', 'ე', 'ნ', 'თ']
const burmeseLetters = ['တ', 'ရ', 'အ', 'န', 'စ', 'ဖ', 'အ', 'ရ', 'မ', 'အ', 'န', 'တ']
const tibetanLetters = ['ཏ', 'ར', 'ཨ', 'ན', 'ས', 'ཕ', 'ཨ', 'ར', 'མ', 'ཨ', 'ན', 'ཏ']

// Changer l'alphabet ici pour tester (remplacez georgianLetters par burmeseLetters ou tibetanLetters)
const selectedAlphabet = burmeseLetters

const handleMouseEnter = () => {
  isHovering.value = true
  // Changer vers l'alphabet sélectionné au moment du flou maximum (50% de l'animation)
  setTimeout(() => {
    if (isHovering.value) {
      currentLetters.value = selectedAlphabet
    }
  }, 400)
}

const handleMouseLeave = () => {
  isHovering.value = false
  // Revenir au latin
  currentLetters.value = ['T', 'r', 'a', 'n', 's', 'f', 'o', 'r', 'm', 'e', 'n', 't']
}

// Fonction pour sélectionner le budget
const selectBudget = (budget: string) => {
  selectedBudget.value = budget
}

onMounted(() => {
  nextTick(() => {
    initScrollAnimation()
    initSmoothScroll()
    initThemeTransition()
    
    // Initialiser l'animation des lettres
    initTextAnimation()
  })
})

// Fonction pour initialiser l'animation des lettres
const initTextAnimation = () => {
  // Diviser les textes en lettres
  const text1 = "VOS PROJETS"
  const text2 = "COLLABORATION"
  
  title1Letters.value = calculateStaircaseDelays(splitTextIntoLetters(text1), true)
  title2Letters.value = calculateStaircaseDelays(splitTextIntoLetters(text2), true)
  
  // Attendre que les éléments soient dans le DOM
  nextTick(() => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      // Créer un observer pour chaque titre individuellement
      const title1Element = contactSection.querySelector('.text-reveal-container:first-of-type')
      const title2Element = contactSection.querySelector('.text-reveal-container:last-of-type')
      
      if (title1Element) {
        console.log('Initializing animation for title1:', title1Letters.value)
        createScrollReveal(title1Element as HTMLElement, title1Letters.value)
      }
      if (title2Element) {
        console.log('Initializing animation for title2:', title2Letters.value)
        createScrollReveal(title2Element as HTMLElement, title2Letters.value)
      }
    }
  })
}

onUnmounted(() => {
  destroySmoothScroll()
  destroyThemeTransition()
})
</script>