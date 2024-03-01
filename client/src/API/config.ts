export const API_URL = '/api';
export const IMAGES_URL =
  process.env.NODE_ENV === 'production'
    ? '/photos/productPhotos'
    : 'http://localhost:3000/photos/productPhotos';

export const THUMBNAILS_URL =
  process.env.NODE_ENV === 'production'
    ? '/photos/productPhotos/thumbnails'
    : 'http://localhost:3000/photos/productPhotos/thumbnails';
