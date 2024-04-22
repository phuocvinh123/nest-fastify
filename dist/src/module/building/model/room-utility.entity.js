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
exports.RoomUtility = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const _model_1 = require("../../../model");
let RoomUtility = class RoomUtility {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, roomId: { required: true, type: () => Number }, utilityId: { required: true, type: () => Number }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, image: { required: true, type: () => String }, room: { required: true, type: () => require("./room.entity").Room } };
    }
};
exports.RoomUtility = RoomUtility;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RoomUtility.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RoomUtility.prototype, "roomId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RoomUtility.prototype, "utilityId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RoomUtility.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RoomUtility.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RoomUtility.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _model_1.Room, (room) => room.utilities),
    (0, typeorm_1.JoinColumn)({ name: 'room_id', referencedColumnName: 'id' }),
    __metadata("design:type", _model_1.Room)
], RoomUtility.prototype, "room", void 0);
exports.RoomUtility = RoomUtility = __decorate([
    (0, typeorm_1.Entity)('room_utility')
], RoomUtility);
//# sourceMappingURL=room-utility.entity.js.map