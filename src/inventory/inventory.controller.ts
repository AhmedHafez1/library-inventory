import { Controller, Get } from '@nestjs/common';
import { Book } from './interfaces/inventory.model';
import { books } from 'books';

@Controller('inventory')
export class InventoryController {
  @Get()
  /**
   * Get all books from the inventory
   * @returns {Book[]} an array of all books in the inventory
   */
  getAllBooks(): Book[] {
    return books;
  }
}
