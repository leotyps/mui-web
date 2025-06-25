import * as React from 'react';
import Typography from '@mui/material/Typography';
import Layout from '@/components/Layout';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const DocsPage: React.FC = () => {
  return (
    <Layout title="Dokumentasi" description="Temukan berbagai panduan dan informasi di sini.">
      <Typography variant="body1" gutterBottom>
        Ini adalah halaman utama dokumentasi. Pilih topik di bawah ini:
      </Typography>
      <List>
        <ListItem disablePadding>
          <Link href="/docs/1" passHref>
            <ListItemText primary="Dokumen 1: Memulai" />
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/docs/2" passHref>
            <ListItemText primary="Dokumen 2: Penggunaan Lanjutan" />
          </Link>
        </ListItem>
      </List>
    </Layout>
  );
};

export default DocsPage;
