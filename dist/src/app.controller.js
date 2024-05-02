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
const nestjs_i18n_1 = require("nestjs-i18n");
const _shared_1 = require("./shared");
let AppController = class AppController {
    constructor(categoryService, productService) {
        this.categoryService = categoryService;
        this.productService = productService;
    }
    async root(language = 'en', urlLang = '/vn', paginationQuery) {
        const { data } = await this.common(language);
        let [categories] = await this.categoryService.findAll(paginationQuery);
        const [products] = await this.productService.findAll(paginationQuery);
        const featureCate = categories.slice(0, 3);
        categories = categories.map((item) => Object.assign(item, { countProds: item.products?.length }));
        return {
            urlLang,
            ...data,
            language: {
                ...data.language,
            },
            categoriFilter: featureCate,
            categories: categories,
            products: products,
        };
    }
    async findOneBySlug(language = 'en', urlLang = '/vn', slugCategory, paginationQuery) {
        const { data } = await this.common(language);
        const products = await this.categoryService.findSlug(slugCategory);
        const [categories] = await this.categoryService.findAll(paginationQuery);
        return { urlLang, ...data, products, categories };
    }
    async rootEn(language = 'vn', urlLang = '/en', paginationQuery) {
        return await this.root(language, urlLang, paginationQuery);
    }
    async common(language) {
        const i18n = nestjs_i18n_1.I18nContext.current();
        return {
            data: {
                title: 'Web Store',
                content: 'Web Store',
                lang: language,
                isEnglish: language == 'en',
                language: {
                    layout: {
                        header: {
                            AboutUs: i18n.t('main.layout.header.About', { lang: language }),
                            Me: i18n.t('main.layout.header.Me', { lang: language }),
                            Whistlist: i18n.t('main.layout.header.Whistlist', { lang: language }),
                            OrderTracking: i18n.t('main.layout.header.OrderTracking', { lang: language }),
                            NeedHelp: i18n.t('main.layout.header.NeedHelp', { lang: language }),
                            CallUs: i18n.t('main.layout.header.CallUs', { lang: language }),
                            Compare: i18n.t('main.layout.header.Compare', { lang: language }),
                            Cart: i18n.t('main.layout.header.Cart', { lang: language }),
                            Account: i18n.t('main.layout.header.Account', { lang: language }),
                            Deals: i18n.t('main.layout.header.Deals', { lang: language }),
                            Home: i18n.t('main.layout.header.Home', { lang: language }),
                            About: i18n.t('main.layout.header.About', { lang: language }),
                            Shop: i18n.t('main.layout.header.Shop', { lang: language }),
                            Vendor: i18n.t('main.layout.header.Vendor', { lang: language }),
                            MegaMenu: i18n.t('main.layout.header.MegaMenu', { lang: language }),
                            Blog: i18n.t('main.layout.header.Blog', { lang: language }),
                            Pages: i18n.t('main.layout.header.Pages', { lang: language }),
                            Contact: i18n.t('main.layout.header.Contact', { lang: language }),
                            Support: i18n.t('main.layout.header.Support', { lang: language }),
                            MyVoucher: i18n.t('main.layout.header.MyVoucher', { lang: language }),
                            MyWishlist: i18n.t('main.layout.header.MyWishlist', { lang: language }),
                            Settings: i18n.t('main.layout.header.Settings', { lang: language }),
                            SignOut: i18n.t('main.layout.header.SignOut', { lang: language }),
                            AllCategory: i18n.t('main.layout.header.AllCategory', { lang: language }),
                        },
                        footer: {
                            WedStore: i18n.t('main.layout.footer.WedStore', { lang: language }),
                            Address: i18n.t('main.layout.footer.Address', { lang: language }),
                            CallUs: i18n.t('main.layout.footer.CallUs', { lang: language }),
                            Email: i18n.t('main.layout.footer.Email', { lang: language }),
                            Hour: i18n.t('main.layout.footer.Hour', { lang: language }),
                            orther: {
                                Company: {
                                    Company: i18n.t('main.layout.footer.orther.Company.Company', { lang: language }),
                                    Careers: i18n.t('main.layout.footer.orther.Company.Careers', { lang: language }),
                                    TermsConditions: i18n.t('main.layout.footer.orther.Company.TermsConditions', { lang: language }),
                                    PrivacyPolicy: i18n.t('main.layout.footer.orther.Company.PrivacyPolicy', { lang: language }),
                                    DeliveryInformation: i18n.t('main.layout.footer.orther.Company.DeliveryInformation', {
                                        lang: language,
                                    }),
                                    About: i18n.t('main.layout.footer.orther.Company.About', { lang: language }),
                                    Contact: i18n.t('main.layout.footer.orther.Company.Contact', { lang: language }),
                                },
                                Account: {
                                    SignIn: i18n.t('main.layout.footer.orther.Account.SignIn', { lang: language }),
                                    ViewCart: i18n.t('main.layout.footer.orther.Account.ViewCart', { lang: language }),
                                    MyWishlist: i18n.t('main.layout.footer.orther.Account.MyWishlist', { lang: language }),
                                    TrackMyOrder: i18n.t('main.layout.footer.orther.Account.TrackMyOrder', { lang: language }),
                                    HelpTicket: i18n.t('main.layout.footer.orther.Account.HelpTicket', { lang: language }),
                                    ShippingDetails: i18n.t('main.layout.footer.orther.Account.ShippingDetails', { lang: language }),
                                    CompareProducts: i18n.t('main.layout.footer.orther.Account.CompareProducts', { lang: language }),
                                },
                                Corporate: {
                                    BecomeVendor: i18n.t('main.layout.footer.orther.Corporate.BecomeVendor', { lang: language }),
                                    AffiliateProgram: i18n.t('main.layout.footer.orther.Corporate.AffiliateProgram', { lang: language }),
                                    FarmBusiness: i18n.t('main.layout.footer.orther.Corporate.FarmBusiness', { lang: language }),
                                    FarmCareers: i18n.t('main.layout.footer.orther.Corporate.FarmCareers', { lang: language }),
                                    OurSuppliers: i18n.t('main.layout.footer.orther.Corporate.OurSuppliers', { lang: language }),
                                    Accessibility: i18n.t('main.layout.footer.orther.Corporate.Accessibility', { lang: language }),
                                    Promotions: i18n.t('main.layout.footer.orther.Corporate.Promotions', { lang: language }),
                                },
                                Popular: {
                                    MilkAndFlavouredMilk: i18n.t('main.layout.footer.orther.Popular.MilkAndFlavouredMilk', {
                                        lang: language,
                                    }),
                                    ButterAndMargarine: i18n.t('main.layout.footer.orther.Popular.ButterAndMargarine', {
                                        lang: language,
                                    }),
                                    EggsSubstitutes: i18n.t('main.layout.footer.orther.Popular.EggsSubstitutes', { lang: language }),
                                    Marmalades: i18n.t('main.layout.footer.orther.Popular.Marmalades', { lang: language }),
                                    SourCreamandDips: i18n.t('main.layout.footer.orther.Popular.SourCreamandDips', { lang: language }),
                                    TeaAndKombucha: i18n.t('main.layout.footer.orther.Popular.TeaAndKombucha', { lang: language }),
                                    Cheese: i18n.t('main.layout.footer.orther.Popular.Cheese', { lang: language }),
                                },
                            },
                            install: {
                                Install: i18n.t('main.layout.footer.install.Install', { lang: language }),
                                LinkInstall: i18n.t('main.layout.footer.install.LinkInstall', { lang: language }),
                                Payment: i18n.t('main.layout.footer.install.Payment', { lang: language }),
                            },
                        },
                        validation: {},
                    },
                },
            },
        };
    }
    administrator() { }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(''),
    (0, common_1.Render)('pages/home/index'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(2, (0, common_1.Query)(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, _shared_1.PaginationQueryDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "root", null);
__decorate([
    (0, common_1.Get)('/:slugCategory'),
    (0, common_1.Render)('pages/categoryDetail/index'),
    openapi.ApiResponse({ status: 200, type: require("./module/product/dto/product-category.dto").ProductCategoryResponseDto }),
    __param(2, (0, common_1.Param)('slugCategory')),
    __param(3, (0, common_1.Query)(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, String, _shared_1.PaginationQueryDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findOneBySlug", null);
__decorate([
    (0, common_1.Get)('/vn'),
    (0, common_1.Render)('pages/home/index'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(2, (0, common_1.Query)(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, _shared_1.PaginationQueryDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "rootEn", null);
__decorate([
    (0, common_1.Get)('/administrator'),
    (0, common_1.Render)('administrator'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "administrator", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [_service_1.ProductCategoryService,
        _service_1.ProductService])
], AppController);
//# sourceMappingURL=app.controller.js.map