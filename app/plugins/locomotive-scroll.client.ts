export default defineNuxtPlugin(() => {
  // Charger les styles CSS de Locomotive Scroll côté client uniquement
  if (process.client) {
    import('locomotive-scroll/dist/locomotive-scroll.css')
  }
})
