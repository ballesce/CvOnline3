export default function About() {
  return (
    <section className="mt-10 p-6 max-w-2xl mx-auto text-center space-y-8">
      {/* Bagian 1: Tentang Saya */}
      <div className="bg-gradient-to-r from-gray-600/30 to-gray-800/30 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Tentang Saya</h2>
        <p className="text-gray-300">
          Saya adalah seorang pengembang front-end yang berdedikasi dengan pengalaman dalam menciptakan aplikasi web yang modern, interaktif, dan responsif.
          Dengan keahlian di bidang HTML, CSS, dan JavaScript, saya juga menguasai framework seperti React, Next.js, dan Tailwind CSS untuk menghasilkan antarmuka yang menarik dan ramah pengguna.
        </p>
      </div>

      {/* Bagian 2: Keahlian Utama */}
      <div className="bg-gradient-to-r from-gray-600/30 to-gray-800/30 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Keahlian Utama</h2>
        <ul className="text-gray-300 mt-2 space-y-2 list-disc list-inside">
          <li>🔥 Membuat desain antarmuka responsif menggunakan Tailwind CSS</li>
          <li>⚡ Membangun aplikasi berbasis React dan Next.js dengan performa tinggi</li>
          <li>🔗 Integrasi API RESTful untuk memperluas fungsi aplikasi</li>
          <li>💡 Mengoptimalkan pengalaman pengguna (UI/UX)</li>
          <li>📱 Pengembangan aplikasi yang ramah mobile</li>
        </ul>
      </div>

      {/* Bagian 3: Filosofi Kerja */}
      <div className="bg-gradient-to-r from-gray-600/30 to-gray-800/30 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Filosofi Kerja</h2>
        <p className="text-gray-300">
          Saya percaya bahwa teknologi harus menjadi alat yang mempermudah hidup manusia. Oleh karena itu, setiap proyek yang saya kerjakan selalu dimulai dengan memahami kebutuhan pengguna.
          Saya berkomitmen untuk terus belajar dan berinovasi dalam dunia teknologi yang selalu berubah.
        </p>
      </div>

      {/* Bagian 4: Minat dan Aktivitas */}
      <div className="bg-gradient-to-r from-gray-600/30 to-gray-800/30 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Minat dan Aktivitas</h2>
        <p className="text-gray-300">
          Ketika tidak sedang bekerja, saya suka belajar teknologi baru, membaca artikel teknologi, dan aktif dalam komunitas pengembang untuk berbagi ilmu.
          Selain itu, saya juga memiliki minat dalam desain UI/UX untuk menciptakan antarmuka yang tidak hanya fungsional tetapi juga estetis.
        </p>
      </div>

      {/* Bagian 5: Visi */}
      <div className="bg-gradient-to-r from-gray-600/30 to-gray-800/30 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Visi</h2>
        <p className="text-gray-300">
          Saya bertujuan untuk memberikan solusi teknologi yang tidak hanya memenuhi kebutuhan klien, tetapi juga memberikan dampak positif dan berkelanjutan.
          Saya percaya bahwa setiap proyek adalah peluang untuk menciptakan inovasi dan memberikan kontribusi bermakna di dunia digital.
        </p>
      </div>
    </section>
  );
}
