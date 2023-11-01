/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(3);
tslib_1.__exportStar(__webpack_require__(4), exports);
tslib_1.__exportStar(__webpack_require__(11), exports);
tslib_1.__exportStar(__webpack_require__(18), exports);
tslib_1.__exportStar(__webpack_require__(30), exports);
tslib_1.__exportStar(__webpack_require__(33), exports);
tslib_1.__exportStar(__webpack_require__(34), exports);
tslib_1.__exportStar(__webpack_require__(64), exports);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WithUser = exports.StringField = void 0;
var string_field_decorator_1 = __webpack_require__(5);
Object.defineProperty(exports, "StringField", ({ enumerable: true, get: function () { return string_field_decorator_1.StringField; } }));
var user_decorator_1 = __webpack_require__(10);
Object.defineProperty(exports, "WithUser", ({ enumerable: true, get: function () { return user_decorator_1.WithUser; } }));


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StringField = void 0;
const common_1 = __webpack_require__(6);
const graphql_1 = __webpack_require__(7);
const swagger_1 = __webpack_require__(8);
const class_validator_1 = __webpack_require__(9);
const class_validator_2 = __webpack_require__(9);
const class_validator_3 = __webpack_require__(9);
const StringField = ({ min = 6, max = 14, example }) => {
    return (0, common_1.applyDecorators)((0, graphql_1.Field)(), (0, class_validator_1.IsString)(), (0, class_validator_3.MinLength)(min), (0, class_validator_2.MaxLength)(max), (0, swagger_1.ApiProperty)({ example }));
};
exports.StringField = StringField;


/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WithUser = void 0;
const common_1 = __webpack_require__(6);
const graphql_1 = __webpack_require__(7);
exports.WithUser = (0, common_1.createParamDecorator)((data, context) => {
    const ctx = graphql_1.GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
});


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RpcExceptionFilter = exports.HttpExceptionFilter = void 0;
var http_exception_filter_1 = __webpack_require__(12);
Object.defineProperty(exports, "HttpExceptionFilter", ({ enumerable: true, get: function () { return http_exception_filter_1.HttpExceptionFilter; } }));
var rpc_exception_filter_1 = __webpack_require__(13);
Object.defineProperty(exports, "RpcExceptionFilter", ({ enumerable: true, get: function () { return rpc_exception_filter_1.RpcExceptionFilter; } }));


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpExceptionFilter = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(6);
const common_2 = __webpack_require__(6);
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
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RpcExceptionFilter = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(6);
const rxjs_1 = __webpack_require__(14);
const guards_1 = __webpack_require__(15);
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
/* 14 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(3);
tslib_1.__exportStar(__webpack_require__(16), exports);


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isCustomRpcException = void 0;
const types_1 = __webpack_require__(17);
const isCustomRpcException = (rpcException) => {
    return ((0, types_1.isObject)(rpcException) &&
        'code' in rpcException &&
        'message' in rpcException);
};
exports.isCustomRpcException = isCustomRpcException;


/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("@grnx-utils/types");

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = exports.GqlLocalAuthGuard = exports.GqlAuthGuard = void 0;
var gql_auth_guard_1 = __webpack_require__(19);
Object.defineProperty(exports, "GqlAuthGuard", ({ enumerable: true, get: function () { return gql_auth_guard_1.GqlAuthGuard; } }));
var gql_local_auth_guard_1 = __webpack_require__(28);
Object.defineProperty(exports, "GqlLocalAuthGuard", ({ enumerable: true, get: function () { return gql_local_auth_guard_1.GqlLocalAuthGuard; } }));
var jwt_auth_guard_1 = __webpack_require__(29);
Object.defineProperty(exports, "JwtAuthGuard", ({ enumerable: true, get: function () { return jwt_auth_guard_1.JwtAuthGuard; } }));


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GqlAuthGuard = void 0;
const config_1 = __webpack_require__(20);
const graphql_1 = __webpack_require__(7);
const passport_1 = __webpack_require__(27);
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
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createStorybookConfig = exports.createPreviewDefaults = void 0;
const tslib_1 = __webpack_require__(3);
tslib_1.__exportStar(__webpack_require__(21), exports);
tslib_1.__exportStar(__webpack_require__(22), exports);
var storybook_1 = __webpack_require__(23);
Object.defineProperty(exports, "createPreviewDefaults", ({ enumerable: true, get: function () { return storybook_1.createPreviewDefaults; } }));
Object.defineProperty(exports, "createStorybookConfig", ({ enumerable: true, get: function () { return storybook_1.createStorybookConfig; } }));


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.appName = exports.clientUrl = void 0;
exports.clientUrl = process.env.CLIENT_URL ?? 'http://localhost:3000';
exports.appName = 'code_gear';


/***/ }),
/* 22 */
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
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createStorybookConfig = exports.createPreviewDefaults = void 0;
var create_preview_defaults_1 = __webpack_require__(24);
Object.defineProperty(exports, "createPreviewDefaults", ({ enumerable: true, get: function () { return create_preview_defaults_1.createPreviewDefaults; } }));
var create_storybook_config_1 = __webpack_require__(26);
Object.defineProperty(exports, "createStorybookConfig", ({ enumerable: true, get: function () { return create_storybook_config_1.createStorybookConfig; } }));


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createPreviewDefaults = void 0;
const create_viewports_1 = __webpack_require__(25);
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
/* 25 */
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
/* 26 */
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
/* 27 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GqlLocalAuthGuard = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(6);
const graphql_1 = __webpack_require__(7);
const passport_1 = __webpack_require__(27);
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
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const graphql_1 = __webpack_require__(7);
const passport_1 = __webpack_require__(27);
class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    getRequest(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        return ctx.getContext().req;
    }
}
exports.JwtAuthGuard = JwtAuthGuard;


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationPipe = void 0;
var validation_pipe_1 = __webpack_require__(31);
Object.defineProperty(exports, "ValidationPipe", ({ enumerable: true, get: function () { return validation_pipe_1.ValidationPipe; } }));


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationPipe = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(6);
const common_2 = __webpack_require__(6);
const class_transformer_1 = __webpack_require__(32);
const class_validator_1 = __webpack_require__(9);
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
/* 32 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports) => {


// AUTO GENERATED FILE BY @kalissaac/prisma-typegen
// DO NOT EDIT
Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(3);
tslib_1.__exportStar(__webpack_require__(35), exports);
tslib_1.__exportStar(__webpack_require__(37), exports);
tslib_1.__exportStar(__webpack_require__(52), exports);
tslib_1.__exportStar(__webpack_require__(56), exports);
tslib_1.__exportStar(__webpack_require__(61), exports);


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KafkaService = exports.KafkaModule = void 0;
var kafka_module_1 = __webpack_require__(36);
Object.defineProperty(exports, "KafkaModule", ({ enumerable: true, get: function () { return kafka_module_1.KafkaModule; } }));
var kafka_service_1 = __webpack_require__(51);
Object.defineProperty(exports, "KafkaService", ({ enumerable: true, get: function () { return kafka_service_1.KafkaService; } }));


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var KafkaModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KafkaModule = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(6);
const env_1 = __webpack_require__(37);
const microservices_1 = __webpack_require__(50);
const kafka_service_1 = __webpack_require__(51);
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
/* 37 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseConfig = exports.KafkaConfig = exports.MiscConfig = exports.ServerConfig = exports.EnvModule = void 0;
var env_module_1 = __webpack_require__(38);
Object.defineProperty(exports, "EnvModule", ({ enumerable: true, get: function () { return env_module_1.EnvModule; } }));
var types_1 = __webpack_require__(48);
Object.defineProperty(exports, "ServerConfig", ({ enumerable: true, get: function () { return types_1.ServerConfig; } }));
Object.defineProperty(exports, "MiscConfig", ({ enumerable: true, get: function () { return types_1.MiscConfig; } }));
Object.defineProperty(exports, "KafkaConfig", ({ enumerable: true, get: function () { return types_1.KafkaConfig; } }));
Object.defineProperty(exports, "DatabaseConfig", ({ enumerable: true, get: function () { return types_1.DatabaseConfig; } }));


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnvModule = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(6);
const config_1 = __webpack_require__(39);
const conf_1 = __webpack_require__(40);
const conf_2 = __webpack_require__(40);
const conf_3 = __webpack_require__(40);
const conf_4 = __webpack_require__(40);
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
/* 39 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.kafka = exports.server = exports.database = exports.misc = void 0;
var misc_config_1 = __webpack_require__(41);
Object.defineProperty(exports, "misc", ({ enumerable: true, get: function () { return misc_config_1.misc; } }));
var database_config_1 = __webpack_require__(45);
Object.defineProperty(exports, "database", ({ enumerable: true, get: function () { return database_config_1.database; } }));
var server_config_1 = __webpack_require__(46);
Object.defineProperty(exports, "server", ({ enumerable: true, get: function () { return server_config_1.server; } }));
var kafka_config_1 = __webpack_require__(47);
Object.defineProperty(exports, "kafka", ({ enumerable: true, get: function () { return kafka_config_1.kafka; } }));


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.misc = void 0;
const tslib_1 = __webpack_require__(3);
const validators_1 = __webpack_require__(42);
const config_1 = __webpack_require__(39);
const env_decorator_1 = __webpack_require__(44);
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
/* 42 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateConfig = void 0;
var env_validator_1 = __webpack_require__(43);
Object.defineProperty(exports, "validateConfig", ({ enumerable: true, get: function () { return env_validator_1.validateConfig; } }));


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateConfig = void 0;
const class_transformer_1 = __webpack_require__(32);
const class_validator_1 = __webpack_require__(9);
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
/* 44 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Env = void 0;
const common_1 = __webpack_require__(6);
const class_validator_1 = __webpack_require__(9);
const class_validator_2 = __webpack_require__(9);
const Env = () => {
    return (0, common_1.applyDecorators)((0, class_validator_2.IsString)(), (0, class_validator_1.IsNotEmpty)());
};
exports.Env = Env;


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.database = void 0;
const tslib_1 = __webpack_require__(3);
const config_1 = __webpack_require__(39);
const env_decorator_1 = __webpack_require__(44);
const validators_1 = __webpack_require__(42);
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
/* 46 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.server = void 0;
const tslib_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(9);
const class_validator_2 = __webpack_require__(9);
const class_validator_3 = __webpack_require__(9);
const validators_1 = __webpack_require__(42);
const config_1 = __webpack_require__(39);
const env_decorator_1 = __webpack_require__(44);
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
/* 47 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.kafka = void 0;
const tslib_1 = __webpack_require__(3);
const config_1 = __webpack_require__(39);
const env_decorator_1 = __webpack_require__(44);
const validators_1 = __webpack_require__(42);
const class_validator_1 = __webpack_require__(9);
const class_validator_2 = __webpack_require__(9);
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
    (0, env_decorator_1.Env)(),
    tslib_1.__metadata("design:type", String)
], KafkaValidator.prototype, "SERVER_KAFKA_MICROSERVICE_AUTH", void 0);
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
            codeExecutor: conf.SERVER_KAFKA_MICROSERVICE_CODE_EXECUTOR,
            auth: conf.SERVER_KAFKA_MICROSERVICE_AUTH
        },
        sessionTimeout: Number(conf.SERVER_KAFKA_SESSION_TIMEOUT),
        heartbeatInterval: Number(conf.SERVER_KAFKA_HEARTBEAT_INTERVAL)
    };
});


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseConfig = exports.KafkaConfig = exports.MiscConfig = exports.ServerConfig = void 0;
var enviroment_interfaces_1 = __webpack_require__(49);
Object.defineProperty(exports, "ServerConfig", ({ enumerable: true, get: function () { return enviroment_interfaces_1.ServerConfig; } }));
Object.defineProperty(exports, "MiscConfig", ({ enumerable: true, get: function () { return enviroment_interfaces_1.MiscConfig; } }));
Object.defineProperty(exports, "KafkaConfig", ({ enumerable: true, get: function () { return enviroment_interfaces_1.KafkaConfig; } }));
Object.defineProperty(exports, "DatabaseConfig", ({ enumerable: true, get: function () { return enviroment_interfaces_1.DatabaseConfig; } }));


/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 50 */
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KafkaService = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(6);
const config_1 = __webpack_require__(39);
const microservices_1 = __webpack_require__(50);
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
/* 52 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseService = exports.DatabaseModule = void 0;
var database_module_1 = __webpack_require__(53);
Object.defineProperty(exports, "DatabaseModule", ({ enumerable: true, get: function () { return database_module_1.DatabaseModule; } }));
var database_service_1 = __webpack_require__(54);
Object.defineProperty(exports, "DatabaseService", ({ enumerable: true, get: function () { return database_service_1.DatabaseService; } }));


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(6);
const database_service_1 = __webpack_require__(54);
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
/* 54 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseService = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(6);
const client_1 = __webpack_require__(55);
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
/* 55 */
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListenerService = exports.ListenerModule = void 0;
var listener_module_1 = __webpack_require__(57);
Object.defineProperty(exports, "ListenerModule", ({ enumerable: true, get: function () { return listener_module_1.ListenerModule; } }));
var listener_service_1 = __webpack_require__(58);
Object.defineProperty(exports, "ListenerService", ({ enumerable: true, get: function () { return listener_service_1.ListenerService; } }));


/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var ListenerModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListenerModule = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(6);
const config_1 = __webpack_require__(39);
const listener_service_1 = __webpack_require__(58);
const listener_consts_1 = __webpack_require__(60);
const env_1 = __webpack_require__(37);
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
/* 58 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ListenerService = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(6);
const common_2 = __webpack_require__(6);
const listener_interfaces_1 = __webpack_require__(59);
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
/* 59 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NESTJS_FREE_PORT = void 0;
exports.NESTJS_FREE_PORT = 0;


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtModule = void 0;
var jwt_module_1 = __webpack_require__(62);
Object.defineProperty(exports, "JwtModule", ({ enumerable: true, get: function () { return jwt_module_1.JwtModule; } }));


/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtModule = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(6);
const jwt_1 = __webpack_require__(63);
const config_1 = __webpack_require__(20);
let JwtModule = class JwtModule {
};
exports.JwtModule = JwtModule;
exports.JwtModule = JwtModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: config_1.jwtSecret,
                signOptions: {
                    expiresIn: '24h'
                }
            })
        ],
        exports: [jwt_1.JwtModule]
    })
], JwtModule);


/***/ }),
/* 63 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Microservice = void 0;
var microservices_1 = __webpack_require__(65);
Object.defineProperty(exports, "Microservice", ({ enumerable: true, get: function () { return microservices_1.Microservice; } }));


/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Microservice = void 0;
var Microservice;
(function (Microservice) {
    Microservice["CODE_EXECUTOR"] = "codeExecutor";
    Microservice["AUTH"] = "auth";
})(Microservice || (exports.Microservice = Microservice = {}));


/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__(3);
const axios_1 = __webpack_require__(67);
const common_1 = __webpack_require__(6);
const auth_consumer_1 = __webpack_require__(68);
const common_2 = __webpack_require__(2);
const common_3 = __webpack_require__(2);
const common_4 = __webpack_require__(2);
const common_5 = __webpack_require__(2);
const common_6 = __webpack_require__(2);
const cqrs_1 = __webpack_require__(69);
const auth_service_1 = __webpack_require__(84);
const accounts_repository_1 = __webpack_require__(86);
const jwt_strategy_1 = __webpack_require__(87);
const local_strategy_1 = __webpack_require__(89);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            common_3.EnvModule,
            cqrs_1.CqrsModule,
            common_4.JwtModule,
            common_2.DatabaseModule,
            common_6.ListenerModule.forRoot({
                isMicroservice: true
            })
        ],
        providers: [
            common_5.KafkaService,
            auth_service_1.AuthService,
            accounts_repository_1.AccountsRepository,
            jwt_strategy_1.JwtStrategy,
            local_strategy_1.LocalStrategy
        ],
        controllers: [auth_consumer_1.AuthConsumer],
        exports: []
    })
], AuthModule);


/***/ }),
/* 67 */
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthConsumer = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(6);
const cqrs_1 = __webpack_require__(69);
const common_2 = __webpack_require__(2);
const microservices_1 = __webpack_require__(50);
const microservices_2 = __webpack_require__(50);
const contracts_1 = __webpack_require__(70);
const auth_service_1 = __webpack_require__(84);
let AuthConsumer = class AuthConsumer {
    constructor(query, authService) {
        this.query = query;
        this.authService = authService;
    }
    async signIn(user) {
        return this.authService.generateToken(user.username);
    }
};
exports.AuthConsumer = AuthConsumer;
tslib_1.__decorate([
    (0, microservices_1.MessagePattern)(contracts_1.AuthTopic.SIGN_IN),
    tslib_1.__param(0, (0, microservices_2.Payload)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof common_2.User !== "undefined" && common_2.User) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], AuthConsumer.prototype, "signIn", null);
exports.AuthConsumer = AuthConsumer = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof cqrs_1.QueryBus !== "undefined" && cqrs_1.QueryBus) === "function" ? _a : Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _b : Object])
], AuthConsumer);


/***/ }),
/* 69 */
/***/ ((module) => {

module.exports = require("@nestjs/cqrs");

/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(3);
tslib_1.__exportStar(__webpack_require__(71), exports);
tslib_1.__exportStar(__webpack_require__(74), exports);
tslib_1.__exportStar(__webpack_require__(77), exports);
tslib_1.__exportStar(__webpack_require__(79), exports);
tslib_1.__exportStar(__webpack_require__(81), exports);


/***/ }),
/* 71 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthTopic = exports.CodeExecutorTopic = void 0;
const tslib_1 = __webpack_require__(3);
exports.CodeExecutorTopic = tslib_1.__importStar(__webpack_require__(72));
exports.AuthTopic = tslib_1.__importStar(__webpack_require__(73));


/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EXECUTE_CODE = void 0;
exports.EXECUTE_CODE = 'code-executor.execute-code';


/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GET_PROFILE = exports.SIGN_IN = void 0;
exports.SIGN_IN = 'auth.sign-in';
exports.GET_PROFILE = 'auth.get-profile';


/***/ }),
/* 74 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(3);
tslib_1.__exportStar(__webpack_require__(75), exports);
tslib_1.__exportStar(__webpack_require__(76), exports);


/***/ }),
/* 75 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 76 */
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
/* 77 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(3);
tslib_1.__exportStar(__webpack_require__(78), exports);


/***/ }),
/* 78 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExecuteCodeApiDTO = void 0;
const tslib_1 = __webpack_require__(3);
const swagger_1 = __webpack_require__(8);
const class_validator_1 = __webpack_require__(9);
const class_validator_2 = __webpack_require__(9);
const class_validator_3 = __webpack_require__(9);
const interfaces_1 = __webpack_require__(74);
const interfaces_2 = __webpack_require__(74);
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


/***/ }),
/* 79 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(3);
tslib_1.__exportStar(__webpack_require__(80), exports);


/***/ }),
/* 80 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignIn = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(2);
const graphql_1 = __webpack_require__(7);
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
/* 81 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserResponse = exports.AccessTokenResponse = void 0;
var token_response_1 = __webpack_require__(82);
Object.defineProperty(exports, "AccessTokenResponse", ({ enumerable: true, get: function () { return token_response_1.AccessTokenResponse; } }));
var user_response_1 = __webpack_require__(83);
Object.defineProperty(exports, "UserResponse", ({ enumerable: true, get: function () { return user_response_1.UserResponse; } }));


/***/ }),
/* 82 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccessTokenResponse = void 0;
const tslib_1 = __webpack_require__(3);
const graphql_1 = __webpack_require__(7);
const graphql_2 = __webpack_require__(7);
const swagger_1 = __webpack_require__(8);
let AccessTokenResponse = class AccessTokenResponse {
};
exports.AccessTokenResponse = AccessTokenResponse;
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    (0, swagger_1.ApiProperty)({ description: 'Authorization token (jwt)' }),
    tslib_1.__metadata("design:type", String)
], AccessTokenResponse.prototype, "accessToken", void 0);
exports.AccessTokenResponse = AccessTokenResponse = tslib_1.__decorate([
    (0, graphql_2.ObjectType)()
], AccessTokenResponse);


/***/ }),
/* 83 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserResponse = void 0;
const tslib_1 = __webpack_require__(3);
const graphql_1 = __webpack_require__(7);
const graphql_2 = __webpack_require__(7);
const swagger_1 = __webpack_require__(8);
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
/* 84 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(6);
const jwt_1 = __webpack_require__(63);
const bcrypt = tslib_1.__importStar(__webpack_require__(85));
const accounts_repository_1 = __webpack_require__(86);
let AuthService = class AuthService {
    constructor(jwtService, accountsService) {
        this.jwtService = jwtService;
        this.accountsService = accountsService;
    }
    async validate(payload) {
        const user = await this.accountsService.getUserByUsername(payload.username);
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
        return this.accountsService.createUser({
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
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof accounts_repository_1.AccountsRepository !== "undefined" && accounts_repository_1.AccountsRepository) === "function" ? _b : Object])
], AuthService);


/***/ }),
/* 85 */
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),
/* 86 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountsRepository = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(6);
const common_2 = __webpack_require__(2);
let AccountsRepository = class AccountsRepository {
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
exports.AccountsRepository = AccountsRepository;
exports.AccountsRepository = AccountsRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof common_2.DatabaseService !== "undefined" && common_2.DatabaseService) === "function" ? _a : Object])
], AccountsRepository);


/***/ }),
/* 87 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const tslib_1 = __webpack_require__(3);
const config_1 = __webpack_require__(20);
const common_1 = __webpack_require__(6);
const passport_1 = __webpack_require__(27);
const passport_jwt_1 = __webpack_require__(88);
const passport_jwt_2 = __webpack_require__(88);
const accounts_repository_1 = __webpack_require__(86);
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
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof accounts_repository_1.AccountsRepository !== "undefined" && accounts_repository_1.AccountsRepository) === "function" ? _a : Object])
], JwtStrategy);


/***/ }),
/* 88 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 89 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(6);
const common_2 = __webpack_require__(6);
const common_3 = __webpack_require__(6);
const passport_1 = __webpack_require__(27);
const passport_local_1 = __webpack_require__(90);
const auth_service_1 = __webpack_require__(84);
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
/* 90 */
/***/ ((module) => {

module.exports = require("passport-local");

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
const core_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const common_2 = __webpack_require__(2);
const common_3 = __webpack_require__(2);
const common_4 = __webpack_require__(2);
const common_5 = __webpack_require__(2);
const auth_module_1 = __webpack_require__(66);
const bootstrap = async () => {
    const app = await core_1.NestFactory.create(auth_module_1.AuthModule);
    const kafkaService = app.get(common_1.KafkaService);
    app.connectMicroservice(kafkaService.getKafkaOptions(common_3.Microservice.AUTH));
    app.useGlobalFilters(new common_4.RpcExceptionFilter());
    app.useGlobalPipes(new common_5.ValidationPipe());
    await app.startAllMicroservices();
    await app.init();
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