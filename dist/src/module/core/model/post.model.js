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
exports.Post = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const faker_1 = require("@faker-js/faker");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const _model_1 = require("../../../model");
const _shared_1 = require("../../../shared");
let Post = class Post extends _shared_1.Base {
    beforeThumbnailUrl() {
        this.thumbnailUrl = (0, _shared_1.setImage)(this.thumbnailUrl);
    }
    afterThumbnailUrl() {
        this.thumbnailUrl = (0, _shared_1.setImage)(this.thumbnailUrl, false);
    }
};
exports.Post = Post;
__decorate([
    (0, typeorm_1.Column)(),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.string.alpha({ length: 3, casing: 'upper', exclude: ['A'] }), description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Post.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, swagger_1.ApiProperty)({ example: faker_1.faker.image.url(), description: '' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Post.prototype, "thumbnailUrl", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Post.prototype, "beforeThumbnailUrl", null);
__decorate([
    (0, typeorm_1.AfterLoad)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Post.prototype, "afterThumbnailUrl", null);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _model_1.PostType, (dataType) => dataType.items, { eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'type', referencedColumnName: 'code' }),
    (0, class_transformer_1.Expose)({ groups: [_shared_1.MaxGroup] }),
    __metadata("design:type", _model_1.PostType)
], Post.prototype, "item", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _model_1.PostTranslation, (data) => data.post, { eager: true }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], Post.prototype, "translations", void 0);
exports.Post = Post = __decorate([
    (0, typeorm_1.Entity)({ schema: 'core' })
], Post);
//# sourceMappingURL=post.model.js.map