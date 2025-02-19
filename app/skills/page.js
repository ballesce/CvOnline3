import { FaHtml5, FaJs, FaReact, FaNodeJs, FaCss3Alt, FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <section className="mt-10 w-full max-w-3xl mx-auto text-center px-4">
  <h3 className="text-2xl font-bold mb-4">Skills</h3>
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <li className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <FaHtml5 size={24} /> <span className="font-bold">HTML & CSS</span>
      </div>
      <p className="text-gray-400 text-sm">Kemampuan dalam membangun struktur halaman web menggunakan HTML dan mendesain tampilan yang responsif dan estetis dengan CSS.</p>
    </li>
    <li className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <FaJs size={24} /> <span className="font-bold">JavaScript</span>
      </div>
      <p className="text-gray-400 text-sm">Menguasai JavaScript untuk menambahkan interaktivitas pada aplikasi web, termasuk manipulasi DOM, event handling, dan penggunaan API.</p>
    </li>
    <li className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <FaReact size={24} /> <span className="font-bold">React</span>
      </div>
      <p className="text-gray-400 text-sm">Kemahiran dalam menggunakan React untuk membangun antarmuka pengguna yang dinamis dan komponen yang dapat digunakan kembali.</p>
    </li>
    <li className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <FaNodeJs size={24} /> <span className="font-bold">Next.js</span>
      </div>
      <p className="text-gray-400 text-sm">Pengalaman menggunakan Next.js untuk membuat aplikasi web yang cepat dan dioptimalkan dengan rendering sisi server dan fitur-fitur modern lainnya.</p>
    </li>
    <li className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <FaCss3Alt size={24} /> <span className="font-bold">Tailwind CSS</span>
      </div>
      <p className="text-gray-400 text-sm">Memanfaatkan Tailwind CSS untuk membuat desain yang konsisten dan responsif dengan efisiensi tinggi menggunakan utilitas kelas.</p>
    </li>
    <li className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center gap-2">
      <div className="flex items-center gap-2">
        <FaGithub size={24} /> <span className="font-bold">Git & GitHub</span>
      </div>
      <p className="text-gray-400 text-sm">Kemampuan menggunakan Git untuk pengelolaan versi kode dan GitHub untuk kolaborasi dalam tim serta hosting proyek.</p>
    </li>
  </ul>
</section>

  
  );
}
