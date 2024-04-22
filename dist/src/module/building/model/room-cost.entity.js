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
exports.RoomCost = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const _model_1 = require("../../../model");
let RoomCost = class RoomCost {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, unitPrice: { required: true, type: () => Number }, unit: { required: true, type: () => String }, roomId: { required: true, type: () => Number }, updatedAt: { required: true, type: () => Date }, createdAt: { required: true, type: () => Date }, updatedBy: { required: true, type: () => Number }, room: { required: true, type: () => require("./room.entity").Room } };
    }
};
exports.RoomCost = RoomCost;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RoomCost.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RoomCost.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RoomCost.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RoomCost.prototype, "unitPrice", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RoomCost.prototype, "unit", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RoomCost.prototype, "roomId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], RoomCost.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], RoomCost.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RoomCost.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _model_1.Room, (room) => room.roomCost),
    __metadata("design:type", _model_1.Room)
], RoomCost.prototype, "room", void 0);
exports.RoomCost = RoomCost = __decorate([
    (0, typeorm_1.Entity)('room_cost')
], RoomCost);
//# sourceMappingURL=room-cost.entity.js.map