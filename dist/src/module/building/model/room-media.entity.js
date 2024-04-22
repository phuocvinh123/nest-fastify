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
exports.RoomMedia = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const _model_1 = require("../../../model");
let RoomMedia = class RoomMedia {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, updatedBy: { required: true, type: () => Number }, roomId: { required: true, type: () => Number }, isDefault: { required: true, type: () => Boolean }, size: { required: true, type: () => Number }, mediaType: { required: true, type: () => String }, room: { required: true, type: () => require("./room.entity").Room } };
    }
};
exports.RoomMedia = RoomMedia;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RoomMedia.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RoomMedia.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], RoomMedia.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], RoomMedia.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RoomMedia.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RoomMedia.prototype, "roomId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], RoomMedia.prototype, "isDefault", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RoomMedia.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RoomMedia.prototype, "mediaType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _model_1.Room, (room) => room.roomMedia),
    (0, typeorm_1.JoinColumn)({ name: 'room_id', referencedColumnName: 'id' }),
    __metadata("design:type", _model_1.Room)
], RoomMedia.prototype, "room", void 0);
exports.RoomMedia = RoomMedia = __decorate([
    (0, typeorm_1.Entity)('room_media')
], RoomMedia);
//# sourceMappingURL=room-media.entity.js.map