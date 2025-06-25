import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref style={{ textDecoration: 'none', color: 'inherit' }}>
            My Next.js App
          </Link>
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Button color="inherit" component={Link} href="/">
            Home
          </Button>
          <Button color="inherit" component={Link} href="/docs">
            Docs
          </Button>
          <Button color="inherit" component={Link} href="/about">
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
