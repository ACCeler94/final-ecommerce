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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersController = void 0;
const common_1 = require("@nestjs/common");
const orders_service_1 = require("./orders.service");
const validateProductId_1 = require("../utils/validateProductId");
const CreateOrder_dto_1 = require("./dtos/CreateOrder.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const admin_auth_guard_1 = require("../auth/admin-auth.guard");
let OrdersController = class OrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    getOrders() {
        return this.ordersService.getAllOrders();
    }
    async getOrderById(id) {
        const order = await this.ordersService.getOrderById(id);
        if (!order) {
            throw new common_1.NotFoundException('Order not found.');
        }
        return order;
    }
    async createOrder(orderData, req) {
        const { products } = orderData;
        const userId = req.user.id;
        for (const productsElem of products) {
            try {
                await (0, validateProductId_1.default)(productsElem.product.id);
            }
            catch (error) {
                throw new common_1.BadRequestException(`Bad request ${error}`);
            }
        }
        return await this.ordersService.createOrder(orderData, userId);
    }
};
exports.OrdersController = OrdersController;
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "getOrders", null);
__decorate([
    (0, common_1.UseGuards)(admin_auth_guard_1.AdminAuthGuard),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getOrderById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateOrder_dto_1.CreateOrderDto, Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "createOrder", null);
exports.OrdersController = OrdersController = __decorate([
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrdersController);
//# sourceMappingURL=orders.controller.js.map