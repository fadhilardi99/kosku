"use client";
import Link from "next/link";

import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Home,
  Info,
  Phone,
  Heart,
  ChevronDown,
  LogOut,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      if (userDropdownOpen) {
        setUserDropdownOpen(false);
      }
    };

    if (userDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [userDropdownOpen]);

  const navItems = [
    { name: "Beranda", path: "/", icon: Home },
    { name: "Tentang Kami", path: "/tentang-kami", icon: Info },
    { name: "Kontak", path: "/kontak", icon: Phone },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#4E342E] shadow-xl border-b border-[#3E2723]/30 backdrop-blur-lg"
          : "bg-[#4E342E]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300 text-white">
                🏠
              </div>
              <span
                className={`text-2xl font-bold text-white ${
                  !scrolled ? "" : ""
                }`}
              >
                KosKu
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 text-white hover:text-[#4E342E] hover:bg-white"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}

            <div className="ml-4 flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="p-2 rounded-full transition-all duration-300 text-white hover:text-[#4E342E] hover:bg-white"
              >
                <Heart className="h-5 w-5" />
              </Button>

              {session?.user ? (
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 text-white hover:text-[#4E342E] hover:bg-white"
                  >
                    <div className="w-8 h-8 bg-white text-[#4E342E] rounded-full flex items-center justify-center text-sm font-semibold">
                      {session.user.name?.charAt(0).toUpperCase() || "U"}
                    </div>
                    <span className="text-sm font-medium">
                      {session.user.name}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        userDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Button>

                  {/* User Dropdown */}
                  {userDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-[#3E2723]/20 py-2 z-50">
                      <div className="px-4 py-3 border-b border-[#3E2723]/10">
                        <p className="text-sm font-medium text-[#4E342E]">
                          {session.user.name}
                        </p>
                        <p className="text-xs text-[#8D6E63]">
                          {session.user.email}
                        </p>
                      </div>
                      <div className="py-1">
                        <Button
                          variant="ghost"
                          onClick={() => signOut()}
                          className="w-full justify-start px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <LogOut className="h-4 w-4 mr-3" />
                          Keluar
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="px-4 py-2 rounded-full transition-all duration-300 text-white hover:text-[#4E342E] hover:bg-white"
                  >
                    Masuk
                  </Button>
                  <Button className="bg-white text-[#4E342E] font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-[#8D6E63] hover:text-white transform hover:scale-105 transition-all duration-300">
                    Daftar
                  </Button>
                </div>
              )}

              <Button
                className="bg-white text-[#4E342E] font-semibold px-6 py-2 rounded-full shadow-lg hover:bg-[#8D6E63] hover:text-white transform hover:scale-105 transition-all duration-300"
                onClick={() => router.push("/kos")}
              >
                Cari Kos
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg transition-colors text-white hover:text-[#4E342E] hover:bg-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#4E342E] border-b border-[#3E2723]/30 shadow-xl">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 text-white hover:text-[#4E342E] hover:bg-white"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              ))}

              {/* User Section */}
              {session?.user ? (
                <div className="pt-4 border-t border-[#3E2723]/20">
                  <div className="flex items-center space-x-3 px-4 py-3">
                    <div className="w-10 h-10 bg-white text-[#4E342E] rounded-full flex items-center justify-center font-semibold">
                      {session.user.name?.charAt(0).toUpperCase() || "U"}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">
                        {session.user.name}
                      </p>
                      <p className="text-xs text-[#8D6E63]">
                        {session.user.email}
                      </p>
                    </div>
                  </div>
                  <div className="pt-3 space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start text-white border-[#8D6E63] hover:bg-white hover:text-[#4E342E] hover:border-white"
                    >
                      <Heart className="h-4 w-4 mr-2" />
                      Favorit Saya
                    </Button>
                    <Button className="w-full bg-white text-[#4E342E] font-semibold shadow-lg hover:bg-[#8D6E63] hover:text-white">
                      Cari Kos
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      Keluar
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="pt-4 space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start text-white border-[#8D6E63] hover:bg-white hover:text-[#4E342E] hover:border-white"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Favorit Saya
                  </Button>
                  <Button className="w-full bg-white text-[#4E342E] font-semibold shadow-lg hover:bg-[#8D6E63] hover:text-white">
                    Cari Kos
                  </Button>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      className="flex-1 text-white border-[#8D6E63] hover:bg-white hover:text-[#4E342E] hover:border-white"
                    >
                      Masuk
                    </Button>
                    <Button className="flex-1 bg-white text-[#4E342E] font-semibold hover:bg-[#8D6E63] hover:text-white">
                      Daftar
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
