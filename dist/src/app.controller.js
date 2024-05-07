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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const _service_1 = require("./service");
const _shared_1 = require("./shared");
let AppController = class AppController {
    constructor(buildingService, roomService) {
        this.buildingService = buildingService;
        this.roomService = roomService;
    }
    async root(address) {
        const [bu] = await this.buildingService.findAll({
            page: 1,
            perPage: 10,
            filter: `{"buildingAddress.province":"${address ? address : ''}"}`,
        });
        const [ex] = await this.buildingService.findAll({ perPage: 100 });
        const uniqueProvinces = [...new Set(ex.map((building) => building.buildingAddress.province))];
        const data = {
            items: [
                {
                    imageSrc: '/images/home/swpier1.png',
                    title: 'Các xu hướng lựa chọn thiết kế căn hộ lý tưởng năm 2022',
                },
                {
                    imageSrc: '/images/home/swpier2.png',
                    title: 'Những căn hộ đơn giản hiện đại có phải là xu hướng mới?',
                },
                {
                    imageSrc: '/images/home/swpier2.png',
                    title: 'Những căn hộ đơn giản hiện đại có phải là xu hướng mới?',
                },
                {
                    imageSrc: '/images/home/swpier3.png',
                    title: 'Phong cách thiết kế căn hộ nào sẽ là xu hướng năm 2023?',
                },
            ],
            baners: [
                {
                    title: 'Uhouse',
                    Content: 'Mang lại nhiều tiện ích cho khách thuê',
                    imageSrc: '/images/home/property-1.png',
                },
                {
                    title: 'Uhouse',
                    Content: ' Nền tảng quản lý vận hành tòa nhà tiên tiến',
                    imageSrc: '/images/home/property-1.png',
                },
                {
                    title: 'Uhouse',
                    Content: 'Tiết kiệm chi phí hiệu quả',
                    imageSrc: '/images/home/property-1.png',
                },
            ],
        };
        return {
            bu,
            data,
            uniqueProvinces,
        };
    }
    async detail(id) {
        const bui = await this.buildingService.findOne(id, []);
        return {
            bui,
        };
    }
    async detail1(paginableParams) {
        let filterObject = {};
        const filterParam = paginableParams.filter;
        if (filterParam) {
            filterObject = JSON.parse(filterParam);
        }
        const { province, type, year, acreage, bedroomTotal, price } = filterObject;
        const [bui] = await this.buildingService.findAll({});
        const [bu] = await this.buildingService.findAll({
            ...paginableParams,
            filter: `{"buildingAddress.province":"${province ? province : ''}",
    "type":"${type ? type : ''}",
    "rooms.acreage":"${acreage ? acreage : ''}",
    "updated_at":"${year ? year : ''}",
    "rooms.bedroomTotal":"${bedroomTotal ? bedroomTotal : ''}",
    "rooms.price":"${price !== '/' && price ? price : ''}"}
    `,
        });
        const uniqueProvinces = [...new Set(bui.map((building) => building.buildingAddress.province))];
        const data = {
            hirePrice: [
                {
                    content: 'Tăng dần',
                    value: 'ASC',
                },
                {
                    content: 'Giảm dần',
                    value: 'DESC',
                },
            ],
            roomAcreageArray: [
                {
                    content: '<30m2',
                    value: '0/30',
                },
                {
                    content: '30m2-50m2',
                    value: '30/50',
                },
                {
                    content: '50m2-60m2',
                    value: '50/60',
                },
                {
                    content: '60m2-70m2',
                    value: '60/70',
                },
                {
                    content: '70m2-80m2',
                    value: '70/80',
                },
                {
                    content: '80m2-90m2',
                    value: '80/90',
                },
                {
                    content: '100m2-1000m2',
                    value: '100/1000',
                },
            ],
            roomArrayYear: [
                {
                    content: 'Cách đây 1 ngày',
                    value: `${(0, _shared_1.getTheDate)(1)}`,
                },
                {
                    content: 'Cách đây 3 ngày',
                    value: `${(0, _shared_1.getTheDate)(3)}`,
                },
                {
                    content: 'Cách đây 7 ngày',
                    value: `${(0, _shared_1.getTheDate)(7)}`,
                },
                {
                    content: 'Cách đây 15 ngày',
                    value: `${(0, _shared_1.getTheDate)(15)}`,
                },
                {
                    content: 'Cách đây 30 ngày',
                    value: `${(0, _shared_1.getTheDate)(30)}`,
                },
                {
                    content: 'Cách đây 60 ngày',
                    value: `${(0, _shared_1.getTheDate)(60)}`,
                },
            ],
            roomBedroomTotal: [
                {
                    content: 0,
                    value: 0,
                },
                {
                    content: 1,
                    value: 1,
                },
                {
                    content: 2,
                    value: 2,
                },
                {
                    content: 3,
                    value: 3,
                },
                {
                    content: 4,
                    value: 4,
                },
                {
                    content: 5,
                    value: 5,
                },
                {
                    content: 6,
                    value: 6,
                },
            ],
            roomTypeArray: [
                {
                    content: 'Căn hộ dịch vụ',
                    value: 'CHDV',
                },
                {
                    content: 'Motel',
                    value: 'MOTEL',
                },
                {
                    content: 'Hotel',
                    value: 'HOTEL',
                },
                {
                    content: 'Phòng trọ',
                    value: 'MEZZANINE_ROOM',
                },
                {
                    content: 'Chung cư Mini',
                    value: 'STUDIO_ROOM',
                },
            ],
            radioPrice: [
                {
                    content: 'Tất cả',
                    value: '',
                },
                {
                    content: '1',
                    value: 1000000,
                },
                {
                    content: '5',
                    value: 5000000,
                },
                {
                    content: '7',
                    value: 7000000,
                },
                {
                    content: '10',
                    value: 10000000,
                },
                {
                    content: '30',
                    value: 30000000,
                },
            ],
        };
        return {
            bu,
            data,
            uniqueProvinces,
        };
    }
    async detail2(id) {
        const room = await this.buildingService.findByRoomId(id);
        let bu;
        if (room) {
            bu = await this.buildingService.findOne(room.buildingId.toString(), []);
        }
        return {
            room,
            bu,
        };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(''),
    (0, common_1.Render)('pages/home/index'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)('address')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "root", null);
__decorate([
    (0, common_1.Get)('/roomList/:id'),
    (0, common_1.Render)('pages/roomList/index'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "detail", null);
__decorate([
    (0, common_1.Get)('/buildingList'),
    (0, common_1.Render)('pages/buildingList/index'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [_shared_1.PaginationQueryDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "detail1", null);
__decorate([
    (0, common_1.Get)('/roomDetail/:id'),
    (0, common_1.Render)('pages/roomDetail/index'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "detail2", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [_service_1.BuildingService,
        _service_1.RoomService])
], AppController);
//# sourceMappingURL=app.controller.js.map