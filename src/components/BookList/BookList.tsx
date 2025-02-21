import React from 'react';
import Book from '../Book/Book';

const books = [
  {
    "id": "00000000004",
    "title": "Les recettes de Chouchou",
    "language": "fr",
    "slug": "les-recettes-de-chouchou",
    "status": "PUBLISHED",
    "project_status": "SUCCESS",
    "weight": 100,
    "published_at": null,
    "in_stock": true,
    "modality": "STANDARD",
    "cover_url": "https://dashbook-production.s3.eu-west-3.amazonaws.com/uploads/book/les-recettes-de-chouchou/cover/les-recettes-de-chouchou_20230112002059.jpg",
    "small_summary": "Retrouvez le premier livre d'Elsa, la youtubeuse de la chaîne Elsamakeup. L'auteure vous invite dans sa cuisine afin de partager ses recettes emblématiques, reprises de ses vidéos les plus appréciées !",
    "author": {
      "name": "Elsa",
      "slug": "elsa",
      "avatar": "https://dashbook-production.s3.eu-west-3.amazonaws.com/uploads/book/les-recettes-de-chouchou/cover/les-recettes-de-chouchou_20230112002059.jpg"
    },
    "project": {
      "goal": 100,
      "start_at": null,
      "end_at": null
    },
    "sales": 447
  },
  {
    "id": "00000000003",
    "title": "Sweet Purple",
    "language": "fr",
    "slug": "sweet-purple",
    "status": "PUBLISHED",
    "project_status": "RUNNING",
    "weight": 100,
    "published_at": null,
    "in_stock": true,
    "modality": "STANDARD",
    "cover_url": "https://dashbook-production.s3.eu-west-3.amazonaws.com/uploads/book/sweet-purple/cover/sweet-purple_20230112002050.jpg",
    "small_summary": "52 recettes gourmandes illustrées autour de l'univers de Prince. A consommer sans modération, si vous aussi vous souhaitez chanter \"I Wanna be Your Cooker\" ! Ce livre, hommage au chanteur de Minneapolis sera le parfait compagnon de vos dimanches",
    "author": {
      "name": "Sarah Benlolo",
      "slug": "sarah-benlolo",
      "avatar": "https://dashbook-production.s3.eu-west-3.amazonaws.com/uploads/author/sarah-benlolo/01fg4abawbpr2ce77kk7mkwft9-63bf4027f0a45035682150.jpg"
    },
    "project": {
      "goal": 100,
      "start_at": {
        "date": "2024-01-01 00:00:00.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      },
      "end_at": {
        "date": "2025-03-26 00:00:00.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      }
    },
    "sales": 30
  },
  {
    "id": "00000000002",
    "title": "La meilleure soirée",
    "language": "fr",
    "slug": "la-meilleure-soiree",
    "status": "PUBLISHED",
    "project_status": "SUCCESS",
    "weight": 20,
    "published_at": null,
    "in_stock": true,
    "modality": "STANDARD",
    "cover_url": "https://dashbook-production.s3.eu-west-3.amazonaws.com/uploads/book/la-meilleure-soiree/cover/la-meilleure-soiree_20230112002100.jpg",
    "small_summary": "Le soir du nouvel an, Clément fait la rencontre de Romane.Une jeune femme à la chevelure rousse sauvage. Seulement personne à part lui ne semble se souvenir d’elle.",
    "author": {
      "name": "Clément Leblanc & Simon Verdier ",
      "slug": "clement-leblanc-simon-verdier",
      "avatar": "https://dashbook-production.s3.eu-west-3.amazonaws.com/uploads/author/clement-leblanc-simon-verdier/01gfjjmj5fzpd9m16j0vmmp65c-63bf492a763cb626420541.jpg"
    },
    "project": {
      "goal": 100,
      "start_at": null,
      "end_at": null
    },
    "sales": 105
  },
  {
    "id": "00000000001",
    "title": "On mange où ? À Lyon",
    "language": "fr",
    "slug": "on-mange-ou-a-lyon",
    "status": "PUBLISHED",
    "project_status": "RUNNING",
    "weight": 3,
    "published_at": null,
    "in_stock": true,
    "modality": "STANDARD",
    "cover_url": "https://dashbook-production.s3.eu-west-3.amazonaws.com/uploads/book/on-mange-ou-a-lyon/cover/on-mange-ou-a-lyon_20230112002057.jpg",
    "small_summary": "<b>Fin de journée, l’estomac commence à se creuser</b>. On pense alors au repas qui approche, et on sort son téléphone pour écrire à son meilleur ami : « On mange où ce soir ? »",
    "author": {
      "name": "Lauriane Fargeas",
      "slug": "lauriane-fargeas",
      "avatar": "https://dashbook-production.s3.eu-west-3.amazonaws.com/uploads/author/lauriane-fargeas/01geh0a9wa7t8cape48sgymp5g-63bf4c3f33383855897241.jpg"
    },
    "project": {
      "goal": 100,
      "start_at": {
        "date": "2024-02-01 00:00:00.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      },
      "end_at": {
        "date": "2025-02-24 00:00:00.000000",
        "timezone_type": 3,
        "timezone": "UTC"
      }
    },
    "sales": 98
  }
]

const BookList: React.FC = () => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author.name}
          description={book.small_summary}
          image={book.cover_url}
          avatar={book.author.avatar}
          target={book.project.goal}
          sales={book.sales}
        />
      ))}
    </div>
  );
}

export default BookList;
