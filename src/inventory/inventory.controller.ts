import { InventoryService } from './inventory.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Book } from './interfaces/inventory.model';

@Controller('inventory')
export class InventoryController {
  constructor(private inventoryService: InventoryService) {}
  @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.inventoryService.getBooks();
  }

  @Get(':id')
  async getBookById(@Param('id', ParseIntPipe) id: number): Promise<Book> {
    return this.inventoryService.getBookById(id);
  }

  @Post()
  async postBook(@Body() book: Book) {
    return this.inventoryService.createBook(book);
  }

  @Put(':id')
  async updateBook(
    @Param('id', ParseIntPipe) id: number,
    @Body() book: Book,
  ): Promise<Book> {
    return this.inventoryService.updateBook(id, book);
  }

  @Delete(':id')
  async deleteBook(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.inventoryService.deleteBook(id);
  }
}
