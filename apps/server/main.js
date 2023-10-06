/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(3), exports);
tslib_1.__exportStar(__webpack_require__(10), exports);
tslib_1.__exportStar(__webpack_require__(12), exports);
tslib_1.__exportStar(__webpack_require__(24), exports);
tslib_1.__exportStar(__webpack_require__(27), exports);
tslib_1.__exportStar(__webpack_require__(28), exports);


/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WithUser = exports.StringField = void 0;
var string_field_decorator_1 = __webpack_require__(4);
Object.defineProperty(exports, "StringField", ({ enumerable: true, get: function () { return string_field_decorator_1.StringField; } }));
var user_decorator_1 = __webpack_require__(9);
Object.defineProperty(exports, "WithUser", ({ enumerable: true, get: function () { return user_decorator_1.WithUser; } }));


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StringField = void 0;
const common_1 = __webpack_require__(5);
const graphql_1 = __webpack_require__(6);
const swagger_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(8);
const class_validator_2 = __webpack_require__(8);
const class_validator_3 = __webpack_require__(8);
const StringField = ({ min = 6, max = 14, example }) => {
    return (0, common_1.applyDecorators)((0, graphql_1.Field)(), (0, class_validator_1.IsString)(), (0, class_validator_3.MinLength)(min), (0, class_validator_2.MaxLength)(max), (0, swagger_1.ApiProperty)({ example }));
};
exports.StringField = StringField;


/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WithUser = void 0;
const common_1 = __webpack_require__(5);
const graphql_1 = __webpack_require__(6);
exports.WithUser = (0, common_1.createParamDecorator)((data, context) => {
    const ctx = graphql_1.GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
});


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpExceptionFilter = void 0;
var http_exception_filter_1 = __webpack_require__(11);
Object.defineProperty(exports, "HttpExceptionFilter", ({ enumerable: true, get: function () { return http_exception_filter_1.HttpExceptionFilter; } }));


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpExceptionFilter = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(5);
const common_2 = __webpack_require__(5);
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();
        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message: exception.message
        });
    }
};
exports.HttpExceptionFilter = HttpExceptionFilter;
exports.HttpExceptionFilter = HttpExceptionFilter = tslib_1.__decorate([
    (0, common_1.Catch)(common_2.HttpException)
], HttpExceptionFilter);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = exports.GqlLocalAuthGuard = exports.GqlAuthGuard = void 0;
var gql_auth_guard_1 = __webpack_require__(13);
Object.defineProperty(exports, "GqlAuthGuard", ({ enumerable: true, get: function () { return gql_auth_guard_1.GqlAuthGuard; } }));
var gql_local_auth_guard_1 = __webpack_require__(22);
Object.defineProperty(exports, "GqlLocalAuthGuard", ({ enumerable: true, get: function () { return gql_local_auth_guard_1.GqlLocalAuthGuard; } }));
var jwt_auth_guard_1 = __webpack_require__(23);
Object.defineProperty(exports, "JwtAuthGuard", ({ enumerable: true, get: function () { return jwt_auth_guard_1.JwtAuthGuard; } }));


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GqlAuthGuard = void 0;
const config_1 = __webpack_require__(14);
const graphql_1 = __webpack_require__(6);
const passport_1 = __webpack_require__(21);
class GqlAuthGuard extends (0, passport_1.AuthGuard)('local') {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor() {
        super();
    }
    getRequest(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        const gqlReq = ctx.getContext().req;
        gqlReq.body = ctx.getArgs()[config_1.graphqlArg];
        return gqlReq;
    }
}
exports.GqlAuthGuard = GqlAuthGuard;


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createStorybookConfig = exports.createPreviewDefaults = void 0;
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(15), exports);
tslib_1.__exportStar(__webpack_require__(16), exports);
var storybook_1 = __webpack_require__(17);
Object.defineProperty(exports, "createPreviewDefaults", ({ enumerable: true, get: function () { return storybook_1.createPreviewDefaults; } }));
Object.defineProperty(exports, "createStorybookConfig", ({ enumerable: true, get: function () { return storybook_1.createStorybookConfig; } }));


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.appName = exports.clientUrl = void 0;
exports.clientUrl = process.env.CLIENT_URL ?? 'http://localhost:3000';
exports.appName = 'code_gear';


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jwtSecret = exports.graphqlArg = exports.serverDocsPrefix = exports.serverAppName = exports.EndPoints = exports.serverUrl = exports.compilerApiUrl = exports.serverPort = exports.serverPrefix = void 0;
exports.serverPrefix = process.env.SERVER_PREFIX ?? '';
exports.serverPort = process.env.SERVER_PORT ?? 6868;
exports.compilerApiUrl = process.env.CODE_COMPILER_API_URL ?? 'https://api.codex.jaagrav.in';
exports.serverUrl = process.env.SERVER_URL ?? 'http://localhost:6868';
exports.EndPoints = {
    CODE_EXECUTOR_API: 'execute',
    _GRAPHQL: 'graphql'
};
exports.serverAppName = 'CodeGear API';
exports.serverDocsPrefix = 'docs';
exports.graphqlArg = '_graphql';
exports.jwtSecret = process.env.JWT_SECRET;


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createStorybookConfig = exports.createPreviewDefaults = void 0;
var create_preview_defaults_1 = __webpack_require__(18);
Object.defineProperty(exports, "createPreviewDefaults", ({ enumerable: true, get: function () { return create_preview_defaults_1.createPreviewDefaults; } }));
var create_storybook_config_1 = __webpack_require__(20);
Object.defineProperty(exports, "createStorybookConfig", ({ enumerable: true, get: function () { return create_storybook_config_1.createStorybookConfig; } }));


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createPreviewDefaults = void 0;
const create_viewports_1 = __webpack_require__(19);
const createPreviewDefaults = ({ decorators }) => ({
    parameters: {
        viewport: {
            viewports: (0, create_viewports_1.createViewPorts)()
        },
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
        backgrounds: {
            values: []
        },
        storySort: (a, b) => a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true })
    },
    decorators
});
exports.createPreviewDefaults = createPreviewDefaults;


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createViewPorts = exports.viewports = void 0;
exports.viewports = [600, 800, 1000, 1200, 1500];
const widthToStr = (w) => w.toString() + 'px';
const generateViewPort = (width) => {
    return {
        name: widthToStr(width),
        styles: {
            width: widthToStr(width),
            height: '1080px'
        }
    };
};
const createViewPorts = () => {
    return Object.fromEntries(exports.viewports.map((i) => [widthToStr(i), generateViewPort(i)]));
};
exports.createViewPorts = createViewPorts;


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createStorybookConfig = void 0;
const createStorybookConfig = ({ viteConfigPath, viteFinal }) => ({
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-jest',
        '@storybook/addon-coverage',
        '@storybook/addon-actions'
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {
            builder: {
                viteConfigPath
            }
        }
    },
    viteFinal
});
exports.createStorybookConfig = createStorybookConfig;


/***/ }),
/* 21 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GqlLocalAuthGuard = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(5);
const graphql_1 = __webpack_require__(6);
const passport_1 = __webpack_require__(21);
let GqlLocalAuthGuard = class GqlLocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
    async canActivate(context) {
        const ctxRequest = graphql_1.GqlExecutionContext.create(context).getContext().req;
        return Boolean(ctxRequest);
    }
};
exports.GqlLocalAuthGuard = GqlLocalAuthGuard;
exports.GqlLocalAuthGuard = GqlLocalAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], GqlLocalAuthGuard);


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const graphql_1 = __webpack_require__(6);
const passport_1 = __webpack_require__(21);
class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    getRequest(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
}
exports.JwtAuthGuard = JwtAuthGuard;


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationPipe = void 0;
var validation_pipe_1 = __webpack_require__(25);
Object.defineProperty(exports, "ValidationPipe", ({ enumerable: true, get: function () { return validation_pipe_1.ValidationPipe; } }));


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationPipe = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(5);
const common_2 = __webpack_require__(5);
const class_transformer_1 = __webpack_require__(26);
const class_validator_1 = __webpack_require__(8);
let ValidationPipe = class ValidationPipe {
    async transform(value, metadata) {
        const validationErrors = await (0, class_validator_1.validate)((0, class_transformer_1.plainToClass)(metadata.metatype, value));
        if (validationErrors.length > 0) {
            const messages = validationErrors.map((err) => {
                return `${err.property} - ${Object.values(err.constraints).join(', ')}`;
            });
            throw new common_1.BadRequestException(messages.join('. '));
        }
        return value;
    }
};
exports.ValidationPipe = ValidationPipe;
exports.ValidationPipe = ValidationPipe = tslib_1.__decorate([
    (0, common_2.Injectable)()
], ValidationPipe);


/***/ }),
/* 26 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports) => {


// AUTO GENERATED FILE BY @kalissaac/prisma-typegen
// DO NOT EDIT
Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(29), exports);
tslib_1.__exportStar(__webpack_require__(30), exports);


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 31 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.corsConfig = void 0;
const config_1 = __webpack_require__(14);
exports.corsConfig = {
    origin: config_1.clientUrl,
    methods: ['POST', 'PUT', 'DELETE', 'GET'],
    credentials: true
};


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createSwaggerDocs = void 0;
const config_1 = __webpack_require__(14);
const swagger_1 = __webpack_require__(7);
const swagger_2 = __webpack_require__(7);
const createSwaggerDocs = (app) => {
    const swagger = new swagger_1.DocumentBuilder()
        .setTitle(config_1.serverAppName)
        .setDescription('REST API documentation')
        .setVersion('1.0.0')
        .build();
    return swagger_2.SwaggerModule.createDocument(app, swagger);
};
exports.createSwaggerDocs = createSwaggerDocs;


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(2);
const path_1 = __webpack_require__(35);
const apollo_1 = __webpack_require__(36);
const common_1 = __webpack_require__(5);
const config_1 = __webpack_require__(37);
const graphql_1 = __webpack_require__(6);
const auth_1 = __webpack_require__(38);
const code_executor_api_1 = __webpack_require__(72);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            code_executor_api_1.CodeExecutorModule,
            auth_1.AuthModule,
            config_1.ConfigModule.forRoot(),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'apps/server/src/_schema.gql')
            })
        ],
        controllers: [],
        providers: []
    })
], AppModule);


/***/ }),
/* 35 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 36 */
/***/ ((module) => {

module.exports = require("@nestjs/apollo");

/***/ }),
/* 37 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
var auth_module_1 = __webpack_require__(39);
Object.defineProperty(exports, "AuthModule", ({ enumerable: true, get: function () { return auth_module_1.AuthModule; } }));


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__(2);
const config_1 = __webpack_require__(14);
const common_1 = __webpack_require__(5);
const jwt_1 = __webpack_require__(40);
const users_1 = __webpack_require__(41);
const auth_resolver_1 = __webpack_require__(61);
const auth_service_1 = __webpack_require__(62);
const jwt_strategy_1 = __webpack_require__(68);
const local_strategy_1 = __webpack_require__(70);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [auth_resolver_1.AuthResolver, jwt_strategy_1.JwtStrategy, local_strategy_1.LocalStrategy, auth_service_1.AuthService],
        imports: [
            users_1.UsersModule,
            jwt_1.JwtModule.register({
                secret: config_1.jwtSecret,
                signOptions: {
                    expiresIn: '24h'
                }
            })
        ],
        exports: []
    })
], AuthModule);


/***/ }),
/* 40 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersRepository = exports.UsersModule = void 0;
var users_module_1 = __webpack_require__(42);
Object.defineProperty(exports, "UsersModule", ({ enumerable: true, get: function () { return users_module_1.UsersModule; } }));
var users_repository_1 = __webpack_require__(60);
Object.defineProperty(exports, "UsersRepository", ({ enumerable: true, get: function () { return users_repository_1.UsersRepository; } }));


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const tslib_1 = __webpack_require__(2);
const services_1 = __webpack_require__(43);
const common_1 = __webpack_require__(5);
const users_repository_1 = __webpack_require__(60);
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [users_repository_1.UsersRepository],
        imports: [services_1.PrismaModule],
        exports: [users_repository_1.UsersRepository]
    })
], UsersModule);


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicesModule = exports.PrismaService = exports.PrismaModule = void 0;
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(44), exports);
var prisma_1 = __webpack_require__(55);
Object.defineProperty(exports, "PrismaModule", ({ enumerable: true, get: function () { return prisma_1.PrismaModule; } }));
Object.defineProperty(exports, "PrismaService", ({ enumerable: true, get: function () { return prisma_1.PrismaService; } }));
var services_module_1 = __webpack_require__(59);
Object.defineProperty(exports, "ServicesModule", ({ enumerable: true, get: function () { return services_module_1.ServicesModule; } }));


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExecutorLanguages = exports.ExecutorApiResponse = exports.isExecutorApiResponse = exports.FailedToFetchError = exports.ExecutorApiService = exports.ExecutorApiModule = exports.ExecuteCodeApiDTO = void 0;
var execute_code_api_dto_1 = __webpack_require__(45);
Object.defineProperty(exports, "ExecuteCodeApiDTO", ({ enumerable: true, get: function () { return execute_code_api_dto_1.ExecuteCodeApiDTO; } }));
var executor_api_module_1 = __webpack_require__(47);
Object.defineProperty(exports, "ExecutorApiModule", ({ enumerable: true, get: function () { return executor_api_module_1.ExecutorApiModule; } }));
var executor_api_service_1 = __webpack_require__(49);
Object.defineProperty(exports, "ExecutorApiService", ({ enumerable: true, get: function () { return executor_api_service_1.ExecutorApiService; } }));
var errors_1 = __webpack_require__(52);
Object.defineProperty(exports, "FailedToFetchError", ({ enumerable: true, get: function () { return errors_1.FailedToFetchError; } }));
var type_guards_1 = __webpack_require__(54);
Object.defineProperty(exports, "isExecutorApiResponse", ({ enumerable: true, get: function () { return type_guards_1.isExecutorApiResponse; } }));
var types_1 = __webpack_require__(46);
Object.defineProperty(exports, "ExecutorApiResponse", ({ enumerable: true, get: function () { return types_1.ExecutorApiResponse; } }));
Object.defineProperty(exports, "ExecutorLanguages", ({ enumerable: true, get: function () { return types_1.ExecutorLanguages; } }));


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExecuteCodeApiDTO = void 0;
const tslib_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(8);
const class_validator_2 = __webpack_require__(8);
const class_validator_3 = __webpack_require__(8);
const types_1 = __webpack_require__(46);
const types_2 = __webpack_require__(46);
class ExecuteCodeApiDTO {
}
exports.ExecuteCodeApiDTO = ExecuteCodeApiDTO;
tslib_1.__decorate([
    (0, class_validator_3.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'print("hello world")', description: 'Your code' }),
    tslib_1.__metadata("design:type", String)
], ExecuteCodeApiDTO.prototype, "code", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsIn)(Object.keys(types_1.ExecutorLanguages)),
    (0, swagger_1.ApiProperty)({ example: 'python', description: 'Code language' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof types_2.ExecutorLanguagesKeys !== "undefined" && types_2.ExecutorLanguagesKeys) === "function" ? _a : Object)
], ExecuteCodeApiDTO.prototype, "language", void 0);
tslib_1.__decorate([
    (0, class_validator_3.IsString)(),
    (0, class_validator_2.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], ExecuteCodeApiDTO.prototype, "input", void 0);


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExecutorLanguages = void 0;
exports.ExecutorLanguages = {
    java: 'java',
    python: 'py',
    cpp: 'cpp',
    c: 'c',
    go: 'go',
    cs: 'cs',
    javascript: 'js'
};


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExecutorApiModule = void 0;
const tslib_1 = __webpack_require__(2);
const axios_1 = __webpack_require__(48);
const common_1 = __webpack_require__(5);
const executor_api_service_1 = __webpack_require__(49);
let ExecutorApiModule = class ExecutorApiModule {
};
exports.ExecutorApiModule = ExecutorApiModule;
exports.ExecutorApiModule = ExecutorApiModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        providers: [executor_api_service_1.ExecutorApiService],
        exports: [executor_api_service_1.ExecutorApiService]
    })
], ExecutorApiModule);


/***/ }),
/* 48 */
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExecutorApiService = void 0;
const tslib_1 = __webpack_require__(2);
const config_1 = __webpack_require__(14);
const axios_1 = __webpack_require__(48);
const common_1 = __webpack_require__(5);
const common_2 = __webpack_require__(5);
const axios_2 = tslib_1.__importDefault(__webpack_require__(50));
const qs_stringify_1 = tslib_1.__importDefault(__webpack_require__(51));
const errors_1 = __webpack_require__(52);
const transform_language_1 = __webpack_require__(53);
let ExecutorApiService = class ExecutorApiService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async fetchCodeToExecute(args) {
        common_2.Logger.log('Request to execute custom code...');
        try {
            const response = await this.httpService
                .post(config_1.compilerApiUrl, (0, qs_stringify_1.default)((0, transform_language_1.transformLanguage)(args)), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .toPromise();
            return response.data;
        }
        catch (error) {
            if (axios_2.default.isAxiosError(error)) {
                common_2.Logger.warn((0, errors_1.FailedToFetchError)(error.status));
            }
        }
        return null;
    }
};
exports.ExecutorApiService = ExecutorApiService;
exports.ExecutorApiService = ExecutorApiService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object])
], ExecutorApiService);


/***/ }),
/* 50 */
/***/ ((module) => {

module.exports = require("axios");

/***/ }),
/* 51 */
/***/ ((module) => {

module.exports = require("qs-stringify");

/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FailedToFetchError = void 0;
const FailedToFetchError = (status = 400) => {
    return `Failed to get response from api.codex.jaagrav.in (${status}).`;
};
exports.FailedToFetchError = FailedToFetchError;


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.transformLanguage = void 0;
const types_1 = __webpack_require__(46);
const transformLanguage = (args) => {
    return {
        ...args,
        language: types_1.ExecutorLanguages[args.language]
    };
};
exports.transformLanguage = transformLanguage;


/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isExecutorApiResponse = void 0;
const isExecutorApiResponse = (res) => {
    if (typeof res !== 'object' || res === null) {
        return false;
    }
    if ('timeStamp' in res &&
        typeof res.timeStamp === 'number' &&
        'output' in res &&
        typeof res.output === 'string' &&
        'language' in res &&
        typeof res.language === 'string') {
        return true;
    }
    return false;
};
exports.isExecutorApiResponse = isExecutorApiResponse;


/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = exports.PrismaModule = void 0;
var prisma_module_1 = __webpack_require__(56);
Object.defineProperty(exports, "PrismaModule", ({ enumerable: true, get: function () { return prisma_module_1.PrismaModule; } }));
var prisma_service_1 = __webpack_require__(57);
Object.defineProperty(exports, "PrismaService", ({ enumerable: true, get: function () { return prisma_service_1.PrismaService; } }));


/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(5);
const prisma_service_1 = __webpack_require__(57);
let PrismaModule = class PrismaModule {
};
exports.PrismaModule = PrismaModule;
exports.PrismaModule = PrismaModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaService],
        exports: [prisma_service_1.PrismaService]
    })
], PrismaModule);


/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(5);
const client_1 = __webpack_require__(58);
let PrismaService = class PrismaService extends client_1.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
    async enableShutdownHooks(app) {
        this.$on('beforeExit', async () => {
            await app.close();
        });
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], PrismaService);


/***/ }),
/* 58 */
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicesModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(5);
const executor_api_1 = __webpack_require__(44);
let ServicesModule = class ServicesModule {
};
exports.ServicesModule = ServicesModule;
exports.ServicesModule = ServicesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        imports: [executor_api_1.ExecutorApiModule]
    })
], ServicesModule);


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersRepository = void 0;
const tslib_1 = __webpack_require__(2);
const services_1 = __webpack_require__(43);
const common_1 = __webpack_require__(5);
let UsersRepository = class UsersRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getUserByUsername(username) {
        return this.prisma.user.findUnique({
            where: {
                username
            }
        });
    }
    createUser(user) {
        return this.prisma.user.create({
            data: user
        });
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.PrismaService !== "undefined" && services_1.PrismaService) === "function" ? _a : Object])
], UsersRepository);


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthResolver = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(1);
const common_2 = __webpack_require__(1);
const common_3 = __webpack_require__(1);
const common_4 = __webpack_require__(1);
const common_5 = __webpack_require__(1);
const config_1 = __webpack_require__(14);
const common_6 = __webpack_require__(5);
const graphql_1 = __webpack_require__(6);
const graphql_2 = __webpack_require__(6);
const graphql_3 = __webpack_require__(6);
const graphql_4 = __webpack_require__(6);
const auth_service_1 = __webpack_require__(62);
const sign_in_input_1 = __webpack_require__(64);
const responses_1 = __webpack_require__(65);
const responses_2 = __webpack_require__(65);
let AuthResolver = class AuthResolver {
    constructor(authService) {
        this.authService = authService;
    }
    async signIn(payload, user) {
        return this.authService.generateToken(user.username);
    }
    async getProfile(user) {
        return user;
    }
};
exports.AuthResolver = AuthResolver;
tslib_1.__decorate([
    (0, graphql_2.Mutation)(() => responses_1.AccessToken),
    (0, common_6.UseGuards)(common_1.GqlAuthGuard, common_2.GqlLocalAuthGuard),
    tslib_1.__param(0, (0, graphql_1.Args)(config_1.graphqlArg)),
    tslib_1.__param(1, (0, common_5.WithUser)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof sign_in_input_1.SignIn !== "undefined" && sign_in_input_1.SignIn) === "function" ? _b : Object, typeof (_c = typeof common_4.User !== "undefined" && common_4.User) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], AuthResolver.prototype, "signIn", null);
tslib_1.__decorate([
    (0, graphql_3.Query)(() => responses_2.UserResponse),
    (0, common_6.UseGuards)(common_3.JwtAuthGuard),
    tslib_1.__param(0, (0, common_5.WithUser)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], AuthResolver.prototype, "getProfile", null);
exports.AuthResolver = AuthResolver = tslib_1.__decorate([
    (0, graphql_4.Resolver)(() => responses_2.UserResponse),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthResolver);


/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(5);
const jwt_1 = __webpack_require__(40);
const bcrypt = tslib_1.__importStar(__webpack_require__(63));
const users_1 = __webpack_require__(41);
let AuthService = class AuthService {
    constructor(jwtService, usersService) {
        this.jwtService = jwtService;
        this.usersService = usersService;
    }
    async validate(payload) {
        const user = await this.usersService.getUserByUsername(payload.username);
        if (!user) {
            return this.registerUser(payload);
        }
        const isPasswordEquals = await bcrypt.compare(payload.password, user.password);
        if (!isPasswordEquals) {
            return null;
        }
        return user;
    }
    async registerUser(user) {
        const hashPassword = await bcrypt.hash(user.password, 5);
        return this.usersService.createUser({
            ...user,
            password: hashPassword
        });
    }
    async generateToken(username) {
        const accessToken = this.jwtService.sign({
            username
        });
        return { accessToken };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof users_1.UsersRepository !== "undefined" && users_1.UsersRepository) === "function" ? _b : Object])
], AuthService);


/***/ }),
/* 63 */
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignIn = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(1);
const graphql_1 = __webpack_require__(6);
let SignIn = class SignIn {
};
exports.SignIn = SignIn;
tslib_1.__decorate([
    (0, common_1.StringField)({ example: 'user123' }),
    tslib_1.__metadata("design:type", String)
], SignIn.prototype, "username", void 0);
tslib_1.__decorate([
    (0, common_1.StringField)({ example: 'password456' }),
    tslib_1.__metadata("design:type", String)
], SignIn.prototype, "password", void 0);
exports.SignIn = SignIn = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], SignIn);


/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserResponse = exports.AccessToken = void 0;
var token_response_1 = __webpack_require__(66);
Object.defineProperty(exports, "AccessToken", ({ enumerable: true, get: function () { return token_response_1.AccessToken; } }));
var user_response_1 = __webpack_require__(67);
Object.defineProperty(exports, "UserResponse", ({ enumerable: true, get: function () { return user_response_1.UserResponse; } }));


/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccessToken = void 0;
const tslib_1 = __webpack_require__(2);
const graphql_1 = __webpack_require__(6);
const graphql_2 = __webpack_require__(6);
const swagger_1 = __webpack_require__(7);
let AccessToken = class AccessToken {
};
exports.AccessToken = AccessToken;
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)({ description: 'Authorization token (jwt)' }),
    tslib_1.__metadata("design:type", String)
], AccessToken.prototype, "accessToken", void 0);
exports.AccessToken = AccessToken = tslib_1.__decorate([
    (0, graphql_2.ObjectType)()
], AccessToken);


/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserResponse = void 0;
const tslib_1 = __webpack_require__(2);
const graphql_1 = __webpack_require__(6);
const graphql_2 = __webpack_require__(6);
const swagger_1 = __webpack_require__(7);
let UserResponse = class UserResponse {
};
exports.UserResponse = UserResponse;
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)({ description: 'Username (used as userId)' }),
    tslib_1.__metadata("design:type", String)
], UserResponse.prototype, "username", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, swagger_1.ApiProperty)({ description: 'User avatar location' }),
    tslib_1.__metadata("design:type", String)
], UserResponse.prototype, "avatarUrl", void 0);
exports.UserResponse = UserResponse = tslib_1.__decorate([
    (0, graphql_2.ObjectType)()
], UserResponse);


/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const tslib_1 = __webpack_require__(2);
const config_1 = __webpack_require__(14);
const common_1 = __webpack_require__(5);
const passport_1 = __webpack_require__(21);
const passport_jwt_1 = __webpack_require__(69);
const passport_jwt_2 = __webpack_require__(69);
const users_1 = __webpack_require__(41);
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_2.Strategy) {
    constructor(usersService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config_1.jwtSecret
        });
        this.usersService = usersService;
    }
    validate(payload) {
        return this.usersService.getUserByUsername(payload.username);
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_1.UsersRepository !== "undefined" && users_1.UsersRepository) === "function" ? _a : Object])
], JwtStrategy);


/***/ }),
/* 69 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(5);
const common_2 = __webpack_require__(5);
const common_3 = __webpack_require__(5);
const passport_1 = __webpack_require__(21);
const passport_local_1 = __webpack_require__(71);
const auth_service_1 = __webpack_require__(62);
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(authService) {
        super({ usernameField: 'username', passwordField: 'password' });
        this.authService = authService;
    }
    async validate(username, password) {
        try {
            const user = await this.authService.validate({
                username,
                password
            });
            if (!user) {
                throw new common_3.UnauthorizedException();
            }
            return user;
        }
        catch (error) {
            throw new common_2.InternalServerErrorException(error.message);
        }
    }
};
exports.LocalStrategy = LocalStrategy;
exports.LocalStrategy = LocalStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);


/***/ }),
/* 71 */
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CodeExecutorModule = void 0;
var code_executor_module_1 = __webpack_require__(73);
Object.defineProperty(exports, "CodeExecutorModule", ({ enumerable: true, get: function () { return code_executor_module_1.CodeExecutorModule; } }));


/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CodeExecutorModule = void 0;
const tslib_1 = __webpack_require__(2);
const services_1 = __webpack_require__(43);
const common_1 = __webpack_require__(5);
const code_executor_controller_1 = __webpack_require__(74);
let CodeExecutorModule = class CodeExecutorModule {
};
exports.CodeExecutorModule = CodeExecutorModule;
exports.CodeExecutorModule = CodeExecutorModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [services_1.ExecutorApiModule],
        controllers: [code_executor_controller_1.CodeExecutorController],
        providers: []
    })
], CodeExecutorModule);


/***/ }),
/* 74 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CodeExecutorController = void 0;
const tslib_1 = __webpack_require__(2);
const services_1 = __webpack_require__(43);
const services_2 = __webpack_require__(43);
const services_3 = __webpack_require__(43);
const services_4 = __webpack_require__(43);
const config_1 = __webpack_require__(14);
const common_1 = __webpack_require__(5);
const common_2 = __webpack_require__(5);
const common_3 = __webpack_require__(5);
const common_4 = __webpack_require__(5);
const swagger_1 = __webpack_require__(7);
const swagger_2 = __webpack_require__(7);
const swagger_3 = __webpack_require__(7);
let CodeExecutorController = class CodeExecutorController {
    constructor(executorService) {
        this.executorService = executorService;
    }
    async executeCode(args) {
        const response = await this.executorService.fetchCodeToExecute(args);
        if (!(0, services_4.isExecutorApiResponse)(response)) {
            throw new common_1.BadRequestException((0, services_3.FailedToFetchError)());
        }
        return response;
    }
};
exports.CodeExecutorController = CodeExecutorController;
tslib_1.__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Execute your code' }),
    (0, swagger_2.ApiResponse)({ status: 200 }),
    (0, common_4.Post)(),
    tslib_1.__param(0, (0, common_2.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof services_1.ExecuteCodeApiDTO !== "undefined" && services_1.ExecuteCodeApiDTO) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], CodeExecutorController.prototype, "executeCode", null);
exports.CodeExecutorController = CodeExecutorController = tslib_1.__decorate([
    (0, swagger_3.ApiTags)('Code executor API'),
    (0, common_3.Controller)(config_1.EndPoints.CODE_EXECUTOR_API),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_2.ExecutorApiService !== "undefined" && services_2.ExecutorApiService) === "function" ? _a : Object])
], CodeExecutorController);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const common_2 = __webpack_require__(1);
const config_1 = __webpack_require__(14);
const config_2 = __webpack_require__(14);
const config_3 = __webpack_require__(14);
const common_3 = __webpack_require__(5);
const core_1 = __webpack_require__(31);
const swagger_1 = __webpack_require__(7);
const cors_1 = __webpack_require__(32);
const swagger_2 = __webpack_require__(33);
const app_module_1 = __webpack_require__(34);
const bootstrap = async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix(config_3.serverPrefix);
    app.useGlobalFilters(new common_1.HttpExceptionFilter());
    app.useGlobalPipes(new common_2.ValidationPipe());
    app.enableCors(cors_1.corsConfig);
    swagger_1.SwaggerModule.setup(config_1.serverDocsPrefix, app, (0, swagger_2.createSwaggerDocs)(app));
    common_3.Logger.log(`🚀 Server is running on port ${config_2.serverPort}`);
    await app.listen(config_2.serverPort);
};
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map