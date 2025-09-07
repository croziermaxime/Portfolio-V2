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
                <h1 class="text-4xl md:text-6xl font-serif-display font-bold text-white mb-4">
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

    <!-- Container de scroll pour permettre le scroll naturel -->
    <div class="scroll-container">
      <!-- Espace pour permettre le scroll -->
    </div>

    <!-- Services Section - Thème clair -->
    <section id="services" class="services-section section-padding bg-white">
        <div class="container-custom">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
              <h2 class="text-4xl md:text-5xl font-serif-display font-bold text-gray-900 mb-6">
                Ce que je peux faire pour vous
              </h2>
              <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                En tant que développeur full-stack, je combine créativité technique et expertise stratégique pour créer des solutions digitales qui transforment votre vision en réalité.
              </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
              <!-- Service 1 -->
              <div class="group">
                <div class="bg-gray-50 p-8 rounded-2xl hover-card h-full relative overflow-hidden">
                  <div class="text-6xl mb-6 text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                    💻
                  </div>
                  <h3 class="text-2xl font-serif-display font-bold text-gray-900 mb-4">
                    Développement Web
                  </h3>
                  <p class="text-gray-600 mb-6 leading-relaxed">
                    Sites web modernes et performants, applications web complexes, et solutions e-commerce sur mesure avec les dernières technologies.
                  </p>
                  <ul class="space-y-2 text-sm text-gray-500">
                    <li>• Développement frontend (Vue.js, React, Nuxt)</li>
                    <li>• Backend & APIs (Node.js, Python, PHP)</li>
                    <li>• E-commerce & CMS personnalisés</li>
                    <li>• Optimisation performance & SEO</li>
                  </ul>
                </div>
              </div>

              <!-- Service 2 -->
              <div class="group">
                <div class="bg-gray-50 p-8 rounded-2xl hover-card h-full relative overflow-hidden">
                  <div class="text-6xl mb-6 text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                    📱
                  </div>
                  <h3 class="text-2xl font-serif-display font-bold text-gray-900 mb-4">
                    Applications Mobile
                  </h3>
                  <p class="text-gray-600 mb-6 leading-relaxed">
                    Applications mobiles cross-platform performantes qui offrent une expérience utilisateur exceptionnelle sur tous les appareils.
                  </p>
                  <ul class="space-y-2 text-sm text-gray-500">
                    <li>• Applications React Native</li>
                    <li>• Progressive Web Apps (PWA)</li>
                    <li>• Intégration APIs & services</li>
                    <li>• Tests & déploiement</li>
                  </ul>
                </div>
              </div>

              <!-- Service 3 -->
              <div class="group">
                <div class="bg-gray-50 p-8 rounded-2xl hover-card h-full relative overflow-hidden">
                  <div class="text-6xl mb-6 text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                    🚀
                  </div>
                  <h3 class="text-2xl font-serif-display font-bold text-gray-900 mb-4">
                    Consulting Tech
                  </h3>
                  <p class="text-gray-600 mb-6 leading-relaxed">
                    Accompagnement stratégique pour optimiser votre infrastructure technique et adopter les meilleures pratiques de développement.
                  </p>
                  <ul class="space-y-2 text-sm text-gray-500">
                    <li>• Architecture & refactoring</li>
                    <li>• Migration & modernisation</li>
                    <li>• Formation équipes techniques</li>
                    <li>• Audit de code & sécurité</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    
    <!-- Projets Section -->
    <section id="projets" class="content-section section-padding bg-gray-50">
        <div class="container-custom">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
              <h2 class="text-4xl md:text-5xl font-serif-display font-bold text-gray-900 mb-6">
                Projets
              </h2>
              <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez quelques-uns de mes projets récents qui illustrent mon approche technique et créative.
              </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    
    <!-- Contact Section -->
    <section id="contact" class="content-section section-padding bg-white">
        <div class="container-custom">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-4xl md:text-5xl font-serif-display font-bold text-gray-900 mb-6">
              Parlons de votre projet
            </h2>
            <p class="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Prêt à donner vie à votre idée ? Contactez-moi pour discuter de votre projet et découvrir comment nous pouvons travailler ensemble.
            </p>
            
            <div class="grid md:grid-cols-2 gap-8 mb-12">
              <div class="text-center">
                <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-gray-200 transition-colors duration-300">
                  <svg class="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p class="text-gray-600">maxime@example.com</p>
              </div>
              
              <div class="text-center">
                <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-gray-200 transition-colors duration-300">
                  <svg class="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Téléphone</h3>
                <p class="text-gray-600">+33 6 12 34 56 78</p>
              </div>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:maxime@example.com" class="btn-primary text-lg px-8 py-4 hover-button">
                Envoyer un email
              </a>
              <a href="tel:+33612345678" class="btn-secondary text-lg px-8 py-4 hover-button">
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import { useScrollAnimation } from '../../composables/useScrollAnimation'
import { useGridAnimation } from '../../composables/useGridAnimation'

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

onMounted(() => {
  nextTick(() => {
    initScrollAnimation()
  })
})
</script>