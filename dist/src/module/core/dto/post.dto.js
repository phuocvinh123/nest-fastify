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
exports.ListPostResponseDto = exports.PostResponseDto = exports.PostDto = exports.ArrayPostResponseDto = exports.UpdatePostRequestDto = exports.CreatePostTranslationRequestDto = exports.CreatePostRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const _model_1 = require("../../../model");
const _shared_1 = require("../../../shared");
class CreatePostRequestDto extends (0, swagger_1.PickType)(_model_1.Post, ['type', 'thumbnailUrl', 'createdAt', 'isDisabled']) {
    static _OPENAPI_METADATA_FACTORY() {
        return { translations: { required: false, type: () => [require("./post.dto").CreatePostTranslationRequestDto] } };
    }
}
exports.CreatePostRequestDto = CreatePostRequestDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreatePostRequestDto.prototype, "translations", void 0);
class CreatePostTranslationRequestDto extends (0, swagger_1.PickType)(_model_1.PostTranslation, [
    'id',
    'language',
    'name',
    'description',
    'slug',
    'content',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreatePostTranslationRequestDto = CreatePostTranslationRequestDto;
class UpdatePostRequestDto extends (0, swagger_1.PartialType)(CreatePostRequestDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdatePostRequestDto = UpdatePostRequestDto;
class ArrayPostResponseDto extends (0, swagger_1.PartialType)(_shared_1.DefaultResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.ArrayPostResponseDto = ArrayPostResponseDto;
class PostDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(_model_1.Post, ['isDeleted', 'createdAt', 'updatedAt', 'translations', 'item'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.PostDto = PostDto;
class PostResponseDto extends (0, swagger_1.PartialType)(_shared_1.DefaultResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => require("./post.dto").PostDto, nullable: true } };
    }
}
exports.PostResponseDto = PostResponseDto;
class ListPostResponseDto extends (0, swagger_1.PartialType)(_shared_1.PaginationResponsesDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return { data: { required: true, type: () => [require("./post.dto").PostDto] } };
    }
}
exports.ListPostResponseDto = ListPostResponseDto;
//# sourceMappingURL=post.dto.js.map