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
exports.BuildingUtility = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const _model_1 = require("../../../model");
let BuildingUtility = class BuildingUtility {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, buildingId: { required: true, type: () => Number }, utilityId: { required: true, type: () => Number }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, image: { required: true, type: () => String }, building: { required: true, type: () => require("./building.model").Building } };
    }
};
exports.BuildingUtility = BuildingUtility;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BuildingUtility.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingUtility.prototype, "buildingId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingUtility.prototype, "utilityId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BuildingUtility.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BuildingUtility.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BuildingUtility.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _model_1.Building, (building) => building.utilities),
    (0, typeorm_1.JoinColumn)({ name: 'building_id', referencedColumnName: 'id' }),
    __metadata("design:type", _model_1.Building)
], BuildingUtility.prototype, "building", void 0);
exports.BuildingUtility = BuildingUtility = __decorate([
    (0, typeorm_1.Entity)('building_utility')
], BuildingUtility);
//# sourceMappingURL=building-utility.entity.js.map