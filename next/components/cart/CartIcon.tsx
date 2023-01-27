import { ShoppingCart } from '@mui/icons-material';
import { Badge, IconButton, styled } from '@mui/material';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    animation: 'pulse 2s infinite',
  },
  '@keyframes pulse': {
    '0%': { boxShadow: '0 0 0 0 rgba(0,0,0, 0.3)' },
    '70%': { boxShadow: '0 0 0 8px rgba(0,0,0, 0)' },
    '100%': { boxShadow: '0 0 0 0 rgba(0,0,0, 0)' },
  },
}));

const CartIcon = () => {
  return (
    <IconButton size="large" color="inherit">
      <ShoppingCart />
      <StyledBadge color="secondary" badgeContent={5} />
    </IconButton>
  );
};

export default CartIcon;
