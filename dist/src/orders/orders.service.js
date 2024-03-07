"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let OrdersService = class OrdersService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    getAllOrders() {
        return this.prismaService.order.findMany();
    }
    getOrderById(id) {
        return this.prismaService.order.findUnique({
            where: { id },
            include: { products: true },
        });
    }
    async createOrder(orderData, userId) {
        try {
            const { userData, products, orderTotal } = orderData;
            const createdOrder = await this.prismaService.order.create({
                data: {
                    name: userData.name,
                    email: userData.email,
                    shippingStreet: userData.shippingStreet,
                    shippingCity: userData.shippingCity,
                    shippingZip: userData.shippingZip,
                    orderTotal: orderTotal,
                    userId: userId,
                },
            });
            const productOnOrderCreations = products.map((productsElem) => {
                const productData = {
                    orderId: createdOrder.id,
                    productId: productsElem.product.id,
                    quantity: productsElem.quantity,
                    comment: productsElem.comment,
                    size: productsElem.size,
                };
                return this.prismaService.productOnOrder.create({
                    data: productData,
                });
            });
            await this.prismaService.$transaction(productOnOrderCreations);
            const completeOrder = await this.prismaService.order.findUnique({
                where: { id: createdOrder.id },
                include: { products: true },
            });
            return completeOrder;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map