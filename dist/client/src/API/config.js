"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IMAGES_URL = exports.API_URL = void 0;
exports.API_URL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3000/api';
exports.IMAGES_URL = process.env.NODE_ENV === 'production'
    ? '/photos/productPhotos'
    : 'http://localhost:3000/photos/productPhotos';
//# sourceMappingURL=config.js.map