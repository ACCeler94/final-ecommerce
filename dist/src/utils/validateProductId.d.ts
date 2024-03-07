import { Product } from '@prisma/client';
declare const validateProductId: (id: Product['id']) => Promise<void>;
export default validateProductId;
