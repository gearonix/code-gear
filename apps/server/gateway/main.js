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
tslib_1.__exportStar(__webpack_require__(17), exports);
tslib_1.__exportStar(__webpack_require__(29), exports);
tslib_1.__exportStar(__webpack_require__(32), exports);
tslib_1.__exportStar(__webpack_require__(33), exports);
tslib_1.__exportStar(__webpack_require__(60), exports);


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
exports.RpcExceptionFilter = exports.HttpExceptionFilter = void 0;
var http_exception_filter_1 = __webpack_require__(11);
Object.defineProperty(exports, "HttpExceptionFilter", ({ enumerable: true, get: function () { return http_exception_filter_1.HttpExceptionFilter; } }));
var rpc_exception_filter_1 = __webpack_require__(12);
Object.defineProperty(exports, "RpcExceptionFilter", ({ enumerable: true, get: function () { return rpc_exception_filter_1.RpcExceptionFilter; } }));


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
exports.RpcExceptionFilter = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(5);
const rxjs_1 = __webpack_require__(13);
const guards_1 = __webpack_require__(14);
let RpcExceptionFilter = class RpcExceptionFilter {
    catch(exception, host) {
        const response = host.switchToHttp().getResponse();
        if ((0, guards_1.isCustomRpcException)(exception)) {
            const errorToSend = {
                statusCode: exception.code,
                message: exception.message
            };
            response.status(exception.code).json(errorToSend);
            return (0, rxjs_1.throwError)(() => errorToSend);
        }
        response.json(exception);
        return (0, rxjs_1.throwError)(() => exception);
    }
};
exports.RpcExceptionFilter = RpcExceptionFilter;
exports.RpcExceptionFilter = RpcExceptionFilter = tslib_1.__decorate([
    (0, common_1.Catch)()
], RpcExceptionFilter);


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(15), exports);


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isCustomRpcException = void 0;
const types_1 = __webpack_require__(16);
const isCustomRpcException = (rpcException) => {
    return ((0, types_1.isObject)(rpcException) &&
        'code' in rpcException &&
        'message' in rpcException);
};
exports.isCustomRpcException = isCustomRpcException;


/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("@grnx-utils/types");

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = exports.GqlLocalAuthGuard = exports.GqlAuthGuard = void 0;
var gql_auth_guard_1 = __webpack_require__(18);
Object.defineProperty(exports, "GqlAuthGuard", ({ enumerable: true, get: function () { return gql_auth_guard_1.GqlAuthGuard; } }));
var gql_local_auth_guard_1 = __webpack_require__(27);
Object.defineProperty(exports, "GqlLocalAuthGuard", ({ enumerable: true, get: function () { return gql_local_auth_guard_1.GqlLocalAuthGuard; } }));
var jwt_auth_guard_1 = __webpack_require__(28);
Object.defineProperty(exports, "JwtAuthGuard", ({ enumerable: true, get: function () { return jwt_auth_guard_1.JwtAuthGuard; } }));


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GqlAuthGuard = void 0;
const config_1 = __webpack_require__(19);
const graphql_1 = __webpack_require__(6);
const passport_1 = __webpack_require__(26);
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
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createStorybookConfig = exports.createPreviewDefaults = void 0;
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(20), exports);
tslib_1.__exportStar(__webpack_require__(21), exports);
var storybook_1 = __webpack_require__(22);
Object.defineProperty(exports, "createPreviewDefaults", ({ enumerable: true, get: function () { return storybook_1.createPreviewDefaults; } }));
Object.defineProperty(exports, "createStorybookConfig", ({ enumerable: true, get: function () { return storybook_1.createStorybookConfig; } }));


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.appName = exports.clientUrl = void 0;
exports.clientUrl = process.env.CLIENT_URL ?? 'http://localhost:3000';
exports.appName = 'code_gear';


/***/ }),
/* 21 */
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
exports.jwtSecret = process.env.JWT_SECRET || 'I_WILL_REMOVE_THIS_AND_REWRITE_TO_CONFIG_SERVICE';


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createStorybookConfig = exports.createPreviewDefaults = void 0;
var create_preview_defaults_1 = __webpack_require__(23);
Object.defineProperty(exports, "createPreviewDefaults", ({ enumerable: true, get: function () { return create_preview_defaults_1.createPreviewDefaults; } }));
var create_storybook_config_1 = __webpack_require__(25);
Object.defineProperty(exports, "createStorybookConfig", ({ enumerable: true, get: function () { return create_storybook_config_1.createStorybookConfig; } }));


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createPreviewDefaults = void 0;
const create_viewports_1 = __webpack_require__(24);
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
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GqlLocalAuthGuard = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(5);
const graphql_1 = __webpack_require__(6);
const passport_1 = __webpack_require__(26);
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
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const graphql_1 = __webpack_require__(6);
const passport_1 = __webpack_require__(26);
class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    getRequest(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
}
exports.JwtAuthGuard = JwtAuthGuard;


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationPipe = void 0;
var validation_pipe_1 = __webpack_require__(30);
Object.defineProperty(exports, "ValidationPipe", ({ enumerable: true, get: function () { return validation_pipe_1.ValidationPipe; } }));


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationPipe = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(5);
const common_2 = __webpack_require__(5);
const class_transformer_1 = __webpack_require__(31);
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
/* 31 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports) => {


// AUTO GENERATED FILE BY @kalissaac/prisma-typegen
// DO NOT EDIT
Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(34), exports);
tslib_1.__exportStar(__webpack_require__(36), exports);
tslib_1.__exportStar(__webpack_require__(51), exports);
tslib_1.__exportStar(__webpack_require__(55), exports);


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KafkaService = exports.KafkaModule = void 0;
var kafka_module_1 = __webpack_require__(35);
Object.defineProperty(exports, "KafkaModule", ({ enumerable: true, get: function () { return kafka_module_1.KafkaModule; } }));
var kafka_service_1 = __webpack_require__(50);
Object.defineProperty(exports, "KafkaService", ({ enumerable: true, get: function () { return kafka_service_1.KafkaService; } }));


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var KafkaModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KafkaModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(5);
const env_1 = __webpack_require__(36);
const microservices_1 = __webpack_require__(49);
const kafka_service_1 = __webpack_require__(50);
let KafkaModule = KafkaModule_1 = class KafkaModule {
    static forRoot(service) {
        const providers = [
            {
                provide: service,
                useFactory: (kafkaService) => {
                    return microservices_1.ClientProxyFactory.create(kafkaService.getKafkaOptions(service));
                },
                inject: [kafka_service_1.KafkaService]
            }
        ];
        return {
            module: KafkaModule_1,
            providers,
            exports: providers
        };
    }
};
exports.KafkaModule = KafkaModule;
exports.KafkaModule = KafkaModule = KafkaModule_1 = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [env_1.EnvModule],
        providers: [kafka_service_1.KafkaService],
        exports: [kafka_service_1.KafkaService]
    })
], KafkaModule);


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseConfig = exports.KafkaConfig = exports.MiscConfig = exports.ServerConfig = exports.EnvModule = void 0;
var env_module_1 = __webpack_require__(37);
Object.defineProperty(exports, "EnvModule", ({ enumerable: true, get: function () { return env_module_1.EnvModule; } }));
var types_1 = __webpack_require__(47);
Object.defineProperty(exports, "ServerConfig", ({ enumerable: true, get: function () { return types_1.ServerConfig; } }));
Object.defineProperty(exports, "MiscConfig", ({ enumerable: true, get: function () { return types_1.MiscConfig; } }));
Object.defineProperty(exports, "KafkaConfig", ({ enumerable: true, get: function () { return types_1.KafkaConfig; } }));
Object.defineProperty(exports, "DatabaseConfig", ({ enumerable: true, get: function () { return types_1.DatabaseConfig; } }));


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnvModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(5);
const config_1 = __webpack_require__(38);
const conf_1 = __webpack_require__(39);
const conf_2 = __webpack_require__(39);
const conf_3 = __webpack_require__(39);
const conf_4 = __webpack_require__(39);
let EnvModule = class EnvModule {
};
exports.EnvModule = EnvModule;
exports.EnvModule = EnvModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [conf_4.server, conf_3.misc, conf_1.database, conf_2.kafka],
                isGlobal: true
            })
        ]
    })
], EnvModule);


/***/ }),
/* 38 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.kafka = exports.server = exports.database = exports.misc = void 0;
var misc_config_1 = __webpack_require__(40);
Object.defineProperty(exports, "misc", ({ enumerable: true, get: function () { return misc_config_1.misc; } }));
var database_config_1 = __webpack_require__(44);
Object.defineProperty(exports, "database", ({ enumerable: true, get: function () { return database_config_1.database; } }));
var server_config_1 = __webpack_require__(45);
Object.defineProperty(exports, "server", ({ enumerable: true, get: function () { return server_config_1.server; } }));
var kafka_config_1 = __webpack_require__(46);
Object.defineProperty(exports, "kafka", ({ enumerable: true, get: function () { return kafka_config_1.kafka; } }));


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.misc = void 0;
const tslib_1 = __webpack_require__(2);
const validators_1 = __webpack_require__(41);
const config_1 = __webpack_require__(38);
const env_decorator_1 = __webpack_require__(43);
class MiscValidator {
}
tslib_1.__decorate([
    (0, env_decorator_1.Env)(),
    tslib_1.__metadata("design:type", String)
], MiscValidator.prototype, "CODE_COMPILER_API_URL", void 0);
tslib_1.__decorate([
    (0, env_decorator_1.Env)(),
    tslib_1.__metadata("design:type", String)
], MiscValidator.prototype, "JWT_SECRET", void 0);
tslib_1.__decorate([
    (0, env_decorator_1.Env)(),
    tslib_1.__metadata("design:type", String)
], MiscValidator.prototype, "CLIENT_URL", void 0);
exports.misc = (0, config_1.registerAs)('misc', () => {
    const conf = (0, validators_1.validateConfig)(process.env, MiscValidator);
    return {
        clientUrl: conf.CLIENT_URL,
        jwtSecret: conf.JWT_SECRET,
        codeExecutorUrl: conf.CODE_COMPILER_API_URL
    };
});


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateConfig = void 0;
var env_validator_1 = __webpack_require__(42);
Object.defineProperty(exports, "validateConfig", ({ enumerable: true, get: function () { return env_validator_1.validateConfig; } }));


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateConfig = void 0;
const class_transformer_1 = __webpack_require__(31);
const class_validator_1 = __webpack_require__(8);
const validateConfig = (config, envVariablesClass) => {
    const validatedConfig = (0, class_transformer_1.plainToClass)(envVariablesClass, config, {
        enableImplicitConversion: true
    });
    const errors = (0, class_validator_1.validateSync)(validatedConfig, {
        skipMissingProperties: false
    });
    if (errors.length > 0) {
        throw new Error(errors.toString());
    }
    return validatedConfig;
};
exports.validateConfig = validateConfig;


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Env = void 0;
const common_1 = __webpack_require__(5);
const class_validator_1 = __webpack_require__(8);
const class_validator_2 = __webpack_require__(8);
const Env = () => {
    return (0, common_1.applyDecorators)((0, class_validator_2.IsString)(), (0, class_validator_1.IsNotEmpty)());
};
exports.Env = Env;


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.database = void 0;
const tslib_1 = __webpack_require__(2);
const config_1 = __webpack_require__(38);
const env_decorator_1 = __webpack_require__(43);
const validators_1 = __webpack_require__(41);
class DatabaseValidator {
}
tslib_1.__decorate([
    (0, env_decorator_1.Env)(),
    tslib_1.__metadata("design:type", String)
], DatabaseValidator.prototype, "DATABASE_URL", void 0);
exports.database = (0, config_1.registerAs)('database', () => {
    const conf = (0, validators_1.validateConfig)(process.env, DatabaseValidator);
    return {
        url: conf.DATABASE_URL
    };
});


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.server = void 0;
const tslib_1 = __webpack_require__(2);
const class_validator_1 = __webpack_require__(8);
const class_validator_2 = __webpack_require__(8);
const class_validator_3 = __webpack_require__(8);
const validators_1 = __webpack_require__(41);
const config_1 = __webpack_require__(38);
const env_decorator_1 = __webpack_require__(43);
class ServerValidator {
}
tslib_1.__decorate([
    (0, class_validator_3.IsNumberString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], ServerValidator.prototype, "SERVER_PORT", void 0);
tslib_1.__decorate([
    (0, class_validator_2.IsString)(),
    tslib_1.__metadata("design:type", String)
], ServerValidator.prototype, "SERVER_PREFIX", void 0);
tslib_1.__decorate([
    (0, env_decorator_1.Env)(),
    tslib_1.__metadata("design:type", String)
], ServerValidator.prototype, "SERVER_URL", void 0);
exports.server = (0, config_1.registerAs)('server', () => {
    const conf = (0, validators_1.validateConfig)(process.env, ServerValidator);
    return {
        prefix: conf.SERVER_PREFIX,
        port: Number(conf.SERVER_PORT),
        url: conf.SERVER_URL
    };
});


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.kafka = void 0;
const tslib_1 = __webpack_require__(2);
const config_1 = __webpack_require__(38);
const env_decorator_1 = __webpack_require__(43);
const validators_1 = __webpack_require__(41);
const class_validator_1 = __webpack_require__(8);
const class_validator_2 = __webpack_require__(8);
class KafkaValidator {
}
tslib_1.__decorate([
    (0, env_decorator_1.Env)(),
    tslib_1.__metadata("design:type", String)
], KafkaValidator.prototype, "SERVER_KAFKA_BROKERS", void 0);
tslib_1.__decorate([
    (0, env_decorator_1.Env)(),
    tslib_1.__metadata("design:type", String)
], KafkaValidator.prototype, "SERVER_KAFKA_MICROSERVICE_CODE_EXECUTOR", void 0);
tslib_1.__decorate([
    (0, class_validator_2.IsNumberString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], KafkaValidator.prototype, "SERVER_KAFKA_SESSION_TIMEOUT", void 0);
tslib_1.__decorate([
    (0, class_validator_2.IsNumberString)(),
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", String)
], KafkaValidator.prototype, "SERVER_KAFKA_HEARTBEAT_INTERVAL", void 0);
exports.kafka = (0, config_1.registerAs)('kafka', () => {
    const conf = (0, validators_1.validateConfig)(process.env, KafkaValidator);
    return {
        brokers: conf.SERVER_KAFKA_BROKERS.split(','),
        microservices: {
            codeExecutor: conf.SERVER_KAFKA_MICROSERVICE_CODE_EXECUTOR
        },
        sessionTimeout: Number(conf.SERVER_KAFKA_SESSION_TIMEOUT),
        heartbeatInterval: Number(conf.SERVER_KAFKA_HEARTBEAT_INTERVAL)
    };
});


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseConfig = exports.KafkaConfig = exports.MiscConfig = exports.ServerConfig = void 0;
var enviroment_interfaces_1 = __webpack_require__(48);
Object.defineProperty(exports, "ServerConfig", ({ enumerable: true, get: function () { return enviroment_interfaces_1.ServerConfig; } }));
Object.defineProperty(exports, "MiscConfig", ({ enumerable: true, get: function () { return enviroment_interfaces_1.MiscConfig; } }));
Object.defineProperty(exports, "KafkaConfig", ({ enumerable: true, get: function () { return enviroment_interfaces_1.KafkaConfig; } }));
Object.defineProperty(exports, "DatabaseConfig", ({ enumerable: true, get: function () { return enviroment_interfaces_1.DatabaseConfig; } }));


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 49 */
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KafkaService = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(5);
const config_1 = __webpack_require__(38);
const microservices_1 = __webpack_require__(49);
let KafkaService = class KafkaService {
    constructor(configService) {
        this.configService = configService;
    }
    getKafkaOptions(service) {
        const { brokers, sessionTimeout, heartbeatInterval } = this.configService.getOrThrow('kafka');
        const microserviceName = this.configService.getOrThrow(`kafka.microservices.${service}`);
        return {
            transport: microservices_1.Transport.KAFKA,
            options: {
                client: {
                    clientId: microserviceName,
                    brokers
                },
                consumer: {
                    groupId: microserviceName,
                    sessionTimeout,
                    heartbeatInterval
                }
            }
        };
    }
};
exports.KafkaService = KafkaService;
exports.KafkaService = KafkaService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], KafkaService);


/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseService = exports.DatabaseModule = void 0;
var database_module_1 = __webpack_require__(52);
Object.defineProperty(exports, "DatabaseModule", ({ enumerable: true, get: function () { return database_module_1.DatabaseModule; } }));
var database_service_1 = __webpack_require__(53);
Object.defineProperty(exports, "DatabaseService", ({ enumerable: true, get: function () { return database_service_1.DatabaseService; } }));


/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(5);
const database_service_1 = __webpack_require__(53);
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [database_service_1.DatabaseService],
        exports: [database_service_1.DatabaseService]
    })
], DatabaseModule);


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseService = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(5);
const client_1 = __webpack_require__(54);
let DatabaseService = class DatabaseService extends client_1.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
    async enableShutdownHooks(app) {
        this.$on('beforeExit', async () => {
            await app.close();
        });
    }
};
exports.DatabaseService = DatabaseService;
exports.DatabaseService = DatabaseService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], DatabaseService);


/***/ }),
/* 54 */
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListenerService = exports.ListenerModule = void 0;
var listener_module_1 = __webpack_require__(56);
Object.defineProperty(exports, "ListenerModule", ({ enumerable: true, get: function () { return listener_module_1.ListenerModule; } }));
var listener_service_1 = __webpack_require__(57);
Object.defineProperty(exports, "ListenerService", ({ enumerable: true, get: function () { return listener_service_1.ListenerService; } }));


/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var ListenerModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListenerModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(5);
const config_1 = __webpack_require__(38);
const listener_service_1 = __webpack_require__(57);
const listener_consts_1 = __webpack_require__(59);
const env_1 = __webpack_require__(36);
let ListenerModule = ListenerModule_1 = class ListenerModule {
    static forRoot({ isMicroservice }) {
        const providers = [
            listener_service_1.ListenerService,
            {
                provide: 'ListenerServiceConfig',
                useFactory: (configService) => {
                    const applicationPort = configService.getOrThrow('server.port');
                    const port = isMicroservice ? listener_consts_1.NESTJS_FREE_PORT : applicationPort;
                    return {
                        isMicroservice,
                        port
                    };
                },
                inject: [config_1.ConfigService]
            }
        ];
        return {
            module: ListenerModule_1,
            providers,
            exports: providers
        };
    }
};
exports.ListenerModule = ListenerModule;
exports.ListenerModule = ListenerModule = ListenerModule_1 = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [env_1.EnvModule],
        providers: [listener_service_1.ListenerService],
        exports: [listener_service_1.ListenerService]
    })
], ListenerModule);


/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListenerService = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(5);
const common_2 = __webpack_require__(5);
const listener_interfaces_1 = __webpack_require__(58);
let ListenerService = class ListenerService {
    constructor(config) {
        this.config = config;
        this.isMicroservice = config.isMicroservice;
        this.port = config.port;
    }
    getListenerCallback() {
        return () => {
            console.log('Server is running on port', this.port);
        };
    }
    get PORT() {
        return this.port;
    }
};
exports.ListenerService = ListenerService;
exports.ListenerService = ListenerService = tslib_1.__decorate([
    (0, common_2.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)('ListenerServiceConfig')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof listener_interfaces_1.ListenerConfig !== "undefined" && listener_interfaces_1.ListenerConfig) === "function" ? _a : Object])
], ListenerService);


/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NESTJS_FREE_PORT = void 0;
exports.NESTJS_FREE_PORT = 0;


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Microservice = void 0;
var microservices_1 = __webpack_require__(61);
Object.defineProperty(exports, "Microservice", ({ enumerable: true, get: function () { return microservices_1.Microservice; } }));


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Microservice = void 0;
var Microservice;
(function (Microservice) {
    Microservice["CODE_EXECUTOR"] = "codeExecutor";
})(Microservice || (exports.Microservice = Microservice = {}));


/***/ }),
/* 62 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.corsConfig = void 0;
const config_1 = __webpack_require__(19);
exports.corsConfig = {
    origin: config_1.clientUrl,
    methods: ['POST', 'PUT', 'DELETE', 'GET'],
    credentials: true
};


/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createSwaggerDocs = void 0;
const config_1 = __webpack_require__(19);
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
/* 65 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(2);
const path_1 = __webpack_require__(66);
const apollo_1 = __webpack_require__(67);
const common_1 = __webpack_require__(5);
const graphql_1 = __webpack_require__(6);
const auth_1 = __webpack_require__(68);
const code_executor_api_1 = __webpack_require__(85);
const common_2 = __webpack_require__(1);
const common_3 = __webpack_require__(1);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            code_executor_api_1.CodeExecutorModule,
            common_2.EnvModule,
            auth_1.AuthModule,
            common_3.ListenerModule.forRoot({
                isMicroservice: false
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'apps/server/gateway/src/_schema.gql')
            })
        ],
        controllers: [],
        providers: []
    })
], AppModule);


/***/ }),
/* 66 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 67 */
/***/ ((module) => {

module.exports = require("@nestjs/apollo");

/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
var auth_module_1 = __webpack_require__(69);
Object.defineProperty(exports, "AuthModule", ({ enumerable: true, get: function () { return auth_module_1.AuthModule; } }));


/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__(2);
const config_1 = __webpack_require__(19);
const common_1 = __webpack_require__(5);
const jwt_1 = __webpack_require__(70);
const users_1 = __webpack_require__(71);
const auth_resolver_1 = __webpack_require__(74);
const auth_service_1 = __webpack_require__(75);
const jwt_strategy_1 = __webpack_require__(81);
const local_strategy_1 = __webpack_require__(83);
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
/* 70 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 71 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersRepository = exports.UsersModule = void 0;
var users_module_1 = __webpack_require__(72);
Object.defineProperty(exports, "UsersModule", ({ enumerable: true, get: function () { return users_module_1.UsersModule; } }));
var users_repository_1 = __webpack_require__(73);
Object.defineProperty(exports, "UsersRepository", ({ enumerable: true, get: function () { return users_repository_1.UsersRepository; } }));
//


/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(5);
const users_repository_1 = __webpack_require__(73);
const common_2 = __webpack_require__(1);
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [users_repository_1.UsersRepository],
        imports: [common_2.DatabaseModule],
        exports: [users_repository_1.UsersRepository]
    })
], UsersModule);


/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersRepository = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(5);
const common_2 = __webpack_require__(1);
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
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof common_2.DatabaseService !== "undefined" && common_2.DatabaseService) === "function" ? _a : Object])
], UsersRepository);


/***/ }),
/* 74 */
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
const config_1 = __webpack_require__(19);
const common_6 = __webpack_require__(5);
const graphql_1 = __webpack_require__(6);
const graphql_2 = __webpack_require__(6);
const graphql_3 = __webpack_require__(6);
const graphql_4 = __webpack_require__(6);
const auth_service_1 = __webpack_require__(75);
const sign_in_input_1 = __webpack_require__(77);
const responses_1 = __webpack_require__(78);
const responses_2 = __webpack_require__(78);
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
/* 75 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(5);
const jwt_1 = __webpack_require__(70);
const bcrypt = tslib_1.__importStar(__webpack_require__(76));
const users_1 = __webpack_require__(71);
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
/* 76 */
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),
/* 77 */
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
/* 78 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserResponse = exports.AccessToken = void 0;
var token_response_1 = __webpack_require__(79);
Object.defineProperty(exports, "AccessToken", ({ enumerable: true, get: function () { return token_response_1.AccessToken; } }));
var user_response_1 = __webpack_require__(80);
Object.defineProperty(exports, "UserResponse", ({ enumerable: true, get: function () { return user_response_1.UserResponse; } }));


/***/ }),
/* 79 */
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
/* 80 */
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
/* 81 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const tslib_1 = __webpack_require__(2);
const config_1 = __webpack_require__(19);
const common_1 = __webpack_require__(5);
const passport_1 = __webpack_require__(26);
const passport_jwt_1 = __webpack_require__(82);
const passport_jwt_2 = __webpack_require__(82);
const users_1 = __webpack_require__(71);
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
/* 82 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 83 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(5);
const common_2 = __webpack_require__(5);
const common_3 = __webpack_require__(5);
const passport_1 = __webpack_require__(26);
const passport_local_1 = __webpack_require__(84);
const auth_service_1 = __webpack_require__(75);
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
/* 84 */
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),
/* 85 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CodeExecutorModule = void 0;
var code_executor_module_1 = __webpack_require__(86);
Object.defineProperty(exports, "CodeExecutorModule", ({ enumerable: true, get: function () { return code_executor_module_1.CodeExecutorModule; } }));


/***/ }),
/* 86 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CodeExecutorModule = void 0;
const tslib_1 = __webpack_require__(2);
const common_1 = __webpack_require__(5);
const code_executor_controller_1 = __webpack_require__(87);
const common_2 = __webpack_require__(1);
const common_3 = __webpack_require__(1);
let CodeExecutorModule = class CodeExecutorModule {
};
exports.CodeExecutorModule = CodeExecutorModule;
exports.CodeExecutorModule = CodeExecutorModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [common_2.KafkaModule.forRoot(common_3.Microservice.CODE_EXECUTOR)],
        controllers: [code_executor_controller_1.CodeExecutorController],
        providers: []
    })
], CodeExecutorModule);


/***/ }),
/* 87 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CodeExecutorController = void 0;
const tslib_1 = __webpack_require__(2);
const config_1 = __webpack_require__(19);
const common_1 = __webpack_require__(5);
const common_2 = __webpack_require__(5);
const common_3 = __webpack_require__(5);
const common_4 = __webpack_require__(5);
const swagger_1 = __webpack_require__(7);
const swagger_2 = __webpack_require__(7);
const swagger_3 = __webpack_require__(7);
const common_5 = __webpack_require__(1);
const microservices_1 = __webpack_require__(49);
const contracts_1 = __webpack_require__(88);
const contracts_2 = __webpack_require__(88);
let CodeExecutorController = class CodeExecutorController {
    constructor(executorClient) {
        this.executorClient = executorClient;
    }
    async onModuleInit() {
        this.executorClient.subscribeToResponseOf(contracts_1.CodeExecutorTopic.EXECUTE_CODE);
        await this.executorClient.connect();
    }
    async executeCode(args) {
        return this.executorClient.send(contracts_1.CodeExecutorTopic.EXECUTE_CODE, args);
    }
};
exports.CodeExecutorController = CodeExecutorController;
tslib_1.__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Execute your code' }),
    (0, swagger_2.ApiResponse)({ status: 200 }),
    (0, common_4.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof contracts_2.ExecuteCodeApiDTO !== "undefined" && contracts_2.ExecuteCodeApiDTO) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], CodeExecutorController.prototype, "executeCode", null);
exports.CodeExecutorController = CodeExecutorController = tslib_1.__decorate([
    (0, swagger_3.ApiTags)('Code executor API'),
    (0, common_2.Controller)(config_1.EndPoints.CODE_EXECUTOR_API),
    tslib_1.__param(0, (0, common_3.Inject)(common_5.Microservice.CODE_EXECUTOR)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientKafka !== "undefined" && microservices_1.ClientKafka) === "function" ? _a : Object])
], CodeExecutorController);


/***/ }),
/* 88 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(89), exports);
tslib_1.__exportStar(__webpack_require__(91), exports);
tslib_1.__exportStar(__webpack_require__(94), exports);


/***/ }),
/* 89 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CodeExecutorTopic = void 0;
const tslib_1 = __webpack_require__(2);
exports.CodeExecutorTopic = tslib_1.__importStar(__webpack_require__(90));


/***/ }),
/* 90 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EXECUTE_CODE = void 0;
exports.EXECUTE_CODE = 'code-executor.execute-code';


/***/ }),
/* 91 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(92), exports);
tslib_1.__exportStar(__webpack_require__(93), exports);


/***/ }),
/* 92 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 93 */
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
/* 94 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(2);
tslib_1.__exportStar(__webpack_require__(95), exports);


/***/ }),
/* 95 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExecuteCodeApiDTO = void 0;
const tslib_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(7);
const class_validator_1 = __webpack_require__(8);
const class_validator_2 = __webpack_require__(8);
const class_validator_3 = __webpack_require__(8);
const interfaces_1 = __webpack_require__(91);
const interfaces_2 = __webpack_require__(91);
class ExecuteCodeApiDTO {
}
exports.ExecuteCodeApiDTO = ExecuteCodeApiDTO;
tslib_1.__decorate([
    (0, class_validator_3.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'print("hello world")', description: 'Your code' }),
    tslib_1.__metadata("design:type", String)
], ExecuteCodeApiDTO.prototype, "code", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsIn)(Object.keys(interfaces_1.ExecutorLanguages)),
    (0, swagger_1.ApiProperty)({ example: 'python', description: 'Code language' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof interfaces_2.ExecutorLanguagesKeys !== "undefined" && interfaces_2.ExecutorLanguagesKeys) === "function" ? _a : Object)
], ExecuteCodeApiDTO.prototype, "language", void 0);
tslib_1.__decorate([
    (0, class_validator_3.IsString)(),
    (0, class_validator_2.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], ExecuteCodeApiDTO.prototype, "input", void 0);


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
const common_3 = __webpack_require__(1);
const config_1 = __webpack_require__(19);
const config_2 = __webpack_require__(19);
const core_1 = __webpack_require__(62);
const swagger_1 = __webpack_require__(7);
const cors_1 = __webpack_require__(63);
const swagger_2 = __webpack_require__(64);
const app_module_1 = __webpack_require__(65);
const bootstrap = async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix(config_2.serverPrefix);
    app.useGlobalFilters(new common_1.HttpExceptionFilter(), new common_1.RpcExceptionFilter());
    app.useGlobalPipes(new common_3.ValidationPipe());
    app.enableCors(cors_1.corsConfig);
    swagger_1.SwaggerModule.setup(config_1.serverDocsPrefix, app, (0, swagger_2.createSwaggerDocs)(app));
    const listener = app.get(common_2.ListenerService);
    await app.listen(listener.PORT, listener.getListenerCallback());
};
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map