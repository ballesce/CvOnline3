import React from "react";
import { MdWeb } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineApi } from "react-icons/ai";
import { FaReact, FaMobileAlt } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function About() {
  return (
    <section className="mt-10 w-full max-w-3xl mx-auto text-center px-4">
      <h3 className="text-2xl font-bold mb-4">Layanan</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <li className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <MdWeb size={24} /> <span className="font-bold">Pengembangan Website</span>
          </div>
          <p className="text-gray-400 text-sm">
            Membangun website dari awal dengan desain responsif, fitur modern, dan performa tinggi sesuai kebutuhan klien.
          </p>
        </li>
        <li className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <BsFillPersonLinesFill size={24} /> <span className="font-bold">Optimasi UI/UX</span>
          </div>
          <p className="text-gray-400 text-sm">
            Mengoptimalkan antarmuka dan pengalaman pengguna untuk memastikan navigasi yang intuitif dan desain yang menarik.
          </p>
        </li>
        <li className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <AiOutlineApi size={24} /> <span className="font-bold">Integrasi API</span>
          </div>
          <p className="text-gray-400 text-sm">
            Mengintegrasikan berbagai layanan pihak ketiga menggunakan API untuk menambah fungsionalitas aplikasi.
          </p>
        </li>
        <li className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <FaReact size={24} /> <span className="font-bold">Konsultasi Teknologi</span>
          </div>
          <p className="text-gray-400 text-sm">
            Memberikan solusi teknologi terbaik untuk pengembangan aplikasi dan infrastruktur digital.
          </p>
        </li>
        <li className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <FaMobileAlt size={24} /> <span className="font-bold">Pengembangan Aplikasi Mobile</span>
          </div>
          <p className="text-gray-400 text-sm">
            Membuat aplikasi mobile yang responsif dan kaya fitur untuk platform Android dan iOS.
          </p>
        </li>
        <li className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <RiSecurePaymentLine size={24} /> <span className="font-bold">Integrasi Sistem Pembayaran</span>
          </div>
          <p className="text-gray-400 text-sm">
            Menambahkan solusi pembayaran online yang aman dan efisien untuk e-commerce dan aplikasi lainnya.
          </p>
        </li>
      </ul>
    </section>
  );
}
