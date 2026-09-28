const express = require('express');
const router = express.Router();
const pasienController = require('../controllers/pasienController');

// Rute untuk mendapatkan seluruh pasien dan registrasi pasien baru
router.get('/', pasienController.getAllPasien);
router.post('/', pasienController.createPasien);

// Rute untuk manipulasi data pasien berdasarkan ID
router.get('/:id', pasienController.getPasienById);
router.put('/:id', pasienController.updatePasien);
router.delete('/:id', pasienController.deletePasien);

module.exports = router;
