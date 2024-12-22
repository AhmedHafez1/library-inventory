import { Book } from 'src/inventory/interfaces/inventory.model';
export const books: Book[] = [
  {
    id: 1,
    title: 'School',
    author: 'Mariam Ahmed',
    publishedYear: 1925,
    genre: 'Fiction',
    availableCopies: 3,
  },
  {
    id: 2,
    title: '1900',
    author: 'Masjid',
    publishedYear: 1960,
    genre: 'Fiction',
    availableCopies: 5,
  },
  {
    id: 3,
    title: 'Tafseer',
    author: 'Omar Ahmed',
    publishedYear: 1949,
    genre: 'Dystopian',
    availableCopies: 2,
  },
];
