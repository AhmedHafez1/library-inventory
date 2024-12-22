import { PrismaClient } from '@prisma/client';
import { books } from '../books';

const prisma = new PrismaClient();

async function main() {
  await prisma.book.createMany({
    data: books,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
