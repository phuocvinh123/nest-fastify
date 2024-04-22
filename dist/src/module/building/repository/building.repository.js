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
exports.BuildingRepository = void 0;
const common_1 = require("@nestjs/common");
const _shared_1 = require("../../../shared");
const _model_1 = require("../../../model");
const typeorm_1 = require("typeorm");
const util_1 = require("util");
const room_repository_1 = require("./room.repository");
let BuildingRepository = class BuildingRepository extends _shared_1.BaseRepository {
    constructor(dataSource, roomRepository) {
        super(_model_1.Building, dataSource.createEntityManager());
        this.dataSource = dataSource;
        this.roomRepository = roomRepository;
    }
    async getBuildings() {
        const page = 1;
        const perPage = 10;
        let fullTextSearch = '';
        const sort = '';
        const filter = '{}';
        const query = this.createQueryBuilder('building')
            .innerJoin('building.rooms', 'rooms', 'rooms.isPublic = TRUE')
            .leftJoin('building.buildingAddress', 'buildingAddress')
            .leftJoin('building.buildingContent', 'buildingContent')
            .select(['building', 'buildingContent', 'buildingAddress.district'])
            .groupBy('buildingAddress.district')
            .addGroupBy('building.id')
            .addGroupBy('buildingContent.id')
            .andWhere('building.isDeleted = FALSE')
            .take(perPage)
            .skip((page - 1) * perPage);
        if (!(0, util_1.isNullOrUndefined)(fullTextSearch) && fullTextSearch.trim() != '') {
            fullTextSearch = fullTextSearch
                .trim()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '');
            fullTextSearch = fullTextSearch.replace('đ', 'd');
            fullTextSearch = fullTextSearch.replace('Đ', 'D');
            console.log('fullTextSearch', fullTextSearch);
            query.andWhere(new typeorm_1.Brackets((sqb) => {
                sqb.orWhere('LOWER(unaccent(building.name)) LIKE LOWER(:name)', {
                    name: `%${fullTextSearch}%`,
                });
                sqb.orWhere('LOWER(unaccent(building.address)) LIKE LOWER(:address)', {
                    address: `%${fullTextSearch}%`,
                });
            }));
        }
        if (typeof sort != 'undefined') {
            const { name, manager, address, type, description } = JSON.parse(sort);
            if (!(0, util_1.isNullOrUndefined)(name)) {
                query.addOrderBy('building.name', name);
            }
            if (!(0, util_1.isNullOrUndefined)(address)) {
                query.addOrderBy('building.address', address);
            }
            if (!(0, util_1.isNullOrUndefined)(type)) {
                query.addOrderBy('building.type', type);
            }
            if (!(0, util_1.isNullOrUndefined)(description)) {
                query.addOrderBy('building.description', description);
            }
        }
        if (typeof filter != 'undefined') {
            const { type, province, district, ward } = JSON.parse(filter);
            if (type) {
                query.andWhere('building.type = :type', {
                    type: `${type}`,
                });
            }
            if (province) {
                query.andWhere('LOWER(buildingAddress.province) LIKE LOWER(:province)', {
                    province: `%${province}%`,
                });
            }
            if (district) {
                query.andWhere('LOWER(buildingAddress.district) = LOWER(:district)', {
                    district: district,
                });
            }
            if (ward) {
                query.andWhere('LOWER(buildingAddress.ward) LIKE LOWER(:ward)', {
                    ward: `%${ward}%`,
                });
            }
        }
        const data = await query.getMany();
        const total = await query.getCount();
        await Promise.all(data.map(async (e) => {
            e.media = `${process.env.HOST_BACK_END}/api/v1/util/download?key=${e.media}`;
            const numPublicRoom = await this.roomRepository.getCountByBuilding(e.id);
            e['numPublicRoom'] = numPublicRoom;
        }));
        return {
            statusCode: 200,
            message: 'Get data Successful!',
            data,
            total,
        };
    }
};
exports.BuildingRepository = BuildingRepository;
exports.BuildingRepository = BuildingRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource,
        room_repository_1.RoomRepository])
], BuildingRepository);
//# sourceMappingURL=building.repository.js.map