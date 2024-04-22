"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreModule = void 0;
const common_1 = require("@nestjs/common");
const _controller_1 = require("../../controller");
const _service_1 = require("../../service");
const _repository_1 = require("../../repository");
let CoreModule = class CoreModule {
};
exports.CoreModule = CoreModule;
exports.CoreModule = CoreModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [
            _controller_1.CodeController,
            _controller_1.CodeTypeController,
            _controller_1.DataController,
            _controller_1.DataTypeController,
            _controller_1.FileController,
            _controller_1.ParameterController,
            _controller_1.PostController,
            _controller_1.PostTypeController,
        ],
        providers: [
            _repository_1.CodeRepository,
            _service_1.CodeService,
            _repository_1.CodeTypeRepository,
            _service_1.CodeTypeService,
            _repository_1.DataRepository,
            _service_1.DataService,
            _repository_1.DataTypeRepository,
            _service_1.DataTypeService,
            _repository_1.FileRepository,
            _service_1.FileService,
            _repository_1.ParameterRepository,
            _service_1.ParameterService,
            _repository_1.PostRepository,
            _service_1.PostService,
            _service_1.PostTypeService,
            _repository_1.PostTypeRepository,
            _repository_1.PostTranslationRepository,
        ],
        exports: [_service_1.DataService, _service_1.FileService, _service_1.ParameterService, _service_1.PostService],
    })
], CoreModule);
//# sourceMappingURL=core.module.js.map