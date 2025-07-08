import { PrismaClient, Prisma } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";

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
  const searchParams = await props.searchParams;
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

  // Helper to build query string for pagination links
  function buildQuery(pageNum: number) {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (type) params.set("type", type);
    if (pageNum > 1) params.set("page", String(pageNum));
    return params.toString() ? `?${params.toString()}` : "";
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 pt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#4E342E] mb-8">
          Daftar Kos
        </h1>
        {/* Search & Filter */}
        <form className="flex flex-col md:flex-row gap-4 mb-8" method="GET">
          <input
            type="text"
            name="search"
            placeholder="Cari nama atau alamat kos..."
            defaultValue={search}
            className="flex-1 px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-[#4E342E] text-[#4E342E] bg-white"
          />
          <select
            name="type"
            defaultValue={type}
            className="px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-[#4E342E] text-[#4E342E] bg-white"
          >
            <option value="">Semua Tipe</option>
            {typeOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-[#4E342E] text-white font-semibold hover:opacity-90 transition-all"
          >
            Cari
          </button>
        </form>
        {/* Kos List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {kosList.map((kos) => {
            const images = JSON.parse(kos.images);
            return (
              <Link
                key={kos.id}
                href={`/kos/${kos.slug}`}
                className="block bg-white rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative w-full h-48 rounded-t-2xl overflow-hidden">
                  <Image
                    src={images[0]}
                    alt={kos.name}
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-all duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-[#4E342E] text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {kos.type}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-bold text-[#4E342E] mb-1 truncate">
                    {kos.name}
                  </h2>
                  <div className="text-[#4E342E] opacity-70 text-sm mb-2 truncate">
                    {kos.address}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-amber-600 font-semibold">
                      {kos.rating.toFixed(1)}
                    </span>
                    <span className="text-[#4E342E] opacity-60 text-xs">
                      ({kos.reviews} ulasan)
                    </span>
                  </div>
                  <div className="text-lg font-bold text-[#4E342E]">
                    Rp {Number(kos.price).toLocaleString("id-ID")}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        {kosList.length === 0 && (
          <div className="text-center text-[#4E342E] opacity-70 mt-12 text-lg">
            Tidak ada kos ditemukan.
          </div>
        )}
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <Link
              href={buildQuery(currentPage - 1)}
              className={`px-4 py-2 rounded-lg font-semibold border-2 ${
                currentPage === 1
                  ? "border-amber-100 text-amber-300 cursor-not-allowed"
                  : "border-[#4E342E] text-[#4E342E] hover:bg-[#4E342E] hover:text-white"
              }`}
              aria-disabled={currentPage === 1}
              tabIndex={currentPage === 1 ? -1 : 0}
            >
              Sebelumnya
            </Link>
            <span className="text-[#4E342E] font-semibold">
              Halaman {currentPage} dari {totalPages}
            </span>
            <Link
              href={buildQuery(currentPage + 1)}
              className={`px-4 py-2 rounded-lg font-semibold border-2 ${
                currentPage === totalPages
                  ? "border-amber-100 text-amber-300 cursor-not-allowed"
                  : "border-[#4E342E] text-[#4E342E] hover:bg-[#4E342E] hover:text-white"
              }`}
              aria-disabled={currentPage === totalPages}
              tabIndex={currentPage === totalPages ? -1 : 0}
            >
              Berikutnya
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
