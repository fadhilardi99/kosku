import { PrismaClient } from "@prisma/client";
import fs from "fs";

const prisma = new PrismaClient();

const kosData = JSON.parse(fs.readFileSync("kos_data_json.json", "utf-8"));

async function main() {
  await prisma.kos.deleteMany();
  for (const kos of kosData) {
    await prisma.kos.create({
      data: {
        name: kos.name,
        slug: kos.name
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-")
          .replace(/^-+|-+$/g, ""),
        address: kos.address,
        price: BigInt(kos.price),
        originalPrice: kos.originalPrice ? BigInt(kos.originalPrice) : null,
        rating: parseFloat(kos.rating),
        reviews: BigInt(kos.reviews),
        type: kos.type,
        images: JSON.stringify(kos.images), // Store as JSON string
        description: kos.description,
        fasilitas: JSON.stringify(kos.fasilitas), // Store as JSON string
        rules: JSON.stringify(kos.rules), // Store as JSON string
        locationAddress: kos.location.address,
        locationMap: kos.location.map,
        phone: kos.phone,
        whatsapp: kos.whatsapp,
      },
    });
  }
  console.log("Selesai import data kos!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
