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
exports.DataService = exports.P_DATA_DELETE = exports.P_DATA_UPDATE = exports.P_DATA_CREATE = exports.P_DATA_LISTED = void 0;
const common_1 = require("@nestjs/common");
const _repository_1 = require("../../../repository");
const _shared_1 = require("../../../shared");
const file_service_1 = require("./file.service");
exports.P_DATA_LISTED = '1db70aa0-7541-4433-b2f6-fbd7bf8bf7bb';
exports.P_DATA_CREATE = 'c3ab9e11-7ba3-4afd-b5cb-c560362a3144';
exports.P_DATA_UPDATE = '99ea12da-5800-4d6d-9e73-60c016a267a9';
exports.P_DATA_DELETE = '2e8c8772-2505-4683-b6fa-13fa2570eee7';
let DataService = class DataService extends _shared_1.BaseService {
    constructor(repo, fileService) {
        super(repo);
        this.repo = repo;
        this.fileService = fileService;
        this.listJoin = ['translations'];
        this.listQuery = ['name'];
    }
    async findArrayCode(types) {
        const tempData = {};
        for (const type of types) {
            tempData[type] = (await this.findAll({ filter: '{"isDisabled":"NULL"}', sorts: '{"createdAt":"DESC"}' }))[0];
        }
        return tempData;
    }
    async create(body) {
        const data = await this.repo.createWithTranslation(body);
        await this.fileService.activeFiles((0, _shared_1.getImages)(['image'], data, ['translations'])[0]);
        return data;
    }
    async update(id, body) {
        const oldData = await this.findOne(id, []);
        const data = await this.repo.updateWithTranslation(id, body);
        const [listFilesActive, listFilesRemove] = (0, _shared_1.getImages)(['image'], data, ['translations'], oldData);
        await this.fileService.activeFiles(listFilesActive);
        await this.fileService.removeFiles(listFilesRemove);
        return data;
    }
    async removeHard(id) {
        const data = await super.removeHard(id);
        await this.fileService.removeFiles((0, _shared_1.getImages)(['image'], data, ['translations'])[0]);
        return data;
    }
};
exports.DataService = DataService;
exports.DataService = DataService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [_repository_1.DataRepository,
        file_service_1.FileService])
], DataService);
//# sourceMappingURL=data.service.js.map