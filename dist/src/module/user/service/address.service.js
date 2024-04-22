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
exports.AddressService = exports.P_ADDRESS_DELETE = exports.P_ADDRESS_UPDATE = exports.P_ADDRESS_CREATE = void 0;
const common_1 = require("@nestjs/common");
const _shared_1 = require("../../../shared");
const _repository_1 = require("../../../repository");
exports.P_ADDRESS_CREATE = 'a9574d5e-269d-44f9-a5bb-41cf06d7bdda';
exports.P_ADDRESS_UPDATE = '6d34b679-9c0e-123a-a2de-a11e37fadf72';
exports.P_ADDRESS_DELETE = 'e21ac25b-1111-443e-9999-e593789807c9';
let AddressService = class AddressService extends _shared_1.BaseService {
    constructor(repo) {
        super(repo);
        this.repo = repo;
        this.listQuery = ['specificAddress'];
        this.listJoin = ['provinceItem', 'districtItem', 'wardItem'];
    }
};
exports.AddressService = AddressService;
exports.AddressService = AddressService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [_repository_1.AddressRepository])
], AddressService);
//# sourceMappingURL=address.service.js.map