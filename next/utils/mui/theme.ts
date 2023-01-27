import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#2292A4',
    },
    secondary: {
      main: '#BDBF09',
    },
    background: {
      default: '#DDD7D5',
      paper: '#F5EFED',
    },
    text: {
      primary: '#0F0A0A',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
