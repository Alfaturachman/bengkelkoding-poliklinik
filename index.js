const express = require('express');
const pasienRoutes = require('./app/routes/pasienRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing body JSON
app.use(express.json());

// Endpoint status root
app.get('/', (req, res) => {
  res.json({
    name: 'Sistem Informasi Poliklinik API',
    status: 'online',
    version: '1.0.0',
    endpoints: {
      pasien: '/api/pasien'
    }
  });
});

// Pendaftaran rute fitur data pasien
app.use('/api/pasien', pasienRoutes);

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server Poliklinik aktif di http://localhost:${PORT}`);
});
