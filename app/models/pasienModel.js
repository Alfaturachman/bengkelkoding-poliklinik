// Penyimpanan data pasien in-memory untuk layanan Poliklinik
let dataPasien = [
  {
    id: 1,
    nik: "3301012304950001",
    nama: "Budi Santoso",
    tanggalLahir: "1995-04-23",
    jenisKelamin: "Laki-laki",
    alamat: "Jl. Pemuda No. 45, Semarang",
    noTelepon: "081234567890",
    noRekamMedis: "RM-2026-001",
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    nik: "3301011208980002",
    nama: "Siti Rahmawati",
    tanggalLahir: "1998-08-12",
    jenisKelamin: "Perempuan",
    alamat: "Jl. Pandanaran No. 12, Semarang",
    noTelepon: "082134567891",
    noRekamMedis: "RM-2026-002",
    createdAt: new Date().toISOString()
  }
];

let nextId = 3;

const PasienModel = {
  // Mengambil seluruh data pasien
  findAll: () => {
    return dataPasien;
  },

  // Mencari pasien berdasarkan ID
  findById: (id) => {
    return dataPasien.find((p) => p.id === parseInt(id));
  },

  // Mencari pasien berdasarkan Nomor Rekam Medis
  findByNoRekamMedis: (noRm) => {
    return dataPasien.find((p) => p.noRekamMedis.toLowerCase() === noRm.toLowerCase());
  },

  // Menambahkan pasien baru
  create: (payload) => {
    const paddedId = String(nextId).padStart(3, '0');
    const noRekamMedis = `RM-2026-${paddedId}`;

    const newPasien = {
      id: nextId++,
      nik: payload.nik,
      nama: payload.nama,
      tanggalLahir: payload.tanggalLahir,
      jenisKelamin: payload.jenisKelamin,
      alamat: payload.alamat,
      noTelepon: payload.noTelepon,
      noRekamMedis: noRekamMedis,
      createdAt: new Date().toISOString()
    };

    dataPasien.push(newPasien);
    return newPasien;
  },

  // Memperbarui data pasien
  update: (id, payload) => {
    const index = dataPasien.findIndex((p) => p.id === parseInt(id));
    if (index === -1) return null;

    dataPasien[index] = {
      ...dataPasien[index],
      ...payload,
      id: dataPasien[index].id, // id tidak boleh diubah
      noRekamMedis: dataPasien[index].noRekamMedis, // nomor RM tetap
      updatedAt: new Date().toISOString()
    };

    return dataPasien[index];
  },

  // Menghapus data pasien
  delete: (id) => {
    const index = dataPasien.findIndex((p) => p.id === parseInt(id));
    if (index === -1) return false;

    dataPasien.splice(index, 1);
    return true;
  }
};

module.exports = PasienModel;
