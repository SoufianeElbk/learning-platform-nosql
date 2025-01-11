// Question : Comment gérer efficacement le cache avec Redis ?
// Réponse : Pour gérer efficacement le cache avec Redis, il est important de définir des stratégies de mise en cache appropriées, telles que l'expiration des clés (TTL), l'invalidation du cache lorsque les données changent, et l'utilisation de structures de données adaptées (comme les listes, ensembles, et hachages) pour optimiser les performances.
// Question: Quelles sont les bonnes pratiques pour les clés Redis ?
// Réponse : Les bonnes pratiques pour les clés Redis incluent l'utilisation de noms de clés descriptifs et hiérarchiques (par exemple, `user:123:profile`), l'ajout de préfixes pour éviter les collisions de noms, et la définition d'un TTL pour les clés afin de gérer la mémoire et d'éviter l'accumulation de données obsolètes.

// Fonctions utilitaires pour Redis
async function cacheData(key, data, ttl) {
    // TODO: Implémenter une fonction générique de cache
  }
  
  module.exports = {
    // TODO: Exporter les fonctions utilitaires
  };