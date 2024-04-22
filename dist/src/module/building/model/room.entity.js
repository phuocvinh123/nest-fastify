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
exports.Room = void 0;
const openapi = require("@nestjs/swagger");
const _model_1 = require("../../../model");
const typeorm_1 = require("typeorm");
const room_content_entity_1 = require("./room-content.entity");
const room_cost_entity_1 = require("./room-cost.entity");
const room_media_entity_1 = require("./room-media.entity");
const room_schedule_entity_1 = require("./room-schedule.entity");
const room_supplies_entity_1 = require("./room-supplies.entity");
const room_utility_entity_1 = require("./room-utility.entity");
const type_enum_1 = require("./type.enum");
let Room = class Room {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, roomNumber: { required: true, type: () => String }, type: { required: true, enum: require("./type.enum").RoomType }, numTenants: { required: true, type: () => Number }, acreage: { required: true, type: () => Number }, price: { required: true, type: () => Number }, bonus: { required: true, type: () => Number }, deposit: { required: true, type: () => Number }, note: { required: true, type: () => String }, balcony: { required: true, type: () => Boolean }, mezzanine: { required: true, type: () => Boolean }, pet: { required: true, type: () => Boolean }, updatedAt: { required: true, type: () => Date }, createdAt: { required: true, type: () => Date }, updatedBy: { required: true, type: () => Number }, status: { required: true, type: () => String }, media: { required: true, type: () => String }, rentedBy: { required: true, type: () => Number }, isPublic: { required: true, type: () => Boolean }, isDeleted: { required: true, type: () => Boolean }, buildingId: { required: true, type: () => Number }, bedroomTotal: { required: true, type: () => Number }, building: { required: true, type: () => require("./building.model").Building }, roomContent: { required: true, type: () => [require("./room-content.entity").RoomContent] }, roomCost: { required: true, type: () => [require("./room-cost.entity").RoomCost] }, roomSupplies: { required: true, type: () => [require("./room-supplies.entity").RoomSupplies] }, utilities: { required: true, type: () => [require("./room-utility.entity").RoomUtility] }, roomMedia: { required: true, type: () => [require("./room-media.entity").RoomMedia] }, roomSchedule: { required: true, type: () => [require("./room-schedule.entity").RoomSchedule] } };
    }
};
exports.Room = Room;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Room.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Room.prototype, "roomNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Room.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Room.prototype, "numTenants", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Room.prototype, "acreage", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Room.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Room.prototype, "bonus", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Room.prototype, "deposit", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Room.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Room.prototype, "balcony", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Room.prototype, "mezzanine", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Room.prototype, "pet", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Room.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Room.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Room.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Room.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Room.prototype, "media", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Room.prototype, "rentedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Room.prototype, "isPublic", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Room.prototype, "isDeleted", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Room.prototype, "buildingId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Room.prototype, "bedroomTotal", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _model_1.Building, (building) => building.rooms),
    (0, typeorm_1.JoinColumn)({ name: 'building_id', referencedColumnName: 'id' }),
    __metadata("design:type", _model_1.Building)
], Room.prototype, "building", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => room_content_entity_1.RoomContent, (roomContent) => roomContent.room),
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'roomId' }),
    __metadata("design:type", Array)
], Room.prototype, "roomContent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => room_cost_entity_1.RoomCost, (roomCost) => roomCost.room),
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'roomId' }),
    __metadata("design:type", Array)
], Room.prototype, "roomCost", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => room_supplies_entity_1.RoomSupplies, (roomSupplies) => roomSupplies.room, {
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'roomId' }),
    __metadata("design:type", Array)
], Room.prototype, "roomSupplies", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => room_utility_entity_1.RoomUtility, (roomUtility) => roomUtility.room),
    __metadata("design:type", Array)
], Room.prototype, "utilities", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => room_media_entity_1.RoomMedia, (roomMedia) => roomMedia.room, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'id', referencedColumnName: 'roomId' }),
    __metadata("design:type", Array)
], Room.prototype, "roomMedia", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => room_schedule_entity_1.RoomSchedule, (roomSchedule) => roomSchedule.room),
    __metadata("design:type", Array)
], Room.prototype, "roomSchedule", void 0);
exports.Room = Room = __decorate([
    (0, typeorm_1.Entity)('room')
], Room);
//# sourceMappingURL=room.entity.js.map