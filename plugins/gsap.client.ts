import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)
    
    // Configuration globale de GSAP
    gsap.config({
      nullTargetWarn: false,
      trialWarn: false
    })
  }
})
