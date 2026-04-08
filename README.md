# Lead Frontend Engineer, AI-Augmented - Technical interview

## Contexte

Snowball développe un **copilote financier tout-en-un** pour aider ses
utilisateurs à prendre en main leur santé financière. Après le lancement de
[Money Buddy](https://buddy.snowball.xyz/demo) (coaching financier), Snowball
prépare le lancement d'un **produit d'investissement** permettant d'investir
directement depuis l'application.

Tu es chargé(e) de construire le **dashboard d'investissement** de cette future
application.

## Ce qu'on te demande

Construire une page "/dashboard" qui affiche :

- Un **résumé du portefeuille** de l'utilisateur : valeur totale, montant
  investi, performance
- La **répartition des allocations** par classe d'actifs (actions, obligations,
  crypto, immobilier, liquidités) avec comparaison entre l'allocation actuelle
  et l'allocation cible recommandée

Le dashboard doit gérer **deux états** :

- **Non connecté** : l'utilisateur n'est pas authentifié, certaines données ne
  sont pas accessibles. Il doit pouvoir se "connecter".
- **Connecté** : l'utilisateur voit ses données de portefeuille complètes.

![Exemple du dashboard d'investissement](/docs/dashboard.png)

> **Tu devras construire l'état non connecté manuellement sans utilisé d'IA.**  
> Cependant rien ne t'empêche d'utiliser tous les outils (IA notamment) que tu
> utilises en temps normal dès le début (planification, génération de types, ...)
> du moment que tu lui précise bien que c'est toi qui implémentera manuellement
> l'état non connecté. Et par la suite, tout le reste des implémentations peut
> être faites en utilisant ces outils.

En fonction du temps restant :

- Nous te demanderons de construire une page permettant de parcourir une liste
  d'ETFs disponible à l'achat.
- Et enfin, d'offrir la possibilité aux utilisateurs d'acheter des ETFs et de
  les ajouter à leur portefeuille.

### API Backend

L'API backend est développée et maintenue par
**[Émeline](https://github.com/LilliJane)** (Lead Backend). Elle est disponible
pendant l'entretien pour répondre à tes questions sur les endpoints, les
contrats, les comportements attendus, etc.

L'URL de l'API et le token utilisateur te seront communiqués au début de
l'entretien.

## Stack technique

Ce repo est déjà configuré avec la stack Snowball :

- **[Next.js 16](https://nextjs.org/docs)** (App Router) + **React 19**
- **TypeScript** (strict)
- **[Tailwind CSS v3](https://v3.tailwindcss.com/docs)**
- **[Fractal](https://fractal.snowball.xyz)**: notre Design System open-source
  (basé sur Radix UI + Tailwind)
- **ESLint** + **Prettier** avec
  [nos configurations Snowball](https://github.com/snowball-tech/glacier)

## Setup

Avant toute chose, commence par cloner ce repo :

```bash
git clone git@github.com:snowball-tech/technical-interview.git
```

> Si tu n'as pas encore de clé SSH pour te connecter à Github, nous te
> conseillons d'en créer une. Tu peux suivre la documentation
> "[how to connect with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)".
> Sinon, tu peux aussi cloner le repo en HTTPS _(mais c'est mieux en SSH)_ :
>
> ```bash
> git clone https://github.com/snowball-tech/technical-interview.git
> ```

> Tu peux également utiliser la [GitHub CLI](https://cli.github.com/) pour
> cloner le repo :
>
> ```bash
> gh repo clone snowball-tech/technical-interview
> ```

Une fois cloné, rends-toi dans le dossier du repo :

```bash
cd technical-interview
```

### Prérequis

Avant de setup ce repo et de te lancer dans l'entretien technique, tu dois
t'assurer d'avoir tous les prérequis nécessaires.

<details>
  <summary>Clique ici pour plus d'infos</summary>

#### **NodeJS**

Pour réaliser ce test technique, il te faut une version fonctionnelle de NodeJS.

Tu peux installer la dernière version de la LTS 24.x.x.

### **Yarn**

Ce repo (et les repos Snowball de manière générale) utilise
[Yarn](https://yarnpkg.com/) dans sa version 4.x.x.

Après avoir installé NodeJS, exécute la commande suivante :

```bash
corepack enable
corepack prepare yarn@stable --activate
```

> N'hésite pas à consulter la [doc officielle de Yarn](https://yarnpkg.com/getting-started/install)
> si tu as des questions ou des soucis.

Assure-toi d'avoir bien la version 4.x.x d'installée :

```bash
yarn --version
```

Cela devrait t'afficher quelque chose comme "4.13.0".

</details>

### Installation

Il y a un script rapide d'installation :

```bash
yarn && yarn setup
```

> **À noter**  
> Pour des raisons de sécurité, tous les scripts de `preinstall` et de
> `postinstall` sont désactivés (pour comprendre pourquoi
> [nous t'invitons à lire ceci](https://snyk.io/fr/articles/npm-security-best-practices-shai-hulud-attack/)).

### Environnement local

Duplique le fichier `.env.example` en `.env.local` :

```bash
cp .env.example .env.local
```

Et ajoutes-y les valeurs qui te seront fournies par ton/tes interviewers.

### Lancement

Exécute simplement la commande suivante pour démarrer le serveur de
développement :

```bash
yarn dev
```

L'application est disponible sur [http://localhost:3000](http://localhost:3000).

### Commandes utiles

```bash
yarn lint          # Linter (ESLint)
yarn format        # Formatter (Prettier)
yarn types-check   # Vérification des types TypeScript
yarn quality       # Les trois d'un coup
```

## Ressources

- [Documentation Fractal](https://fractal.snowball.xyz)
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS v3](https://v3.tailwindcss.com/docs)
- [Guide de contributions](./CONTRIBUTING.md)
- [Conventions](./docs/CONVENTIONS.md)
- [Dépendances, variables d'environnement et outils](./docs/TOOLING.md)
