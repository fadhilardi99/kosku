import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET: Ambil daftar kos yang difavoritkan user
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  const favorites = await prisma.favorite.findMany({
    where: { userId: user.id },
    include: { kos: true },
  });
  return NextResponse.json(
    favorites.map((fav) => {
      const kos = fav.kos;
      return {
        ...kos,
        price: typeof kos.price === "bigint" ? Number(kos.price) : kos.price,
        originalPrice:
          typeof kos.originalPrice === "bigint"
            ? Number(kos.originalPrice)
            : kos.originalPrice,
        reviews:
          typeof kos.reviews === "bigint" ? Number(kos.reviews) : kos.reviews,
      };
    })
  );
}

// POST: Tambah favorite (body: { kosId })
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  const { kosId } = await req.json();
  if (!kosId) {
    return NextResponse.json({ error: "kosId required" }, { status: 400 });
  }
  const favorite = await prisma.favorite.create({
    data: { userId: user.id, kosId },
  });
  return NextResponse.json(favorite);
}

// DELETE: Hapus favorite (body: { kosId })
export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  const { kosId } = await req.json();
  if (!kosId) {
    return NextResponse.json({ error: "kosId required" }, { status: 400 });
  }
  await prisma.favorite.deleteMany({ where: { userId: user.id, kosId } });
  return NextResponse.json({ success: true });
}
