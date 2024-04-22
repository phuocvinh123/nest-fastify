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
exports.RoomSchedule = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const _model_1 = require("../../../model");
let RoomSchedule = class RoomSchedule {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, customerName: { required: true, type: () => String }, customerPhoneNumber: { required: true, type: () => String }, appointmentTime: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, updatedBy: { required: true, type: () => Number }, roomId: { required: true, type: () => Number }, room: { required: true, type: () => require("./room.entity").Room } };
    }
};
exports.RoomSchedule = RoomSchedule;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RoomSchedule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RoomSchedule.prototype, "customerName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RoomSchedule.prototype, "customerPhoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], RoomSchedule.prototype, "appointmentTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], RoomSchedule.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RoomSchedule.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RoomSchedule.prototype, "roomId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _model_1.Room, (room) => room.roomSchedule),
    (0, typeorm_1.JoinColumn)({ name: 'room_id', referencedColumnName: 'id' }),
    __metadata("design:type", _model_1.Room)
], RoomSchedule.prototype, "room", void 0);
exports.RoomSchedule = RoomSchedule = __decorate([
    (0, typeorm_1.Entity)()
], RoomSchedule);
//# sourceMappingURL=room-schedule.entity.js.map