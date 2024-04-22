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
exports.DataTypeService = exports.P_DATA_TYPE_DELETE = exports.P_DATA_TYPE_UPDATE = exports.P_DATA_TYPE_CREATE = exports.P_DATA_TYPE_LISTED = void 0;
const common_1 = require("@nestjs/common");
const _shared_1 = require("../../../shared");
const data_type_repository_1 = require("../repository/data-type.repository");
exports.P_DATA_TYPE_LISTED = '2712ca04-7e7c-44b6-83c1-b8c7f332a0fb';
exports.P_DATA_TYPE_CREATE = '03380c3a-3336-42f4-b8c2-e54084d35655';
exports.P_DATA_TYPE_UPDATE = '00e77095-35ea-4755-bbae-46a1ba78e46e';
exports.P_DATA_TYPE_DELETE = '0e481286-bd5d-4203-a374-a8f8f8735f33';
let DataTypeService = class DataTypeService extends _shared_1.BaseService {
    constructor(repo) {
        super(repo);
        this.repo = repo;
    }
};
exports.DataTypeService = DataTypeService;
exports.DataTypeService = DataTypeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [data_type_repository_1.DataTypeRepository])
], DataTypeService);
//# sourceMappingURL=data-type.service.js.map