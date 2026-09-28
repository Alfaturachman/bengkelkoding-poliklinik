const PasienModel = require('../models/pasienModel');

const pasienController = {
  // GET /api/pasien - Mendapatkan semua pasien (dengan opsi filter pencarian noRm)
  getAllPasien: (req, res) => {
    const { noRm } = req.query;

    if (noRm) {
      const pasien = PasienModel.findByNoRekamMedis(noRm);
      if (!pasien) {
        return res.status(404).json({
          status: 'fail',
          message: `Pasien dengan nomor rekam medis '${noRm}' tidak ditemukan.`
        });
      }
      return res.status(200).json({
        status: 'success',
        data: pasien
      });
    }

    const semuaPasien = PasienModel.findAll();
    return res.status(200).json({
      status: 'success',
      total: semuaPasien.length,
      data: semuaPasien
    });
  },

  // GET /api/pasien/:id - Mendapatkan detail satu pasien berdasarkan ID
  getPasienById: (req, res) => {
    const { id } = req.params;
    const pasien = PasienModel.findById(id);

    if (!pasien) {
      return res.status(404).json({
        status: 'fail',
        message: `Pasien dengan ID ${id} tidak ditemukan.`
      });
    }

    return res.status(200).json({
      status: 'success',
      data: pasien
    });
  },

  // POST /api/pasien - Registrasi pasien baru
  createPasien: (req, res) => {
    const { nik, nama, tanggalLahir, jenisKelamin, alamat, noTelepon } = req.body;

    // Validasi input wajib
    if (!nik || !nama) {
      return res.status(400).json({
        status: 'fail',
        message: 'NIK dan Nama wajib diisi untuk registrasi pasien.'
      });
    }

    if (nik.length !== 16) {
      return res.status(400).json({
        status: 'fail',
        message: 'NIK harus terdiri dari 16 digit angka.'
      });
    }

    const pasienBaru = PasienModel.create({
      nik,
      nama,
      tanggalLahir: tanggalLahir || '-',
      jenisKelamin: jenisKelamin || 'Tidak diketahui',
      alamat: alamat || '-',
      noTelepon: noTelepon || '-'
    });

    return res.status(201).json({
      status: 'success',
      message: 'Data pasien berhasil didaftarkan.',
      data: pasienBaru
    });
  },

  // PUT /api/pasien/:id - Memperbarui data pasien
  updatePasien: (req, res) => {
    const { id } = req.params;
    const { nik, nama, tanggalLahir, jenisKelamin, alamat, noTelepon } = req.body;

    const updatedPasien = PasienModel.update(id, {
      ...(nik && { nik }),
      ...(nama && { nama }),
      ...(tanggalLahir && { tanggalLahir }),
      ...(jenisKelamin && { jenisKelamin }),
      ...(alamat && { alamat }),
      ...(noTelepon && { noTelepon })
    });

    if (!updatedPasien) {
      return res.status(404).json({
        status: 'fail',
        message: `Gagal memperbarui. Pasien dengan ID ${id} tidak ditemukan.`
      });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Data pasien berhasil diperbarui.',
      data: updatedPasien
    });
  },

  // DELETE /api/pasien/:id - Menghapus data pasien
  deletePasien: (req, res) => {
    const { id } = req.params;
    const deleted = PasienModel.delete(id);

    if (!deleted) {
      return res.status(404).json({
        status: 'fail',
        message: `Gagal menghapus. Pasien dengan ID ${id} tidak ditemukan.`
      });
    }

    return res.status(200).json({
      status: 'success',
      message: `Pasien dengan ID ${id} berhasil dihapus.`
    });
  }
};

module.exports = pasienController;
