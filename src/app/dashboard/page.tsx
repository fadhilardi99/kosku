"use client";
import Image from "next/image";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  HomeModernIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFavoriteKos } from "@/lib/useFavoriteKos";
import FavoriteButton from "@/components/ui/FavoriteButton";
import TestimonialSlider from "@/components/TestimonialSlider";

type Kos = {
  id: string;
  slug: string;
  name: string;
  address: string;
  price: number | string;
  originalPrice?: number | string | null;
  rating: number;
  reviews: number;
  type: string;
  images: string;
};

const features = [
  {
    icon: "🏠",
    title: "Lokasi Strategis",
    description: "Dekat dengan kampus, kantor, dan fasilitas umum",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "⚡",
    title: "Booking Cepat",
    description: "Proses booking online tanpa ribet, konfirmasi instan",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "🔒",
    title: "Aman & Terpercaya",
    description: "Semua kos telah terverifikasi dan aman untuk ditempati",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "💰",
    title: "Harga Terjangkau",
    description: "Pilihan kos dengan berbagai range harga sesuai budget",
    color: "from-orange-500 to-red-500",
  },
];

export default function Dashboard() {
  const [populerKos, setPopulerKos] = useState<Kos[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { addFavorite, removeFavorite, isFavorite } = useFavoriteKos();
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchPopulerKos() {
      try {
        const res = await fetch("/api/kos?sort=rating&limit=3");
        if (!res.ok) {
          const err = await res.json();
          setError(err.error || "Gagal memuat data kos populer.");
          setPopulerKos([]);
          return;
        }
        const data = await res.json();
        setPopulerKos(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message || "Gagal memuat data kos populer.");
        } else {
          setError("Gagal memuat data kos populer.");
        }
        setPopulerKos([]);
      }
    }
    fetchPopulerKos();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-full mb-8">
            <HomeModernIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#4E342E] leading-tight">
            Temukan Kos
            <span className="block bg-gradient-to-r from-[#4E342E] to-[#8D6E63] bg-clip-text text-transparent">
              Impian Anda
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#4E342E] opacity-80 max-w-4xl mx-auto leading-relaxed mb-12">
            Booking online mudah, fasilitas lengkap, lokasi strategis.
            <br />
            <span className="text-[#4E342E] font-bold">
              Mulai dari Rp 800rb/bulan!
            </span>
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchValue.trim()) {
                  router.push(`/kos?search=${encodeURIComponent(searchValue)}`);
                } else {
                  router.push("/kos");
                }
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-2xl blur opacity-20"></div>
              <div className="relative bg-white rounded-2xl p-2 shadow-xl border border-amber-100">
                <div className="flex items-center">
                  <MagnifyingGlassIcon className="w-6 h-6 text-[#4E342E] ml-4" />
                  <input
                    type="text"
                    placeholder="Cari berdasarkan lokasi..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="flex-1 px-4 py-4 text-[#4E342E] placeholder-[#4E342E] placeholder-opacity-50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Cari Kos
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4E342E] mb-6">
            Kenapa Pilih KosKu?
          </h2>
          <p className="text-xl text-[#4E342E] opacity-80 max-w-3xl mx-auto">
            Platform terpercaya dengan ribuan pilihan kos berkualitas
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all`}
              ></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-3xl`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#4E342E] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#4E342E] opacity-80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kos Populer Section */}
      {error ? (
        <div className="text-center text-red-600 font-semibold my-8">
          {error}
        </div>
      ) : (
        <section className="max-w-6xl mx-auto px-4 mb-20 mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4E342E] mb-8 text-center">
            Kos Populer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {populerKos.map((kos) => {
              const images = JSON.parse(kos.images);
              return (
                <Link
                  key={kos.id}
                  href={`/kos/${kos.slug}`}
                  className="block bg-white rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300 group relative"
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
                    <span className="absolute top-3 right-3 bg-amber-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                      ★ {kos.rating.toFixed(1)}
                    </span>
                    {/* Favorite button */}
                    <FavoriteButton
                      isFavorite={isFavorite(kos.id)}
                      onClick={() =>
                        isFavorite(kos.id)
                          ? removeFavorite(kos.id)
                          : addFavorite(kos.id)
                      }
                    />
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
          <div className="flex justify-center mt-8">
            <Link
              href="/kos"
              className="px-8 py-3 bg-[#4E342E] text-white font-bold rounded-xl hover:bg-[#6D4C41] transition-all duration-300 shadow-md"
            >
              Lihat Semua Kos
            </Link>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4E342E] mb-6">
            Kata Mereka
          </h2>
          <p className="text-xl text-[#4E342E] opacity-80 max-w-3xl mx-auto">
            Testimoni dari penghuni yang sudah merasakan kemudahan KosKu
          </p>
        </div>
        <TestimonialSlider />
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#4E342E] mb-4">
            Butuh Bantuan?
          </h2>
          <p className="text-[#4E342E] opacity-80">
            Tim kami siap membantu Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all"></div>
            <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-xl flex items-center justify-center mb-4">
                <PhoneIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#4E342E] mb-2">Telepon</h3>
              <p className="text-[#4E342E] opacity-80">+62 812-3456-7890</p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all"></div>
            <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-xl flex items-center justify-center mb-4">
                <EnvelopeIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#4E342E] mb-2">Email</h3>
              <p className="text-[#4E342E] opacity-80">info@kosku.com</p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all"></div>
            <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-xl flex items-center justify-center mb-4">
                <MapPinIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#4E342E] mb-2">Alamat</h3>
              <p className="text-[#4E342E] opacity-80">Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E] to-[#6D4C41]"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Siap Menemukan Kos Impian?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan penghuni yang sudah merasakan kemudahan
            booking di KosKu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kos"
              className="px-10 py-4 bg-white text-[#4E342E] font-bold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Mulai Cari Kos
              <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
            </Link>
            <Link
              href="/kontak"
              className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#4E342E] transition-all duration-300"
            >
              Hubungi Kami
            </Link>
          </div>
          <div className="flex flex-wrap gap-6 justify-center mt-8 text-white opacity-80 text-base font-medium">
            <span>Gratis Konsultasi</span>
            <span>100% Aman</span>
            <span>Respon Cepat</span>
          </div>
        </div>
      </section>
    </div>
  );
}
