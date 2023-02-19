import imageURL from '@sanity/image-url';
import { Image } from '../../types/sanity';

export const imgURL = (source: Image) => {
  return imageURL({
    projectId: <string>process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: <string>process.env.NEXT_PUBLIC_SANITY_DATASET,
  }).image(source);
};
