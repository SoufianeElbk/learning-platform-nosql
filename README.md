# Learning Platform NoSQL

## Description
Ce projet est une API backend pour une plateforme d'apprentissage en ligne. Il utilise MongoDB pour la base de données principale et Redis pour la gestion du cache.

## Installation

### Prérequis
- Node.js

### Étapes d'installation
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/SoufianeElbk/learning-platform-nosql.git
   cd learning-platform-nosql
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Démarrez l'application :
   ```bash
   npm start
   ```

## Structure du projet
```
src/
├── config/          # Configuration et variables d'environnement
├── controllers/     # Logique de contrôle des routes
├── routes/          # Définition des routes API
├── services/        # Services pour interagir avec les bases de données
└── app.js           # Point d'entrée de l'application
```

## Choix techniques
- **Variables d'environnement** : Utilisées pour ne pas exposer les informations sensibles dans le code source.
- **Séparation des responsabilités** : Routes, contrôleurs et services sont séparés pour une meilleure organisation et maintenabilité du code.
- **Gestion des connexions** : Connexions aux bases de données MongoDB et Redis centralisées dans des modules séparés.


## Réponses aux Questions

### db.js

- **Pourquoi créer un module séparé pour les connexions aux bases de données ?**
Créer un module séparé pour les connexions aux bases de données permet de centraliser et de réutiliser le code de connexion, de faciliter la gestion des erreurs et des retries, et de maintenir une séparation des préoccupations dans le code. Cela rend le code plus modulaire, maintenable et testable.

- **Comment gérer proprement la fermeture des connexions ?**
Pour gérer proprement la fermeture des connexions, il est important d'écouter les événements de terminaison de l'application (comme 'SIGINT', 'SIGTERM') et d'appeler les méthodes de fermeture appropriées sur les clients de base de données (par exemple, `mongoClient.close()` pour MongoDB et `redisClient.quit()` pour Redis). Cela garantit que toutes les connexions sont correctement fermées et que les ressources sont libérées.

### env.js

- **Pourquoi est-il important de valider les variables d'environnement au démarrage ?**
Pour s'assurer que toutes les configurations nécessaires sont présentes et correctes avant que l'application ne commence à fonctionner. Cela permet d'éviter des erreurs inattendues en cours d'exécution et de garantir que l'application dispose de toutes les informations nécessaires pour se connecter aux services externes, comme les bases de données.

- **Que se passe-t-il si une variable requise est manquante ?**
L'application doit lever une erreur explicative et arrêter son exécution. Cela permet de signaler immédiatement le problème de configuration et d'éviter des comportements imprévisibles ou des échecs plus difficiles à diagnostiquer plus tard.

### .env

- **Quelles sont les informations sensibles à ne jamais commiter ?**
Les informations sensibles comme les URI de base de données, les clés API, les mots de passe, etc.

- **Pourquoi utiliser des variables d'environnement ?**
Pour séparer la configuration du code et pour faciliter le changement de configuration sans modifier le code source.

### courseController.js

- **Quelle est la différence entre un contrôleur et une route ?**
Une route définit les points d'entrée de l'application et associe les requêtes HTTP à des fonctions spécifiques. Un contrôleur, en revanche, contient la logique métier qui est exécutée lorsque ces points d'entrée sont atteints. Les routes dirigent les requêtes vers les contrôleurs appropriés.

- **Pourquoi séparer la logique métier des routes ?**
Séparer la logique métier des routes permet de maintenir un code propre et organisé. Cela facilite la maintenance, les tests et la réutilisation du code. En isolant la logique métier dans des contrôleurs, on peut également mieux structurer l'application et suivre le principe de séparation des préoccupations.

### route.js

- **Pourquoi séparer les routes dans différents fichiers ?**
Séparer les routes dans différents fichiers permet de mieux organiser le code, de le rendre plus lisible et maintenable. Cela facilite également la gestion des routes en les regroupant par fonctionnalité ou module, ce qui permet de mieux structurer l'application.

- **Comment organiser les routes de manière cohérente ?**
Pour organiser les routes de manière cohérente, il est recommandé de les regrouper par fonctionnalité ou module. Par exemple, toutes les routes liées aux cours peuvent être placées dans un fichier `courseRoutes.js`, tandis que les routes liées aux utilisateurs peuvent être placées dans un fichier `userRoutes.js`. Il est également utile de suivre une convention de nommage claire et de documenter les routes pour faciliter la compréhension et la maintenance du code.

### mongoService.js

- **Pourquoi créer des services séparés ?**
Créer des services séparés permet de centraliser la logique métier et les interactions avec les bases de données ou autres services externes. Cela rend le code plus modulaire, réutilisable et maintenable. En séparant les services, on peut également faciliter les tests unitaires et l'évolution du code sans impacter les autres parties de l'application.

### redisService.js

- **Comment gérer efficacement le cache avec Redis ?**
Pour gérer efficacement le cache avec Redis, il est important de définir des stratégies de mise en cache appropriées, telles que l'expiration des clés (TTL), l'invalidation du cache lorsque les données changent, et l'utilisation de structures de données adaptées (comme les listes, ensembles, et hachages) pour optimiser les performances.

- **Quelles sont les bonnes pratiques pour les clés Redis ?**
Les bonnes pratiques pour les clés Redis incluent l'utilisation de noms de clés descriptifs et hiérarchiques (par exemple, `user:123:profile`), l'ajout de préfixes pour éviter les collisions de noms, et la définition d'un TTL pour les clés afin de gérer la mémoire et d'éviter l'accumulation de données obsolètes.

### app.js

- **Comment organiser le point d'entrée de l'application ?**
Organiser le point d'entrée de l'application en modules distincts pour une meilleure lisibilité et maintenabilité.

- **Quelle est la meilleure façon de gérer le démarrage de l'application ?**
La meilleure façon de gérer le démarrage de l'application est de séparer la logique de démarrage dans une fonction dédiée et de gérer les erreurs de manière appropriée.