"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = exports.P_FILE_DELETE = exports.P_FILE_UPDATE = exports.P_FILE_CREATE = exports.P_FILE_DETAIL = exports.P_FILE_LISTED = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = __importStar(require("fs"));
const dayjs_1 = __importDefault(require("dayjs"));
const sharp_1 = __importDefault(require("sharp"));
const path_1 = require("path");
const _config_1 = require("../../../config");
const _shared_1 = require("../../../shared");
const _repository_1 = require("../../../repository");
exports.P_FILE_LISTED = '5d808d76-bf99-4a51-b4b6-d5aa37bdb398';
exports.P_FILE_DETAIL = 'eb510a79-4f75-4b14-a118-f036c1daa430';
exports.P_FILE_CREATE = 'a9574d5e-269d-44f9-a5bb-41cf06d7bdda';
exports.P_FILE_UPDATE = '6d34b679-9c0e-489a-a2de-a17e37fadf72';
exports.P_FILE_DELETE = 'e21ac25b-1651-443e-9834-e593789807c9';
let FileService = class FileService extends _shared_1.BaseService {
    constructor(repo) {
        super(repo);
        this.repo = repo;
        this.logger = new common_1.Logger('FileService');
    }
    async uploadFile(userId, file) {
        const data = await this.saveToLocalPath(file, /\/(jpg|jpeg|png|gif|webp|svg)$/, '', userId);
        if (!data)
            throw new common_1.BadRequestException(`file is not null`);
        const createData = await this.create({ userId, url: data.filename, type: 0 });
        createData.url = _config_1.appConfig.URL_FILE + createData?.url;
        return createData;
    }
    async saveToLocalPath(multipartFile, mimeTypesRegex, validationErrorMessage, userId) {
        this.logger.verbose(`File received: ${multipartFile.filename} (${multipartFile.mimetype})`);
        if (mimeTypesRegex && !multipartFile.mimetype.match(mimeTypesRegex)) {
            throw new common_1.BadRequestException(validationErrorMessage);
        }
        try {
            fs_1.default.mkdirSync(_config_1.appConfig.UPLOAD_LOCATION, { recursive: true });
            fs_1.default.mkdirSync(_config_1.appConfig.UPLOAD_LOCATION + userId, { recursive: true });
            multipartFile.filename = `${userId}/${this.renameFile(multipartFile.filename)}`;
            const tmpFilename = _config_1.appConfig.UPLOAD_LOCATION + multipartFile.filename;
            await (0, sharp_1.default)(await multipartFile.toBuffer())
                .webp({ effort: 3 })
                .toFile(tmpFilename);
            this.logger.verbose(`File saved localy: ${tmpFilename} (${multipartFile.mimetype})`);
            return {
                filename: multipartFile.filename,
                filepath: tmpFilename,
            };
        }
        catch (error) {
            this.logger.error(`Error while saving file ${multipartFile.filename}: ${error}`);
            return null;
        }
    }
    deleteFromLocalPath(filePath) {
        fs_1.promises
            .unlink(filePath)
            .then(() => this.logger.verbose(`File deleted successfully ${filePath}`))
            .catch((error) => this.logger.error(`Error while deleting file ${filePath}: ${error}`));
    }
    renameFile(filename) {
        const name = filename.split('.')[0];
        const nowAsString = (0, dayjs_1.default)().format('YYYYMMDDHHmmss');
        return `${name}-${nowAsString}.webp`;
    }
    async activeFiles(urls) {
        for (const url of urls) {
            const data = await this.repo.getDataByUrl(url);
            if (data?.id)
                await this.update(data.id, { status: 1 });
        }
    }
    async removeFiles(urls) {
        for (const url of urls) {
            await this.removeHard(url);
        }
    }
    async removeHard(url) {
        const data = await this.repo.getDataByUrl(url);
        if (data)
            await this.removeFile(data);
        return data;
    }
    async removeFile(data, i18n) {
        if (data?.id) {
            const res = await this.repo.delete(data.id);
            if (!res.affected && i18n) {
                throw new common_1.BadRequestException(i18n.t('common.Data id not found', { args: { id: data.id } }));
            }
            switch (data.type) {
                case 0:
                    this.deleteFromLocalPath((0, path_1.join)(process.cwd(), _config_1.appConfig.UPLOAD_LOCATION, data?.url.replace(_config_1.appConfig.URL_FILE, '')));
            }
        }
    }
};
exports.FileService = FileService;
exports.FileService = FileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [_repository_1.FileRepository])
], FileService);
//# sourceMappingURL=file.service.js.map