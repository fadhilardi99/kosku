import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function serializeBigInt(obj: unknown): unknown {
  if (Array.isArray(obj)) {
    return obj.map(serializeBigInt);
  } else if (obj && typeof obj === "object") {
    const newObj: Record<string, unknown> = {};
    for (const key in obj as Record<string, unknown>) {
      const value = (obj as Record<string, unknown>)[key];
      if (typeof value === "bigint") {
        newObj[key] = value.toString();
      } else {
        newObj[key] = serializeBigInt(value);
      }
    }
    return newObj;
  }
  return obj;
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "0", 10);
    const sort = searchParams.get("sort") || "createdAt";

    let orderBy: Record<string, "desc"> = { createdAt: "desc" };
    if (sort === "rating") {
      orderBy = { rating: "desc" };
    }

    const kosList = await prisma.kos.findMany({
      orderBy,
      take: limit > 0 ? limit : undefined,
    });

    return NextResponse.json(serializeBigInt(kosList));
  } catch (e) {
    const message = e instanceof Error ? e.message : "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
