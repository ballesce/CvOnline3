export default function About() {
  return (
    <section className="mt-10 w-full max-w-5xl mx-auto text-center space-y-8">
      {/* Judul Section */}
      <h3 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h3>

      {/* Grid Portfolio */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-xl shadow-xl">
          <h4 className="text-xl font-bold text-gray-100 mb-4">
            Website Puskesmas Cisempur
          </h4>
          <p className="text-gray-300">
            Pengembangan sistem informasi layanan kesehatan untuk Puskesmas
            Cisempur dengan fitur pendaftaran online, manajemen data pasien,
            dan rekap laporan kesehatan. Website ini membantu meningkatkan
            efisiensi pelayanan dan akurasi data kesehatan masyarakat.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-xl shadow-xl">
          <h4 className="text-xl font-bold text-gray-100 mb-4">
            Dashboard PMB
          </h4>
          <p className="text-gray-300">
            Aplikasi dashboard untuk pengelolaan data peserta PMB, termasuk
            fitur login multi-role, pengelolaan biodata peserta, dan monitoring
            status akun peserta secara otomatis. Sistem ini dirancang untuk
            mempermudah petugas dalam memantau proses pendaftaran dan data
            peserta.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-xl shadow-xl">
          <h4 className="text-xl font-bold text-gray-100 mb-4">
            Website Profil Universitas
          </h4>
          <p className="text-gray-300">
            Website resmi universitas dengan fitur informasi akademik,
            pengumuman, galeri kegiatan, dan pendaftaran mahasiswa baru yang
            terintegrasi. Platform ini menjadi sarana utama untuk memberikan
            informasi terkini kepada mahasiswa dan calon mahasiswa.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-xl shadow-xl">
          <h4 className="text-xl font-bold text-gray-100 mb-4">
            Aplikasi Monitoring Prodi
          </h4>
          <p className="text-gray-300">
            Aplikasi untuk memantau jumlah mahasiswa per prodi, transfer
            mahasiswa antar prodi, dan rekapitulasi data berbasis login kaprodi
            dan pimpinan. Sistem ini dirancang untuk memberikan transparansi dan
            kemudahan pengelolaan data akademik.
          </p>
        </div>
      </div>
    </section>
  );
}
