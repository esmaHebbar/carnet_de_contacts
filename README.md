# Mini projet fullstack : un carnet de contacts

> Mini application fullstack permettant d’ajouter, afficher et supprimer des contacts.  
Utilisation de **NestJS** (backend), **PostgreSQL + TypeORM** (base de données), et **React** (frontend) avec **TypeScript**.

---

## Objectif du projet

Ce mini projet a pour but de comprendre le fonctionnement complet d'une application web fullstack moderne, et surtout des **échanges entre front, back et base de données** :

- Structuration d'un backend NestJS (module, controller, service)
- Connection à une base de données PostgreSQL avec TypeORM
- Création d'une interface utilisateur en React
- Mise en place d'appels API via Axios

---

## Technologies utilisées

| Outil              | Rôle                                                                 |
|-------------------|----------------------------------------------------------------------|
| **NestJS**         | Framework Node.js pour structurer le backend avec logique métier     |
| **TypeScript**     | Ajout d'un typage pour front et back                        |
| **TypeORM**        | ORM permettant de relier les entités TypeScript aux tables SQL                 |
| **PostgreSQL**     | Base de données relationnelle utilisée pour stocker les contacts     |
| **pgAdmin**        | Interface visuelle pour interagir avec la base PostgreSQL            |
| **React**          | Pour construire l’interface utilisateur frontend       |
| **Axios**          | Client HTTP utilisé dans React pour appeler l’API backend            |


---

## Lancer le projet

### Prérequis

- [Node.js](https://nodejs.org/) installé
- [PostgreSQL](https://www.postgresql.org/) installé et en cours d'exécution
- Une base nommée `contactdb` (créée par exemple avec pgAdmin)
- Variables de connexion configurées dans `app.module.ts`

### Commandes de démarrage

#### Étape 1 : lancer l'API
cd contact-api
```sql
npm run start:dev
```

#### Étape 2 : lancer React
cd ../contact-frontend
```sql
npm start
```

### Visualisation

Ouvrir le navigateur sur [`http://localhost:3001`](http://localhost:3001)

Pour vérifier ce qui se passe en base, ouvrir **pgAdmin** dans la table `contactdb` ou exécuter dans PostgreSQL :

```sql
SELECT * FROM contact;
```

Développé avec ❤️ par Esma.