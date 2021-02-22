/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[companyId]` on the table `Employee`. If there are existing duplicate values, the migration will fail.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Company" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "symbol" TEXT,
    "name" TEXT,
    "description" TEXT
);
INSERT INTO "new_Company" ("id", "symbol", "name", "description") SELECT "id", "symbol", "name", "description" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Employee_companyId_unique" ON "Employee"("companyId");
