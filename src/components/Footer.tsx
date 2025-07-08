import Link from "next/link";
import {
  Heart,
  MapPin,
  Phone,
  Mail,
  Instagram,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#4E342E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
        {/* Brand & Tagline */}
        <div className="flex-1 flex flex-col items-start gap-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-2xl">🏠</span>
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              KosKu
            </span>
          </div>
          <p className="text-white/90 text-sm max-w-xs">
            Platform terpercaya untuk mencari kos di Jakarta.
          </p>
          <div className="flex space-x-2 mt-2">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white transition-colors"
            >
              <div className="w-4 h-4 bg-yellow-400 rounded-full group-hover:bg-white transition-colors"></div>
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white transition-colors"
            >
              <Instagram className="w-4 h-4 text-white group-hover:text-white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-white group-hover:text-white" />
            </a>
          </div>
        </div>
        {/* Navigation */}
        <div className="flex-1 flex flex-col items-start gap-4">
          <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            Menu
          </h3>
          <nav>
            <ul className="space-y-2">
              {[
                { name: "Beranda", path: "/" },
                { name: "Tentang Kami", path: "/tentang-kami" },
                { name: "Kontak", path: "/kontak" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.path}
                    className="text-white/90 hover:text-white transition-colors border-b-2 border-transparent hover:border-white pb-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* Contact */}
        <div className="flex-1 flex flex-col items-start gap-4">
          <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            Kontak
          </h3>
          <div className="flex flex-col gap-2 text-white/90 text-sm">
            <a
              href="tel:+6281234567890"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-white" /> +62 812-3456-7890
            </a>
            <a
              href="mailto:info@kosku.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-white" /> info@kosku.com
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-white" /> Jakarta, Indonesia
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-8 pt-4 pb-2 text-center text-white/70 text-xs flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4">
        <div className="mb-2 md:mb-0">
          © 2024 KosKu. Semua hak cipta dilindungi. Dibuat dengan{" "}
          <Heart className="inline w-3 h-3 mx-1 fill-current text-[#4E342E]" />{" "}
          di Jakarta
        </div>
        <div className="space-x-2">
          <a href="#" className="hover:text-white transition-colors">
            Syarat
          </a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">
            Privasi
          </a>
          <span>•</span>
          <a href="#" className="hover:text-white transition-colors">
            Bantuan
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
