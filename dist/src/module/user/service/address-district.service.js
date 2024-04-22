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
exports.AddressDistrictService = void 0;
const common_1 = require("@nestjs/common");
const _shared_1 = require("../../../shared");
const address_district_repository_1 = require("../repository/address-district.repository");
let AddressDistrictService = class AddressDistrictService extends _shared_1.BaseService {
    constructor(repo) {
        super(repo);
        this.repo = repo;
        this.listQuery = ['name', 'code', 'codeProvince'];
    }
};
exports.AddressDistrictService = AddressDistrictService;
exports.AddressDistrictService = AddressDistrictService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [address_district_repository_1.AddressDistrictRepository])
], AddressDistrictService);
//# sourceMappingURL=address-district.service.js.map