"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Putri",
    role: "Mahasiswa UI",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment:
      "Kos yang sangat nyaman dan bersih! Lokasi strategis dekat kampus. Highly recommended!",
  },
  {
    name: "Ahmad Rizki",
    role: "Karyawan Swasta",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment:
      "Fasilitas lengkap dan pelayanan ramah. Proses booking mudah banget!",
  },
  {
    name: "Dina Maharani",
    role: "Fresh Graduate",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment:
      "Harga terjangkau dengan kualitas terbaik. Gak nyesel pilih KosKu!",
  },
  {
    name: "Budi Santoso",
    role: "Mahasiswa ITB",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment:
      "Keamanan 24 jam dan WiFi kencang banget! Cocok untuk yang butuh fokus belajar.",
  },
  {
    name: "Ria Permata",
    role: "Pekerja Freelance",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment:
      "Suasana homey dan tetangga yang friendly. Berasa tinggal di rumah sendiri!",
  },
  {
    name: "Indra Pratama",
    role: "Marketing Executive",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment:
      "Lokasi strategis, dekat dengan transportasi umum. Sangat membantu mobilitas harian!",
  },
];

const getCardsPerView = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 768) return 2;
  return 3;
};

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3); // default 3 for SSR
  const [isMounted, setIsMounted] = useState(false);
  const maxIndex = testimonials.length - cardsPerView;

  useEffect(() => {
    setCardsPerView(getCardsPerView());
    setIsMounted(true);
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
      setCurrent(0); // reset to first slide on resize
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMounted) return null;

  const nextSlide = () => {
    setCurrent((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-12 px-2 ">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * (100 / cardsPerView)}%)`,
            width: "100%",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2 sm:px-4"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <div className="bg-white shadow-lg rounded-3xl hover:shadow-2xl transition-shadow duration-300 p-6 sm:p-8 flex flex-col items-center min-h-[320px] sm:min-h-[370px]">
                <div className="flex justify-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-center text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-center text-xs sm:text-sm font-semibold text-gray-500">
                  <span className="text-green-600">{testimonial.role}</span>
                </p>
                <div className="mt-4 text-gray-600 text-center italic">
                  <p className="max-w-xs mx-auto text-sm sm:text-base">
                    {testimonial.comment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots for navigation */}
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: testimonials.length - cardsPerView + 1 }).map(
          (_, idx) => (
            <button
              key={idx}
              className={`h-2 w-2 rounded-full ${
                current === idx ? "bg-green-600" : "bg-gray-300"
              } transition-all duration-300`}
              onClick={() => setCurrent(idx)}
            />
          )
        )}
      </div>

      {/* Previous button */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button
          className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors duration-300"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Next button */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button
          className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors duration-300"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
