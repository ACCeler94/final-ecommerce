export const API_URL =
  process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3000/api';
export const IMAGES_URL =
  process.env.NODE_ENV === 'production'
    ? '/productPhotos'
    : 'http://localhost:3000/productPhotos';
