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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(usersService, jwtService, configService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async register(registrationData) {
        const hashedPassword = await bcrypt.hash(registrationData.password, 10);
        const userData = {
            email: registrationData.email,
            name: registrationData.name,
            street: registrationData.street,
            city: registrationData.city,
            zip: registrationData.zip,
        };
        return this.usersService.createUser(userData, hashedPassword);
    }
    async validateUser(email, password) {
        const user = await this.usersService.getUserByEmail(email);
        if (user &&
            (await bcrypt.compare(password, user.password.hashedPassword))) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    async createSession(user) {
        const payload = { email: user.email, sub: user.id };
        const accessToken = this.jwtService.sign(payload, {
            secret: this.configService.get('jwt.secret'),
            expiresIn: this.configService.get('jwt.expiresIn'),
        });
        return {
            access_token: accessToken,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map