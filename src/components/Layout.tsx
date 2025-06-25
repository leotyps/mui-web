import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  // Jika deskripsi tidak diberikan, kita bisa mencoba membuat deskripsi otomatis
  // Berdasarkan title atau menyediakan default.
  const pageDescription = description || `Halaman ${title} dari aplikasi Next.js saya.`;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Head>
        <title>{title} | My Next.js App</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Container component="main" maxWidth="md" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {title}
        </Typography>
        {description && ( // Hanya tampilkan deskripsi jika disediakan secara eksplisit
          <Typography variant="body1" color="text.secondary" paragraph>
            {description}
          </Typography>
        )}
        {children}
      </Container>

      <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: (theme) => theme.palette.grey[200] }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            {'© '}
            {new Date().getFullYear()}
            {' My Next.js App. All rights reserved.'}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
