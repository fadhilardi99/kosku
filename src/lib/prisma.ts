// PrismaClient singleton pattern for Next.js (Vercel/serverless)
// Prevents exhausting database connections during hot reloads or serverless function calls
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient(); // tanpa opsi log

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
