"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const validateProductId = async (id) => {
    try {
        const product = await prisma.product.findUnique({ where: { id } });
        if (!product)
            throw new common_1.NotFoundException('Product not found.');
    }
    catch (error) {
        throw new Error('Error validating product Id');
    }
};
exports.default = validateProductId;
//# sourceMappingURL=validateProductId.js.map