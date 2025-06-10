# Mini Projet Fullstack : Carnet de Contacts

> Application fullstack minimaliste permettant d’ajouter, afficher et supprimer des contacts.  
Elle utilise **NestJS** (backend), **PostgreSQL + TypeORM** (base de données), et **React** (frontend) avec **TypeScript**.

---

## Objectif du projet

Ce projet a pour but de **comprendre le fonctionnement complet d'une application web fullstack** moderne :

- Structurer un backend NestJS (module, controller, service)
- Connecter une base PostgreSQL avec TypeORM
- Créer une interface utilisateur réactive en React
- Gérer les appels API via Axios
- Comprendre les échanges entre front, back et base de données

---

## Technologies utilisées

| Outil              | Rôle                                                                 |
|-------------------|----------------------------------------------------------------------|
| **NestJS**         | Framework Node.js pour structurer le backend avec logique métier     |
| **TypeScript**     | Ajoute le typage statique à JS (front + back)                        |
| **TypeORM**        | ORM qui relie les entités TypeScript aux tables SQL                 |
| **PostgreSQL**     | Base de données relationnelle utilisée pour stocker les contacts     |
| **React**          | Bibliothèque frontend pour construire l’interface utilisateur        |
| **Axios**          | Client HTTP utilisé dans React pour appeler l’API backend            |
| **pgAdmin**        | Interface visuelle pour interagir avec la base PostgreSQL            |


---

## Lancer le projet

### Prérequis

- [Node.js](https://nodejs.org/) installé
- [PostgreSQL](https://www.postgresql.org/) installé et en cours d'exécution
- Une base nommée `contactdb` (créée par exemple avec pgAdmin)
- Variables de connexion configurées dans `app.module.ts`

### Commandes de démarrage

# Étape 1 : lancer le backend NestJS (API)
cd contact-api
npm run start:dev &

# Étape 2 : lancer le frontend React
cd ../contact-frontend
npm start

### Visualisation

Ouvrir le navigateur sur [`http://localhost:3001`](http://localhost:3001)

Pour vérifier ce qui se passe en base, ouvrir **pgAdmin** ou exécuter dans PostgreSQL :

```sql
SELECT * FROM contact;


Développé avec ❤️ par Esma.