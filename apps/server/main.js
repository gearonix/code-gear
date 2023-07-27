/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.corsConfig = void 0;
const config_1 = __webpack_require__(2);
exports.corsConfig = {
    origin: config_1.clientUrl,
    methods: ['POST', 'PUT', 'DELETE', 'GET'],
    credentials: true
};


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(3);
tslib_1.__exportStar(__webpack_require__(4), exports);
tslib_1.__exportStar(__webpack_require__(5), exports);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.clientUrl = void 0;
exports.clientUrl = process.env.CLIENT_URL ?? 'http://localhost:3000';


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.serverDocsPrefix = exports.serverAppName = exports.EndPoints = exports.serverUrl = exports.compilerApiUrl = exports.serverPort = exports.serverPrefix = void 0;
exports.serverPrefix = process.env['SERVER_PREFIX'] ?? '';
exports.serverPort = process.env['SERVER_PORT'] ?? 6868;
exports.compilerApiUrl = process.env['CODE_COMPILER_API_URL'] ?? 'https://api.codex.jaagrav.in';
exports.serverUrl = process.env['SERVER_URL'] ?? 'http://localhost:6868';
exports.EndPoints = {
    CODE_EXECUTOR_API: 'execute'
};
exports.serverAppName = 'CodeGear API';
exports.serverDocsPrefix = 'docs';


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createSwaggerDocs = void 0;
const swagger_1 = __webpack_require__(7);
const config_1 = __webpack_require__(2);
const createSwaggerDocs = (app) => {
    const swagger = new swagger_1.DocumentBuilder()
        .setTitle(config_1.serverAppName)
        .setDescription('REST API documentation')
        .setVersion('1.0.0')
        .build();
    return swagger_1.SwaggerModule.createDocument(app, swagger);
};
exports.createSwaggerDocs = createSwaggerDocs;


/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpExceptionFilter = void 0;
var http_exception_filter_1 = __webpack_require__(9);
Object.defineProperty(exports, "HttpExceptionFilter", ({ enumerable: true, get: function () { return http_exception_filter_1.HttpExceptionFilter; } }));


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpExceptionFilter = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(10);
let HttpExceptionFilter = exports.HttpExceptionFilter = class HttpExceptionFilter {
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
exports.HttpExceptionFilter = HttpExceptionFilter = tslib_1.__decorate([
    (0, common_1.Catch)(common_1.HttpException)
], HttpExceptionFilter);


/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ValidationPipe = void 0;
const tslib_1 = __webpack_require__(3);
const class_transformer_1 = __webpack_require__(12);
const class_validator_1 = __webpack_require__(13);
const common_1 = __webpack_require__(10);
let ValidationPipe = exports.ValidationPipe = class ValidationPipe {
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
exports.ValidationPipe = ValidationPipe = tslib_1.__decorate([
    (0, common_1.Injectable)()
], ValidationPipe);


/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(10);
const config_1 = __webpack_require__(16);
const code_executor_api_1 = __webpack_require__(17);
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot(), code_executor_api_1.CodeExecutorModule],
        controllers: [],
        providers: []
    })
], AppModule);


/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CodeExecutorModule = void 0;
var code_executor_module_1 = __webpack_require__(18);
Object.defineProperty(exports, "CodeExecutorModule", ({ enumerable: true, get: function () { return code_executor_module_1.CodeExecutorModule; } }));


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CodeExecutorModule = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(10);
const code_executor_controller_1 = __webpack_require__(19);
const services_1 = __webpack_require__(20);
let CodeExecutorModule = exports.CodeExecutorModule = class CodeExecutorModule {
};
exports.CodeExecutorModule = CodeExecutorModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [services_1.ExecutorApiModule],
        controllers: [code_executor_controller_1.CodeExecutorController],
        providers: []
    })
], CodeExecutorModule);


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CodeExecutorController = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(10);
const swagger_1 = __webpack_require__(7);
const config_1 = __webpack_require__(2);
const services_1 = __webpack_require__(20);
let CodeExecutorController = exports.CodeExecutorController = class CodeExecutorController {
    constructor(executorService) {
        this.executorService = executorService;
    }
    async executeCode(args) {
        const response = await this.executorService.fetchCodeToExecute(args);
        if (!(0, services_1.isExecutorApiResponse)(response)) {
            throw new common_1.BadRequestException((0, services_1.FailedToFetchError)());
        }
        return response;
    }
};
tslib_1.__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Execute your code' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof services_1.ExecuteCodeApiDTO !== "undefined" && services_1.ExecuteCodeApiDTO) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], CodeExecutorController.prototype, "executeCode", null);
exports.CodeExecutorController = CodeExecutorController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Code executor API'),
    (0, common_1.Controller)(config_1.EndPoints.CODE_EXECUTOR_API),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof services_1.ExecutorApiService !== "undefined" && services_1.ExecutorApiService) === "function" ? _a : Object])
], CodeExecutorController);


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicesModule = void 0;
const tslib_1 = __webpack_require__(3);
tslib_1.__exportStar(__webpack_require__(21), exports);
var services_module_1 = __webpack_require__(32);
Object.defineProperty(exports, "ServicesModule", ({ enumerable: true, get: function () { return services_module_1.ServicesModule; } }));


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExecutorLanguages = exports.ExecutorApiResponse = exports.isExecutorApiResponse = exports.FailedToFetchError = exports.ExecutorApiService = exports.ExecutorApiModule = exports.ExecuteCodeApiDTO = void 0;
var execute_code_api_dto_1 = __webpack_require__(22);
Object.defineProperty(exports, "ExecuteCodeApiDTO", ({ enumerable: true, get: function () { return execute_code_api_dto_1.ExecuteCodeApiDTO; } }));
var executor_api_module_1 = __webpack_require__(24);
Object.defineProperty(exports, "ExecutorApiModule", ({ enumerable: true, get: function () { return executor_api_module_1.ExecutorApiModule; } }));
var executor_api_service_1 = __webpack_require__(26);
Object.defineProperty(exports, "ExecutorApiService", ({ enumerable: true, get: function () { return executor_api_service_1.ExecutorApiService; } }));
var errors_1 = __webpack_require__(29);
Object.defineProperty(exports, "FailedToFetchError", ({ enumerable: true, get: function () { return errors_1.FailedToFetchError; } }));
var type_guards_1 = __webpack_require__(31);
Object.defineProperty(exports, "isExecutorApiResponse", ({ enumerable: true, get: function () { return type_guards_1.isExecutorApiResponse; } }));
var types_1 = __webpack_require__(23);
Object.defineProperty(exports, "ExecutorApiResponse", ({ enumerable: true, get: function () { return types_1.ExecutorApiResponse; } }));
Object.defineProperty(exports, "ExecutorLanguages", ({ enumerable: true, get: function () { return types_1.ExecutorLanguages; } }));


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExecuteCodeApiDTO = void 0;
const tslib_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(13);
const swagger_1 = __webpack_require__(7);
const types_1 = __webpack_require__(23);
class ExecuteCodeApiDTO {
}
exports.ExecuteCodeApiDTO = ExecuteCodeApiDTO;
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'print("hello world")', description: 'Your code' }),
    tslib_1.__metadata("design:type", String)
], ExecuteCodeApiDTO.prototype, "code", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsIn)(Object.keys(types_1.ExecutorLanguages)),
    (0, swagger_1.ApiProperty)({ example: 'python', description: 'Code language' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof types_1.ExecutorLanguagesKeys !== "undefined" && types_1.ExecutorLanguagesKeys) === "function" ? _a : Object)
], ExecuteCodeApiDTO.prototype, "language", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], ExecuteCodeApiDTO.prototype, "input", void 0);


/***/ }),
/* 23 */
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
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExecutorApiModule = void 0;
const tslib_1 = __webpack_require__(3);
const axios_1 = __webpack_require__(25);
const common_1 = __webpack_require__(10);
const executor_api_service_1 = __webpack_require__(26);
let ExecutorApiModule = exports.ExecutorApiModule = class ExecutorApiModule {
};
exports.ExecutorApiModule = ExecutorApiModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        providers: [executor_api_service_1.ExecutorApiService],
        exports: [executor_api_service_1.ExecutorApiService]
    })
], ExecutorApiModule);


/***/ }),
/* 25 */
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExecutorApiService = void 0;
const tslib_1 = __webpack_require__(3);
const axios_1 = tslib_1.__importDefault(__webpack_require__(27));
const qs_stringify_1 = tslib_1.__importDefault(__webpack_require__(28));
const axios_2 = __webpack_require__(25);
const common_1 = __webpack_require__(10);
const errors_1 = __webpack_require__(29);
const transform_language_1 = __webpack_require__(30);
const config_1 = __webpack_require__(2);
let ExecutorApiService = exports.ExecutorApiService = class ExecutorApiService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async fetchCodeToExecute(args) {
        common_1.Logger.log('Request to execute custom code...');
        try {
            const response = await this.httpService
                .post(config_1.compilerApiUrl, (0, qs_stringify_1.default)((0, transform_language_1.transformLanguage)(args)), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .toPromise();
            return response?.data;
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                common_1.Logger.warn((0, errors_1.FailedToFetchError)(error.status));
            }
        }
        return null;
    }
};
exports.ExecutorApiService = ExecutorApiService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof axios_2.HttpService !== "undefined" && axios_2.HttpService) === "function" ? _a : Object])
], ExecutorApiService);


/***/ }),
/* 27 */
/***/ ((module) => {

module.exports = require("axios");

/***/ }),
/* 28 */
/***/ ((module) => {

module.exports = require("qs-stringify");

/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FailedToFetchError = void 0;
const FailedToFetchError = (status = 400) => {
    return `Failed to get response from api.codex.jaagrav.in (${status}).`;
};
exports.FailedToFetchError = FailedToFetchError;


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.transformLanguage = void 0;
const types_1 = __webpack_require__(23);
const transformLanguage = (args) => {
    return {
        ...args,
        language: types_1.ExecutorLanguages[args.language]
    };
};
exports.transformLanguage = transformLanguage;


/***/ }),
/* 31 */
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
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServicesModule = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(10);
const executor_api_1 = __webpack_require__(21);
let ServicesModule = exports.ServicesModule = class ServicesModule {
};
exports.ServicesModule = ServicesModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        imports: [executor_api_1.ExecutorApiModule]
    })
], ServicesModule);


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
const cors_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(6);
const exception_filters_1 = __webpack_require__(8);
const validation_pipe_1 = __webpack_require__(11);
const common_1 = __webpack_require__(10);
const core_1 = __webpack_require__(14);
const swagger_2 = __webpack_require__(7);
const app_module_1 = __webpack_require__(15);
const config_1 = __webpack_require__(2);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix(config_1.serverPrefix);
    app.useGlobalFilters(new exception_filters_1.HttpExceptionFilter());
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe());
    app.enableCors(cors_1.corsConfig);
    swagger_2.SwaggerModule.setup(config_1.serverDocsPrefix, app, (0, swagger_1.createSwaggerDocs)(app));
    common_1.Logger.log(`🚀 Server is running on port ${config_1.serverPort}`);
    await app.listen(config_1.serverPort);
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map