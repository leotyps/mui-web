import * as React from 'react';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import Layout from '@/components/Layout';
import Box from '@mui/material/Box';
import Link from 'next/link';

const DocDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Data dummy untuk demonstrasi
  const docContent: { [key: string]: { title: string; content: string; description: string } } = {
    '1': {
      title: 'Dokumen 1: Memulai',
      content: 'Ini adalah konten untuk dokumen pertama. Pelajari dasar-dasar penggunaan aplikasi ini.',
      description: 'Panduan awal untuk memulai menggunakan aplikasi.'
    },
    '2': {
      title: 'Dokumen 2: Penggunaan Lanjutan',
      content: 'Ini adalah konten untuk dokumen kedua. Jelajahi fitur-fitur canggih dan tips profesional.',
      description: 'Fitur lanjutan dan tips untuk penggunaan yang lebih efisien.'
    }
  };

  const currentDoc = docContent[id as string];

  if (!currentDoc) {
    return (
      <Layout title="Dokumen Tidak Ditemukan" description="Halaman dokumen yang kamu cari tidak ada.">
        <Typography variant="h5" component="h2" gutterBottom>
          Oops! Dokumen dengan ID "{id}" tidak ditemukan.
        </Typography>
        <Link href="/docs" passHref>
          <Typography component="a" color="primary">
            Kembali ke Dokumentasi
          </Typography>
        </Link>
      </Layout>
    );
  }

  return (
    <Layout title={currentDoc.title} description={currentDoc.description}>
      <Box sx={{ my: 4 }}>
        <Typography variant="body1" gutterBottom>
          {currentDoc.content}
        </Typography>
        <Link href="/docs" passHref>
          <Typography component="a" color="primary" sx={{ mt: 2, display: 'block' }}>
            Kembali ke Dokumentasi
          </Typography>
        </Link>
      </Box>
    </Layout>
  );
};

export default DocDetailPage;
