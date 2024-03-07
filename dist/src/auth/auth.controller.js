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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const Register_dto_1 = require("./dtos/Register.dto");
const local_auth_guard_1 = require("./local-auth.guard");
const jwt_auth_guard_1 = require("./jwt-auth.guard");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signUp(registrationData) {
        return this.authService.register(registrationData);
    }
    async login(req, res) {
        const maxAge = 12 * 60 * 60 * 1000;
        const tokens = await this.authService.createSession(req.user);
        res.cookie('auth', tokens, { httpOnly: true, maxAge });
        res.cookie('isLogged', 'true', { maxAge });
        res.send({
            message: 'success',
            userId: req.user.id,
        });
    }
    async logJWT(req, res) {
        const maxAge = 12 * 60 * 60 * 1000;
        const tokens = await this.authService.createSession(req.user);
        res.cookie('auth', tokens, { httpOnly: true, maxAge });
        res.cookie('isLogged', 'true', { maxAge });
        res.send({
            message: 'success',
            userId: req.user.id,
        });
    }
    async logout(req, res) {
        res.clearCookie('auth', { httpOnly: true });
        res.clearCookie('isLogged');
        res.send({
            message: 'success',
        });
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Register_dto_1.RegisterDTO]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/logJWT'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logJWT", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/logout'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map