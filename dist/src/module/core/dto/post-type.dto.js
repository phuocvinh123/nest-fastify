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
exports.ListPostTypeResponseDto = exports.PostTypeResponseDto = exports.PostTypeDto = exports.UpdatePostTypeRequestDto = exports.CreatePostTypeRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const _shared_1 = require("../../../shared");
const _model_1 = require("../../../model");
const class_validator_1 = require("class-validator");
class CreatePostTypeRequestDto extends (0, swagger_1.PickType)(_model_1.PostType, ['name', 'code']) {
    static _OPENAPI_METADATA_FACTORY() {
        return { idChildren: { required: false, type: () => String } };
    }
}
exports.CreatePostTypeRequestDto = CreatePostTypeRequestDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePostTypeRequestDto.prototype, "idChildren", void 0);
class UpdatePostTypeRequestDto extends (0, swagger_1.PickType)(_model_1.PostType, ['name', 'code']) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdatePostTypeRequestDto = UpdatePostTypeRequestDto;
class PostTypeDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(_model_1.PostType, ['isDeleted', 'createdAt', 'updatedAt', 'items'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.PostTypeDto = PostTypeDto;
class PostTypeResponseDto extends (0, swagger_1.PartialType)(_shared_1.DefaultResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => require("./post-type.dto").PostTypeDto, nullable: true } };
    }
}
exports.PostTypeResponseDto = PostTypeResponseDto;
class ListPostTypeResponseDto extends (0, swagger_1.PartialType)(_shared_1.PaginationResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("./post-type.dto").PostTypeDto] } };
    }
}
exports.ListPostTypeResponseDto = ListPostTypeResponseDto;
//# sourceMappingURL=post-type.dto.js.map