import { prisma } from "@/lib/prisma";
import KosListClient from "@/app/kos/KosListClient";
import { Kos } from "@prisma/client";

function getSearchParams(
  searchParams: Record<string, string | string[] | undefined>
) {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : "";
  const type = typeof searchParams.type === "string" ? searchParams.type : "";
  const page =
    typeof searchParams.page === "string"
      ? parseInt(searchParams.page, 10) || 1
      : 1;
  return { search, type, page };
}

const PAGE_SIZE = 9;

export default async function KosListPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const { search, type, page } = getSearchParams(resolvedSearchParams);

  // Build Prisma filter
  const where: Record<string, unknown> = {};
  if (search) {
    where.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { address: { contains: search, mode: "insensitive" } },
    ];
  }
  if (type) {
    where.type = type;
  }

  // Get unique types for filter dropdown
  const types = (await prisma.kos.findMany({
    select: { type: true },
    distinct: ["type"],
  })) as { type: string }[];
  const typeOptions = Array.from(
    new Set(types.map((t: { type: string }) => t.type))
  );

  // Count total kos for pagination
  const totalKos = await prisma.kos.count({ where });
  const totalPages = Math.ceil(totalKos / PAGE_SIZE);
  const currentPage = Math.max(1, Math.min(page, totalPages || 1));

  // Fetch paginated kos list
  const kosList = await prisma.kos.findMany({
    where,
    orderBy: { createdAt: "desc" },
    skip: (currentPage - 1) * PAGE_SIZE,
    take: PAGE_SIZE,
  });

  type KosClient = Omit<Kos, "price" | "originalPrice" | "reviews"> & {
    price: number;
    originalPrice: number | null;
    reviews: number;
  };

  const kosListForClient: KosClient[] = kosList.map((kos) => ({
    ...kos,
    price: typeof kos.price === "bigint" ? Number(kos.price) : kos.price,
    originalPrice:
      typeof kos.originalPrice === "bigint"
        ? Number(kos.originalPrice)
        : kos.originalPrice,
    reviews:
      typeof kos.reviews === "bigint" ? Number(kos.reviews) : kos.reviews,
  }));

  return (
    <KosListClient
      kosList={kosListForClient}
      typeOptions={typeOptions}
      search={search}
      type={type}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
}
