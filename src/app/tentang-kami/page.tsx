import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Users,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Building2,
  Shield,
  Zap,
  Target,
  Rocket,
  Phone,
  Mail,
} from "lucide-react";

const team = [
  {
    name: "Ahmad Rizki",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "Berpengalaman 8+ tahun di industri properti.",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Sari Indah",
    role: "Property Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "Ahli dalam manajemen properti dan customer service.",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Budi Santoso",
    role: "Tech Lead",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    description: "Mengembangkan platform teknologi untuk kemudahan user.",
    social: { linkedin: "#", twitter: "#" },
  },
];

const stats = [
  { number: "500+", label: "Kos Terdaftar", icon: Building2 },
  { number: "2.000+", label: "Penghuni Aktif", icon: Users },
  { number: "15+", label: "Kota", icon: MapPin },
  { number: "4.8/5", label: "Rating", icon: Star },
];

const values = [
  {
    icon: Shield,
    title: "Kepercayaan",
    desc: "Transparansi dan keamanan dalam setiap transaksi.",
  },
  {
    icon: Zap,
    title: "Inovasi",
    desc: "Selalu menghadirkan solusi baru untuk kebutuhan kos.",
  },
  {
    icon: Heart,
    title: "Pelayanan Prima",
    desc: "Mengutamakan kepuasan dan kenyamanan pengguna.",
  },
];

const features = [
  {
    icon: CheckCircle,
    title: "Verifikasi Terpercaya",
    desc: "Setiap kos melalui proses verifikasi ketat untuk memastikan kualitas.",
  },
  {
    icon: CheckCircle,
    title: "Pembayaran Aman",
    desc: "Sistem pembayaran yang aman dan transparan untuk semua transaksi.",
  },
  {
    icon: CheckCircle,
    title: "Customer Service 24/7",
    desc: "Tim support kami siap membantu Anda kapan saja.",
  },
  {
    icon: CheckCircle,
    title: "Review & Rating",
    desc: "Sistem review yang membantu Anda memilih kos terbaik.",
  },
];

export default function TentangKami() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-full mb-8">
            <Building2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#4E342E] leading-tight">
            Platform Kos
            <span className="block bg-gradient-to-r from-[#4E342E] to-[#8D6E63] bg-clip-text text-transparent">
              Modern
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#4E342E] opacity-80 max-w-4xl mx-auto leading-relaxed mb-12">
            KosKu adalah platform terdepan untuk mencari dan menyewakan kos
            dengan teknologi modern, keamanan terjamin, dan pengalaman pengguna
            terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kos"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Cari Kos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="https://wa.me/6281227932813"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-[#4E342E] text-[#4E342E] font-bold rounded-xl hover:bg-[#4E342E] hover:text-white transition-all duration-300"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-xl flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#4E342E] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#4E342E] font-medium opacity-80">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4E342E] mb-6">
            Visi & Misi Kami
          </h2>
          <p className="text-xl text-[#4E342E] opacity-80 max-w-3xl mx-auto">
            Membangun masa depan hunian yang lebih baik untuk semua orang
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-3xl blur opacity-10"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-amber-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#4E342E]">Visi Kami</h3>
              </div>
              <p className="text-[#4E342E] text-lg leading-relaxed opacity-80">
                Menjadi platform kos nomor satu yang menghubungkan pemilik dan
                pencari kos di seluruh Indonesia dengan teknologi modern,
                keamanan terjamin, dan pengalaman pengguna terbaik.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-3xl blur opacity-10"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-amber-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-xl flex items-center justify-center mr-4">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#4E342E]">Misi Kami</h3>
              </div>
              <ul className="text-[#4E342E] text-lg space-y-3 opacity-80">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#4E342E] mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    Memudahkan proses pencarian dan booking kos secara online
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#4E342E] mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    Menyediakan informasi akurat dan terpercaya tentang properti
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#4E342E] mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    Membangun komunitas penghuni kos yang saling mendukung
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#4E342E] mr-3 mt-0.5 flex-shrink-0" />
                  <span>Memberikan layanan customer service terbaik 24/7</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4E342E] mb-6">
            Nilai Inti Kami
          </h2>
          <p className="text-xl text-[#4E342E] opacity-80 max-w-3xl mx-auto">
            Prinsip-prinsip yang membimbing setiap langkah kami
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div key={value.title} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-3xl blur opacity-20 group-hover:opacity-30 transition-all"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#4E342E] mb-4">
                  {value.title}
                </h3>
                <p className="text-[#4E342E] text-lg leading-relaxed opacity-80">
                  {value.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4E342E] mb-6">
            Mengapa Memilih KosKu?
          </h2>
          <p className="text-xl text-[#4E342E] opacity-80 max-w-3xl mx-auto">
            Fitur-fitur unggulan yang membuat KosKu berbeda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-2xl blur opacity-10 group-hover:opacity-20 transition-all"></div>
              <div className="relative flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#4E342E] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#4E342E] leading-relaxed opacity-80">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4E342E] mb-6">
            Tim Kami
          </h2>
          <p className="text-xl text-[#4E342E] opacity-80 max-w-3xl mx-auto">
            Bertemu dengan orang-orang hebat di balik KosKu
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-3xl blur opacity-20 group-hover:opacity-30 transition-all"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="relative mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="w-30 h-30 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#4E342E] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#4E342E] font-semibold mb-4 opacity-80">
                    {member.role}
                  </p>
                  <p className="text-[#4E342E] leading-relaxed opacity-80">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-4xl mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#4E342E] mb-4">
            Hubungi Kami
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
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#4E342E] mb-2">Telepon</h3>
              <p className="text-[#4E342E] opacity-80">+62 812-3456-7890</p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all"></div>
            <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#4E342E] mb-2">Email</h3>
              <p className="text-[#4E342E] opacity-80">info@kosku.com</p>
            </div>
          </div>

          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-all"></div>
            <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-amber-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
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
            Siap Bergabung dengan KosKu?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Temukan kos impian Anda atau daftarkan properti Anda sekarang juga!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cari-kos"
              className="inline-flex items-center px-8 py-4 bg-white text-[#4E342E] font-bold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Cari Kos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/kontak"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#4E342E] transition-all duration-300"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
