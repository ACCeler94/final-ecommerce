"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.THUMBNAILS_URL = exports.IMAGES_URL = exports.API_URL = void 0;
exports.API_URL = '/api';
exports.IMAGES_URL = process.env.NODE_ENV === 'production'
    ? '/photos/productPhotos'
    : 'http://localhost:3000/photos/productPhotos';
exports.THUMBNAILS_URL = process.env.NODE_ENV === 'production'
    ? '/photos/productPhotos/thumbnails'
    : 'http://localhost:3000/photos/productPhotos/thumbnails';
//# sourceMappingURL=config.js.map