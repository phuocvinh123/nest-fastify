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
let AppController = class AppController {
    constructor(buildingService) {
        this.buildingService = buildingService;
    }
    async root(address) {
        const [bu] = await this.buildingService.findAll({
            page: 1,
            perPage: 10,
            filter: `{"buildingAddress.province":"${address ? address : ""}"}`
        });
        const [ex] = await this.buildingService.findAll({ perPage: 100 });
        const uniqueProvinces = [...new Set(ex.map(i => i.buildingAddress.province))];
        const data = {
            items: [
                {
                    title: "Uhouse",
                    Content: "Mang lại nhiều tiện ích cho khách thuê",
                    imageSrc: "/images/property-1.png"
                },
                {
                    title: "Uhouse",
                    Content: " Nền tảng quản lý vận hành tòa nhà tiên tiến",
                    imageSrc: "/images/property-1.png"
                },
                {
                    title: "Uhouse",
                    Content: "Tiết kiệm chi phí hiệu quả",
                    imageSrc: "/images/property-1.png"
                }
            ],
            swiper: [
                {
                    imageSrc: "/images/swiper1.png",
                    title: "Các xu hướng lựa chọn thiết kế căn hộ lý tưởng năm 2022"
                },
                {
                    imageSrc: "/images/swiper2.png",
                    title: "Những căn hộ đơn giản hiện đại có phải là xu hướng mới?"
                },
                {
                    imageSrc: "/images/swiper3.png",
                    title: "Phong cách thiết kế căn hộ nào sẽ là xu hướng năm 2023?"
                },
                {
                    imageSrc: "/images/swiper1.png",
                    title: "Các xu hướng lựa chọn thiết kế căn hộ lý tưởng năm 2022"
                },
                {
                    imageSrc: "/images/swiper2.png",
                    title: "Những căn hộ đơn giản hiện đại có phải là xu hướng mới?"
                },
                {
                    imageSrc: "/images/swiper3.png",
                    title: "Phong cách thiết kế căn hộ nào sẽ là xu hướng năm 2023?"
                }
            ]
        };
        return {
            bu, data, uniqueProvinces
        };
    }
    async detail(id) {
        console.log(typeof id);
        return {
            id
        };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(''),
    (0, common_1.Render)('index'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Query)('address')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "root", null);
__decorate([
    (0, common_1.Get)('/detail/:id'),
    (0, common_1.Render)('detail'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "detail", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [_service_1.BuildingService])
], AppController);
//# sourceMappingURL=app.controller.js.map