import * as React from 'react';
import Typography from '@mui/material/Typography';
import Layout from '@/components/Layout';
import Box from '@mui/material/Box';

const AboutPage: React.FC = () => {
  return (
    <Layout title="Tentang Kami" description="Pelajari lebih lanjut tentang proyek kami.">
      <Box sx={{ my: 4 }}>
        <Typography variant="body1" gutterBottom>
          Aplikasi ini dibangun menggunakan Next.js dan Material-UI untuk menyediakan pengalaman pengguna yang modern dan responsif.
        </Typography>
        <Typography variant="body1">
          Tujuan kami adalah menunjukkan bagaimana membangun dasar yang kuat untuk proyek Next.js kamu.
        </Typography>
      </Box>
    </Layout>
  );
};

export default AboutPage;
