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
exports.RoomSupplies = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const _model_1 = require("../../../model");
let RoomSupplies = class RoomSupplies {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, service: { required: true, type: () => String }, description: { required: true, type: () => String }, quantity: { required: true, type: () => Number }, roomId: { required: true, type: () => Number }, updatedAt: { required: true, type: () => Date }, createdAt: { required: true, type: () => Date }, updatedBy: { required: true, type: () => Number }, room: { required: true, type: () => require("./room.entity").Room } };
    }
};
exports.RoomSupplies = RoomSupplies;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RoomSupplies.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RoomSupplies.prototype, "service", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RoomSupplies.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RoomSupplies.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RoomSupplies.prototype, "roomId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], RoomSupplies.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], RoomSupplies.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RoomSupplies.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _model_1.Room, (room) => room.roomSupplies),
    __metadata("design:type", _model_1.Room)
], RoomSupplies.prototype, "room", void 0);
exports.RoomSupplies = RoomSupplies = __decorate([
    (0, typeorm_1.Entity)('room_supplies')
], RoomSupplies);
//# sourceMappingURL=room-supplies.entity.js.map