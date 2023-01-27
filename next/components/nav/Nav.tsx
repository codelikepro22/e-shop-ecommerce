import { Menu, Search } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Dialog,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import Link from '../../utils/mui/Link';
import AccountIcon from '../account/AccountIcon';
import CartIcon from '../cart/CartIcon';
import SearchForm from '../search/SearchForm';
import TabsNav from './TabsNav';

const Nav = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <Menu />
          </IconButton>
          <Link href="/" color="inherit" sx={{ textDecoration: 'none' }}>
            <Typography variant="h6" component="h1" noWrap>
              E-Shop
            </Typography>
          </Link>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <SearchForm open={searchOpen} setOpen={setSearchOpen} />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Stack gap={1} direction="row" alignItems="center">
            <IconButton
              sx={{ display: { xs: 'inherit', sm: 'none' }, color: 'inherit' }}
              onClick={() => setSearchOpen(true)}
            >
              <Search />
            </IconButton>
            <CartIcon />
            <AccountIcon />
          </Stack>
        </Toolbar>
        <TabsNav />
      </AppBar>
      <Dialog
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
        maxWidth="xs"
        PaperProps={{
          sx: {
            position: 'fixed',
            top: 10,
          },
        }}
        sx={{ display: { xs: 'block', sm: 'none' } }}
      >
        <SearchForm open={searchOpen} setOpen={setSearchOpen} />
      </Dialog>
    </>
  );
};

export default Nav;
