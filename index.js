const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'API Sistem Informasi Poliklinik',
    status: 'online',
    endpoints: {
      pasien: '/api/pasien'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server Poliklinik aktif di http://localhost:${PORT}`);
});
