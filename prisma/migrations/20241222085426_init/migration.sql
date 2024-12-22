-- CreateTable
CREATE TABLE "Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "publishedYear" DATETIME NOT NULL,
    "genre" TEXT NOT NULL,
    "availableCopies" INTEGER NOT NULL
);
