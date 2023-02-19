import { GetStaticProps, NextPage } from 'next';
import ProductsGrid from '../../components/products/ProductsGrid';
import { Product } from '../../types/sanity';
import { sanityClient } from '../../utils/sanity/client';

type Props = {
  products: Product[];
};

const Products: NextPage<Props> = ({ products }) => {
  return <ProductsGrid {...{ products }} />;
};

export default Products;

export const getStaticProps: GetStaticProps = async () => {
  const products = await sanityClient.fetch(
    '*[_type == "product" && !(_id in path("drafts.**"))]'
  );

  return {
    props: { products },
  };
};
