"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const cookieParser = require("cookie-parser");
const config_1 = require("@nestjs/config");
const helmet_1 = require("helmet");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.setGlobalPrefix('api');
    if (process.env.NODE_ENV !== 'production') {
        app.enableCors();
    }
    if (process.env.NODE_ENV === 'production') {
        app.use((0, helmet_1.default)());
    }
    app.use(cookieParser());
    await app.enableShutdownHooks();
    await app.listen(configService.get('port'));
}
bootstrap();
//# sourceMappingURL=main.js.map