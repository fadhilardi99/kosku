import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import { Star, Share2, Phone, MessageCircle, MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import FasilitasList from "@/components/FasilitasList";
import KosFavoriteClientButton from "@/app/kos/[slug]/KosFavoriteClientButton";

const prisma = new PrismaClient();

export default async function KosDetail(props: { params: { slug: string } }) {
  const params = await props.params;
  // Fetch kos data by slug
  const kos = await prisma.kos.findUnique({
    where: { slug: params.slug },
  });

  if (!kos) return notFound();

  // Parse JSON fields
  const images = JSON.parse(kos.images);
  const fasilitas = JSON.parse(kos.fasilitas);
  const rules = JSON.parse(kos.rules);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 pt-16">
      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm">
          <Link
            href="/"
            className="text-[#4E342E] hover:opacity-80 font-medium"
          >
            KosKu
          </Link>
          <span className="text-[#4E342E] opacity-50">/</span>
          <Link
            href="/kos"
            className="text-[#4E342E] hover:opacity-80 font-medium"
          >
            Jakarta Selatan
          </Link>
          <span className="text-[#4E342E] opacity-50">/</span>
          <span className="text-[#4E342E] font-semibold">{kos.name}</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pb-20">
        {/* Header Kos */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-3xl blur opacity-10"></div>
          <div className="relative bg-white rounded-3xl shadow-xl border border-amber-100 p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] text-white rounded-full text-sm font-semibold">
                    {kos.type}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-semibold">{kos.rating}</span>
                    <span className="text-[#4E342E] opacity-70 text-sm">
                      ({kos.reviews} ulasan)
                    </span>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#4E342E] mb-3">
                  {kos.name}
                </h1>
                <div className="flex items-center gap-2 text-[#4E342E] opacity-70 mb-4">
                  <MapPin className="w-5 h-5" />
                  <span>{kos.address}</span>
                </div>
                <p className="text-[#4E342E] opacity-80 leading-relaxed">
                  {kos.description}
                </p>
              </div>
              <div className="flex flex-col items-end gap-4 min-w-[280px]">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#4E342E]">
                    Rp {Number(kos.price).toLocaleString("id-ID")}
                  </div>
                  {kos.originalPrice && (
                    <div className="text-[#4E342E] opacity-50 line-through">
                      Rp {Number(kos.originalPrice).toLocaleString("id-ID")}
                    </div>
                  )}
                  <div className="text-sm text-[#4E342E] opacity-70">
                    per bulan
                  </div>
                </div>
                <div className="flex gap-2">
                  <KosFavoriteClientButton kosId={kos.id} />
                  <button className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-[#4E342E] text-[#4E342E] font-medium hover:bg-[#4E342E] hover:text-white transition-all duration-300">
                    <Share2 className="w-4 h-4" /> Bagikan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery & Booking */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Gallery */}
          <div className="lg:col-span-2 group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-3xl blur opacity-10 group-hover:opacity-20 transition-all"></div>
            <div className="relative bg-white rounded-3xl shadow-xl border border-amber-100 p-6">
              <div className="relative w-full h-80 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={images[0]}
                  width={640}
                  height={480}
                  alt="Foto utama"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <span className="absolute top-4 right-4 bg-white/90 text-[#4E342E] text-sm px-3 py-1 rounded-full font-semibold">
                  {images.length} Foto
                </span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {images.map((img: string, i: number) => (
                  <div key={i} className="relative group cursor-pointer">
                    <Image
                      src={img}
                      width={64}
                      height={48}
                      alt={`Foto ${i + 1}`}
                      className="w-full h-20 object-cover rounded-xl border-2 border-amber-100 group-hover:border-[#4E342E] transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-3xl blur opacity-20 group-hover:opacity-30 transition-all"></div>
            <div className="relative bg-white rounded-3xl shadow-xl border-amber-100 p-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-[#4E342E] mb-1">
                  Rp {Number(kos.price).toLocaleString("id-ID")}
                </div>
                {kos.originalPrice && (
                  <div className="text-[#4E342E] opacity-50 line-through text-sm">
                    Rp {Number(kos.originalPrice).toLocaleString("id-ID")}
                  </div>
                )}
                <div className="text-sm text-[#4E342E] opacity-70">
                  per bulan
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 mb-6">
                <Star className="w-5 h-5 text-amber-500 fill-current" />
                <span className="font-semibold text-[#4E342E]">
                  {kos.rating}
                </span>
                <span className="text-[#4E342E] opacity-70 text-sm">
                  ({kos.reviews} ulasan)
                </span>
              </div>

              <a
                href={`tel:${kos.phone}`}
                className="block w-full mb-2 px-4 py-2 rounded-xl bg-[#4E342E] text-white font-semibold text-center hover:opacity-90 transition-all duration-300"
              >
                <Phone className="inline w-5 h-5 mr-2" /> Hubungi
              </a>
              <a
                href={`https://wa.me/${kos.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-2 rounded-xl bg-green-500 text-white font-semibold text-center hover:opacity-90 transition-all duration-300"
              >
                <MessageCircle className="inline w-5 h-5 mr-2" /> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Fasilitas & Rules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-3xl shadow-xl border border-amber-100 p-6">
            <h2 className="text-xl font-bold text-[#4E342E] mb-4">Fasilitas</h2>
            <FasilitasList fasilitas={fasilitas} />
          </div>
          <div className="bg-white rounded-3xl shadow-xl border border-amber-100 p-6">
            <h2 className="text-xl font-bold text-[#4E342E] mb-4">Peraturan</h2>
            <ul className="list-disc pl-5 text-[#4E342E] space-y-2">
              {rules.map((rule: string, i: number) => (
                <li key={i}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Location */}
        <div className="bg-white rounded-3xl shadow-xl border border-amber-100 p-6">
          <h2 className="text-xl font-bold text-[#4E342E] mb-4">Lokasi</h2>
          <div className="flex items-center gap-2 text-[#4E342E] mb-2">
            <MapPin className="w-5 h-5" />
            <span>{kos.locationAddress}</span>
          </div>
          <div className="text-[#4E342E] opacity-80">{kos.locationMap}</div>
        </div>
      </main>
    </div>
  );
}
