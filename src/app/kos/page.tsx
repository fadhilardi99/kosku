import { PrismaClient, Prisma } from "@prisma/client";
import KosListClient from "@/app/kos/KosListClient";

const prisma = new PrismaClient();

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

export default async function KosListPage(props: {
  searchParams: { [key: string]: string };
}) {
  const searchParams = props.searchParams;
  const { search, type, page } = getSearchParams(searchParams);

  // Build Prisma filter
  const where: Prisma.KosWhereInput = {};
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
  const types = await prisma.kos.findMany({
    select: { type: true },
    distinct: ["type"],
  });
  const typeOptions = Array.from(new Set(types.map((t) => t.type)));

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

  const kosListForClient = kosList.map((kos) => ({
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
