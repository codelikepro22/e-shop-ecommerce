import { AddShoppingCart } from '@mui/icons-material';
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useContextValue } from '../../context/ContextProvider';
import { ActionType } from '../../types/context';
import { Product } from '../../types/sanity';
import { formatEUR } from '../../utils/helpers';
import Link from '../../utils/mui/Link';
import { imgURL } from '../../utils/sanity/image';

type Props = {
  products: Product[];
};
const ProductsGrid = ({ products }: Props) => {
  const { dispatch } = useContextValue();
  useEffect(() => {
    dispatch({ type: ActionType.UPDATE_PAGE_TAB, payload: 1 });
  }, [dispatch]);
  const [sorting, setSorting] = useState(' ');
  const [sortedProducts, setSortedProducts] = useState(products);

  const handleChange = (e: SelectChangeEvent) => {
    const selectValue = e.target.value;
    setSorting(selectValue);
    const tempArray = products;
    if (selectValue === 'low') {
      tempArray.sort((product1, product2) => product1.price - product2.price);
    } else {
      tempArray.sort((product1, product2) => product2.price - product1.price);
    }
    setSortedProducts(tempArray);
  };
  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Select
          value={sorting}
          onChange={handleChange}
          sx={{ '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
        >
          <MenuItem value=" " disabled>
            <em>Select Sorting Type</em>
          </MenuItem>
          <MenuItem value="low">Price Low to High</MenuItem>
          <MenuItem value="high">Price High to Low</MenuItem>
        </Select>
      </Box>
      <Grid container spacing={2}>
        {sortedProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <Card
              sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              <CardActionArea sx={{ flexGrow: 1 }}>
                <Link
                  href={`/products/${product.slug.current}`}
                  sx={{
                    textDecoration: 'none',
                    color: (theme) => theme.palette.text.primary,
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ maxHeight: 210, objectFit: 'contain' }}
                    image={imgURL(product.images[0]).width(270).url()}
                    alt={product.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h3">
                      {product.title}
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
              <CardActions sx={{ justifyContent: 'space-between' }}>
                <Tooltip title="Add to Cart">
                  <IconButton color="primary">
                    <AddShoppingCart />
                  </IconButton>
                </Tooltip>
                <Stack spacing={1} direction="row">
                  {product.oldPrice && product.oldPrice > product.price && (
                    <>
                      <Typography
                        sx={{
                          textDecoration: 'line-through',
                          opacity: 0.5,
                        }}
                      >
                        {formatEUR(product.oldPrice)}
                      </Typography>
                      <Paper
                        sx={{
                          bgcolor: 'red',
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          position: 'absolute',
                          top: 5,
                          right: 5,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <Typography color="white">Sale</Typography>
                      </Paper>
                    </>
                  )}
                  <Typography color="primary">
                    {formatEUR(product.price)}
                  </Typography>
                </Stack>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductsGrid;
