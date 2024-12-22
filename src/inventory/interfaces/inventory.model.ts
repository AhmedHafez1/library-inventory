// Add a new book (fields: title, author, publishedYear, genre, availableCopies).
export interface Book {
  id: number;
  title: string;
  author: string;
  publishedYear: number;
  genre: string;
  availableCopies: number;
}
