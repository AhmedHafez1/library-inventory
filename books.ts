import { Book } from 'src/inventory/interfaces/inventory.model';
export const books: Book[] = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    genre: 'Fiction',
    availableCopies: 3,
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publishedYear: 1960,
    genre: 'Fiction',
    availableCopies: 5,
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    publishedYear: 1949,
    genre: 'Dystopian',
    availableCopies: 2,
  },
];
