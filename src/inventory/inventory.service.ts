import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Book } from './interfaces/inventory.model';

@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}

  async getBooks() {
    return this.prisma.book.findMany();
  }

  async getBookById(id: number) {
    return this.prisma.book.findUnique({ where: { id } });
  }

  async createBook(book: Book) {
    return this.prisma.book.create({
      data: {
        author: book.author,
        title: book.title,
        publishedYear: book.publishedYear,
        genre: book.genre,
        availableCopies: book.availableCopies,
      },
    });
  }

  async updateBook(id: number, book: Book) {
    return this.prisma.book.update({ where: { id }, data: book });
  }

  async deleteBook(id: number) {
    await this.prisma.book.delete({ where: { id } });
  }
}
