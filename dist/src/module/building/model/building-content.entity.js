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
exports.BuildingContent = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const _model_1 = require("../../../model");
let BuildingContent = class BuildingContent {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, buildingId: { required: true, type: () => Number }, content: { required: true, type: () => String }, slug: { required: true, type: () => String }, building: { required: true, type: () => require("./building.model").Building } };
    }
};
exports.BuildingContent = BuildingContent;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BuildingContent.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BuildingContent.prototype, "buildingId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BuildingContent.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BuildingContent.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _model_1.Building, (building) => building.buildingContent),
    (0, typeorm_1.JoinColumn)({ name: 'building_id', referencedColumnName: 'id' }),
    __metadata("design:type", _model_1.Building)
], BuildingContent.prototype, "building", void 0);
exports.BuildingContent = BuildingContent = __decorate([
    (0, typeorm_1.Entity)()
], BuildingContent);
//# sourceMappingURL=building-content.entity.js.map