import React from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Send,
  Clock,
  Users,
} from "lucide-react";

export default function Kontak() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 pt-16  text-[#4E342E]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 ">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#4E342E] rounded-full mb-6">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#4E342E]">
            Hubungi Kami
          </h1>
          <p className="text-xl text-[#4E342E] opacity-80 max-w-2xl mx-auto leading-relaxed">
            Tim customer service kami siap membantu Anda menemukan kos impian.
            Jangan ragu untuk menghubungi kami kapan saja!
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Phone */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4E342E] mb-2">Telepon</h3>
              <p className="text-[#4E342E] font-medium mb-1">
                +62 812-3456-7890
              </p>
              <p className="text-sm text-[#4E342E] opacity-70">
                Senin - Jumat, 08.00 - 20.00 WIB
              </p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4E342E] mb-2">
                WhatsApp
              </h3>
              <p className="text-[#4E342E] font-medium mb-1">
                +62 812-3456-7890
              </p>
              <p className="text-sm text-[#4E342E] opacity-70">
                Chat 24/7 untuk pertanyaan urgent
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4E342E] mb-2">Email</h3>
              <p className="text-[#4E342E] font-medium mb-1">info@kosku.com</p>
              <p className="text-sm text-[#4E342E] opacity-70">
                Respon dalam 1x24 jam
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4E342E] mb-2">Alamat</h3>
              <p className="text-[#4E342E] font-medium mb-1">
                Jakarta, Indonesia
              </p>
              <p className="text-sm text-[#4E342E] opacity-70">
                Kantor pusat kami
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-3xl blur opacity-10"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-amber-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-xl flex items-center justify-center mr-4">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#4E342E]">
                    Kirim Pesan
                  </h2>
                  <p className="text-[#4E342E] opacity-70">
                    Kami akan merespons secepatnya
                  </p>
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#4E342E]">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-[#4E342E] transition-colors text-[#4E342E] placeholder-[#4E342E] placeholder-opacity-50"
                      placeholder="Masukkan nama lengkap"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#4E342E]">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-[#4E342E] transition-colors text-[#4E342E] placeholder-[#4E342E] placeholder-opacity-50"
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#4E342E]">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-[#4E342E] transition-colors text-[#4E342E] placeholder-[#4E342E] placeholder-opacity-50"
                      placeholder="081234567890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#4E342E]">
                      Subjek
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-[#4E342E] transition-colors text-[#4E342E] placeholder-[#4E342E] placeholder-opacity-50"
                      placeholder="Subjek pesan"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-[#4E342E]">
                    Pesan *
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-xl focus:outline-none focus:border-[#4E342E] transition-colors text-[#4E342E] placeholder-[#4E342E] placeholder-opacity-50 resize-none"
                    rows={5}
                    placeholder="Tulis pesan Anda di sini..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#4E342E] to-[#6D4C41] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>

          {/* FAQ & Info */}
          <div className="space-y-8">
            {/* FAQ */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur opacity-10"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-amber-100">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#4E342E]">FAQ</h2>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-[#4E342E] pl-4 py-3">
                    <h3 className="font-semibold text-[#4E342E] mb-1">
                      Bagaimana cara booking kos?
                    </h3>
                    <p className="text-sm text-[#4E342E] opacity-80">
                      Anda bisa booking langsung melalui website dengan mengisi
                      form booking, atau hubungi kami via WhatsApp untuk
                      bantuan.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#4E342E] pl-4 py-3">
                    <h3 className="font-semibold text-[#4E342E] mb-1">
                      Apakah ada biaya tambahan?
                    </h3>
                    <p className="text-sm text-[#4E342E] opacity-80">
                      Biaya tambahan seperti listrik, air, dan deposit akan
                      dijelaskan detail di halaman kos masing-masing.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#4E342E] pl-4 py-3">
                    <h3 className="font-semibold text-[#4E342E] mb-1">
                      Bisakah lihat kamar terlebih dahulu?
                    </h3>
                    <p className="text-sm text-[#4E342E] opacity-80">
                      Tentu! Kami menyediakan layanan viewing appointment.
                      Hubungi kami untuk mengatur jadwal kunjungan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-3xl blur opacity-10"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-amber-100">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-xl flex items-center justify-center mr-4">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#4E342E]">
                    Jam Operasional
                  </h2>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-amber-100">
                    <span className="text-[#4E342E] font-medium">
                      Senin - Jumat
                    </span>
                    <span className="text-[#4E342E] font-bold">
                      08:00 - 20:00 WIB
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-amber-100">
                    <span className="text-[#4E342E] font-medium">
                      Sabtu - Minggu
                    </span>
                    <span className="text-[#4E342E] font-bold">
                      09:00 - 17:00 WIB
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-[#4E342E] font-medium">WhatsApp</span>
                    <span className="text-[#4E342E] font-bold">24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#4E342E] mb-4">
            Lokasi Kantor Kami
          </h2>
          <p className="text-[#4E342E] opacity-80">
            Kunjungi kantor kami untuk konsultasi langsung
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-3xl blur opacity-10"></div>
          <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-amber-100">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl h-64 flex flex-col items-center justify-center">
              <MapPin className="w-12 h-12 text-[#4E342E] mb-4" />
              <p className="text-[#4E342E] font-medium text-lg">
                Google Maps akan ditampilkan di sini
              </p>
              <p className="text-[#4E342E] opacity-70">Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E] to-[#6D4C41]"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Butuh Bantuan Segera?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Tim customer service kami siap membantu Anda 24/7 melalui WhatsApp
          </p>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            💬 Chat WhatsApp Sekarang
          </a>
        </div>
      </section>
    </div>
  );
}
