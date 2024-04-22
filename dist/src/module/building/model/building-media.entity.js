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
exports.BuildingMedia = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const _model_1 = require("../../../model");
let BuildingMedia = class BuildingMedia {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, updatedBy: { required: true, type: () => Number }, buildingId: { required: true, type: () => Number }, isDefault: { required: true, type: () => Boolean }, size: { required: true, type: () => Number }, mediaType: { required: true, type: () => String }, building: { required: true, type: () => require("./building.model").Building } };
    }
};
exports.BuildingMedia = BuildingMedia;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BuildingMedia.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BuildingMedia.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], BuildingMedia.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], BuildingMedia.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingMedia.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingMedia.prototype, "buildingId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], BuildingMedia.prototype, "isDefault", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingMedia.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BuildingMedia.prototype, "mediaType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _model_1.Building, (building) => building.buildingMedia),
    (0, typeorm_1.JoinColumn)({ name: 'building_id', referencedColumnName: 'id' }),
    __metadata("design:type", _model_1.Building)
], BuildingMedia.prototype, "building", void 0);
exports.BuildingMedia = BuildingMedia = __decorate([
    (0, typeorm_1.Entity)()
], BuildingMedia);
//# sourceMappingURL=building-media.entity.js.map