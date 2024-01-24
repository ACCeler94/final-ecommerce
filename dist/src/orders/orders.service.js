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
            include: { Products: true },
        });
    }
    async createOrder(orderData) {
        try {
            const { userData, products, orderTotal } = orderData;
            const createdOrder = await this.prismaService.order.create({
                data: {
                    name: userData.name,
                    email: userData.email,
                    address: userData.address,
                    orderTotal: orderTotal,
                },
            });
            for (const productsElem of products) {
                const productData = {
                    orderId: createdOrder.id,
                    productId: productsElem.product.id,
                    quantity: productsElem.quantity,
                    comment: productsElem.comment,
                };
                await this.prismaService.productOnOrder.create({
                    data: productData,
                });
            }
            const completeOrder = await this.prismaService.order.findUnique({
                where: { id: createdOrder.id },
                include: { Products: true },
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