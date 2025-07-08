-- CreateTable
CREATE TABLE "kos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "price" BIGINT NOT NULL,
    "originalPrice" BIGINT,
    "rating" DOUBLE PRECISION NOT NULL,
    "reviews" BIGINT NOT NULL DEFAULT 0,
    "type" TEXT NOT NULL,
    "images" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "fasilitas" TEXT NOT NULL,
    "rules" TEXT NOT NULL,
    "location.address" TEXT NOT NULL,
    "location.map" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "kos_pkey" PRIMARY KEY ("id")
);
