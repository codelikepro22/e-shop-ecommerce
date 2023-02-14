import { GetStaticProps, NextPage } from 'next';
import React, { useEffect } from 'react';
import { Product } from '../../types/sanity';
import { sanityClient } from '../../utils/sanity/client';

type Props = {
  products: Product[];
};

const Products: NextPage<Props> = ({ products }) => {
  useEffect(() => {
    console.log(products[0].title);
  }, [products]);
  return <div>Products</div>;
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
