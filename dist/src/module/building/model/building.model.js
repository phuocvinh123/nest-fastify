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
exports.Building = void 0;
const _model_1 = require("../../../model");
const typeorm_1 = require("typeorm");
const type_enum_1 = require("./type.enum");
const building_utility_entity_1 = require("./building-utility.entity");
const app_user_entity_1 = require("./app-user.entity");
const building_media_entity_1 = require("./building-media.entity");
const building_address_entity_1 = require("./building-address.entity");
const building_content_entity_1 = require("./building-content.entity");
let Building = class Building {
};
exports.Building = Building;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Building.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Building.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Building.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Building.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Building.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Building.prototype, "media", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Building.prototype, "isDeleted", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Building.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Building.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Building.prototype, "buildingAddressId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => app_user_entity_1.AppUser, (appUser) => appUser.id),
    (0, typeorm_1.JoinColumn)({ name: 'created_by', referencedColumnName: 'id' }),
    __metadata("design:type", app_user_entity_1.AppUser)
], Building.prototype, "landlord", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => building_media_entity_1.BuildingMedia, (buildingMedia) => buildingMedia.building, {
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'buildingId' }),
    __metadata("design:type", Array)
], Building.prototype, "buildingMedia", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => building_utility_entity_1.BuildingUtility, (utility) => utility.building),
    __metadata("design:type", Array)
], Building.prototype, "utilities", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _model_1.Room, (room) => room.building),
    __metadata("design:type", Array)
], Building.prototype, "rooms", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => building_address_entity_1.BuildingAddress),
    (0, typeorm_1.JoinColumn)({ name: 'building_address_id', referencedColumnName: 'id' }),
    __metadata("design:type", building_address_entity_1.BuildingAddress)
], Building.prototype, "buildingAddress", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => building_content_entity_1.BuildingContent, (buildingContent) => buildingContent.building, {
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'buildingId' }),
    __metadata("design:type", Array)
], Building.prototype, "buildingContent", void 0);
exports.Building = Building = __decorate([
    (0, typeorm_1.Entity)('building')
], Building);
//# sourceMappingURL=building.model.js.map