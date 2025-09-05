# Portfolio Maxime - Développeur Full Stack

Un portfolio moderne et élégant inspiré du design d'[Alexander Klimenko](https://klmnko.de/), développé avec Nuxt 4, Tailwind CSS et TypeScript.

## 🚀 Technologies Utilisées

- **Framework**: [Nuxt 4](https://nuxt.com/) - Framework Vue.js full-stack
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- **Typographie**: [Google Fonts](https://fonts.google.com/) - Libertinus Serif Display & Inter
- **Animations**: CSS Animations personnalisées + Framer Motion
- **Package Manager**: [Bun](https://bun.sh/) - Runtime JavaScript ultra-rapide
- **Language**: TypeScript - Typage statique pour JavaScript

## ✨ Fonctionnalités

- **Design Responsive** - Optimisé pour tous les appareils
- **Animations Fluides** - Transitions et animations CSS personnalisées
- **Navigation Smooth** - Défilement fluide entre les sections
- **SEO Optimisé** - Meta tags et structure sémantique
- **Performance** - Chargement rapide et optimisations
- **Accessibilité** - Navigation au clavier et lecteurs d'écran

## 🎨 Sections du Portfolio

1. **Hero Section** - Présentation principale avec CTA
2. **Services** - Développement web, applications mobile, consulting
3. **Projets** - Galerie de projets avec technologies utilisées
4. **Contact** - Informations de contact et formulaires

## 🛠️ Installation et Développement

### Prérequis

- [Bun](https://bun.sh/) installé sur votre machine
- Node.js 18+ (recommandé)

### Installation

```bash
# Cloner le repository
git clone <votre-repo-url>
cd Portfolio-V2

# Installer les dépendances
bun install
```

### Développement

Démarrer le serveur de développement sur `http://localhost:3000`:

```bash
bun run dev
```

### Build de Production

```bash
# Build pour la production
bun run build

# Prévisualiser le build de production
bun run preview
```

## 📁 Structure du Projet

```
Portfolio-V2/
├── app/
│   └── app.vue              # Point d'entrée principal
├── assets/
│   └── css/
│       └── main.css         # Styles globaux et animations
├── layouts/
│   └── default.vue          # Layout principal avec navigation
├── pages/
│   └── index.vue            # Page d'accueil
├── public/                  # Assets statiques
├── nuxt.config.ts           # Configuration Nuxt
├── tailwind.config.js       # Configuration Tailwind
└── package.json
```

## 🎯 Personnalisation

### Couleurs et Thème

Les couleurs sont définies dans `tailwind.config.js` et peuvent être facilement modifiées :

```javascript
colors: {
  primary: {
    50: '#f9fafb',
    // ... autres nuances
    900: '#111827',
  }
}
```

### Polices

Les polices sont configurées dans `nuxt.config.ts` :

```typescript
googleFonts: {
  families: {
    'Libertinus Serif Display': [400, 500, 600, 700],
    'Inter': [300, 400, 500, 600, 700]
  }
}
```

### Contenu

Modifiez le contenu directement dans `pages/index.vue` pour :
- Informations personnelles
- Projets et réalisations
- Services proposés
- Informations de contact

## 🚀 Déploiement

### Vercel (Recommandé)

1. Connectez votre repository GitHub à Vercel
2. Vercel détectera automatiquement Nuxt
3. Le déploiement se fait automatiquement

### Netlify

1. Build command: `bun run build`
2. Publish directory: `.output/public`
3. Deploy !

### Autres Plateformes

Le projet génère des fichiers statiques dans `.output/public` qui peuvent être déployés sur n'importe quel hébergeur web.

## 📝 Scripts Disponibles

```bash
bun run dev          # Serveur de développement
bun run build        # Build de production
bun run preview      # Prévisualiser le build
bun run postinstall  # Post-installation (génération des types)
```

## 🤝 Contribution

1. Fork le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

Maxime - [maxime@example.com](mailto:maxime@example.com)

---

Inspiré par le design d'[Alexander Klimenko](https://klmnko.de/) - Merci pour l'inspiration ! 🎨
