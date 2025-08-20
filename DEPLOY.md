# 🚀 Guide de Déploiement - Ohavana Pearl

## 📋 Étapes de Déploiement sur Vercel

### 1. **Connexion à Vercel**
1. Allez sur [vercel.com/new](https://vercel.com/new)
2. Connectez-vous avec votre compte GitHub
3. Cliquez sur "Import Git Repository"
4. Trouvez `Jerome537/ohavana-pearl` dans la liste
5. Cliquez sur "Import"

### 2. **Configuration automatique**
Vercel détectera automatiquement :
- ✅ **Framework**: Next.js 
- ✅ **Build Command**: `npm run build`
- ✅ **Output Directory**: `.next`
- ✅ **Install Command**: `npm install`

### 3. **Variables d'environnement**
⚠️ **Important**: Configurez les variables d'environnement dans le dashboard Vercel :

```env
# App Configuration
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME="Ohavana Pearl"

# Database (optionnel pour démo)
DATABASE_URL=postgresql://username:password@localhost:5432/ohavana_pearl

# PayZen (optionnel pour démo)
PAYZEN_SITE_ID=12345678
PAYZEN_HMAC_SECRET=your_hmac_secret
PAYZEN_MODE=TEST

# Notion (optionnel pour démo)
NOTION_API_KEY=secret_your_notion_key
NOTION_DB_PRODUCTS_ID=your_database_id
```

### 4. **Déploiement**
1. Cliquez sur **"Deploy"** 🚀
2. ⏱️ **Temps d'attente**: ~3 minutes
3. ✅ **Résultat**: Votre site sera accessible

## 🌐 URLs du Projet

- **Repository GitHub**: https://github.com/Jerome537/ohavana-pearl
- **Site Vercel**: `https://ohavana-pearl-xxx.vercel.app` (généré automatiquement)

## 🎯 Fonctionnalités Déployées

### ✅ Prêt immédiatement
- 🏠 **Page d'accueil** avec hero section
- 🎨 **Design system** complet Tailwind CSS
- 📱 **Responsive design** mobile/desktop
- 🧭 **Navigation** header/footer
- 💫 **Animations** et transitions fluides

### 🔧 À configurer (optionnel)
- 💾 **Base de données** PostgreSQL
- 📝 **Notion CMS** pour la gestion de contenu
- 💳 **PayZen** pour les paiements
- 📧 **Email service** pour les notifications
- 📊 **Analytics** Google Analytics

## 🎨 Preview du Site

Le site déployé affichera :
- **Hero section** avec image de lagon de Tahiti
- **3 collections** (Colliers, Boucles d'oreilles, Bracelets)
- **Section authenticité** avec badges
- **Footer complet** avec liens et newsletter

## 🔧 Développement Local

Si vous voulez développer localement :

```bash
# Cloner le repository
git clone https://github.com/Jerome537/ohavana-pearl.git
cd ohavana-pearl

# Installer les dépendances
npm install

# Copier l'exemple d'environnement
cp .env.example .env.local

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur http://localhost:3000

## 📈 Performance

**Objectifs atteints :**
- ⚡ **Build time**: < 2 minutes
- 🚀 **Deploy time**: < 1 minute  
- 📱 **Mobile-first**: Design responsive
- 🎨 **Modern CSS**: Tailwind CSS + design system
- ♿ **Accessibilité**: Semantic HTML

## 🛡️ Sécurité

- ✅ **Headers sécurisés** configurés dans vercel.json
- ✅ **CSP**: Content Security Policy
- ✅ **Environment variables** sécurisées
- ✅ **Git ignore** pour fichiers sensibles

---

**🎉 Votre boutique Ohavana Pearl sera en ligne dans 5 minutes !**

Made with 💎 pour la beauté des perles de Tahiti