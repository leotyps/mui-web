import * as React from 'react';
import Typography from '@mui/material/Typography';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Box from '@mui/material/Box';

const HomePage: React.FC = () => {
  return (
    <Layout title="Home" description="Selamat datang di halaman utama aplikasi Next.js saya!">
      <Box sx={{ my: 4 }}>
        <Typography variant="body1" gutterBottom>
          Ini adalah contoh halaman utama. Kamu bisa menjelajahi bagian dokumentasi kami.
        </Typography>
        <Link href="/docs" passHref>
          <Typography component="a" color="primary">
            Pergi ke Halaman Dokumentasi
          </Typography>
        </Link>
      </Box>
    </Layout>
  );
};

export default HomePage;
