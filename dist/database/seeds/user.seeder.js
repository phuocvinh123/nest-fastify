"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSeeder = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const _model_1 = require("../../src/model");
const _service_1 = require("../../src/service");
class UserSeeder {
    async run(dataSource, factoryManager) {
        const dataRoleSuperAdmin = {
            name: 'Super Admin',
            code: 'super_admin',
            permissions: [
                _service_1.P_AUTH_DELETE_IMAGE_TEMP,
                _service_1.P_CODE_TYPE_LISTED,
                _service_1.P_CODE_TYPE_DETAIL,
                _service_1.P_CODE_TYPE_CREATE,
                _service_1.P_CODE_TYPE_UPDATE,
                _service_1.P_CODE_TYPE_DELETE,
                _service_1.P_CODE_LISTED,
                _service_1.P_CODE_DETAIL,
                _service_1.P_CODE_CREATE,
                _service_1.P_CODE_UPDATE,
                _service_1.P_CODE_DELETE,
                _service_1.P_USER_ROLE_LISTED,
                _service_1.P_USER_ROLE_DETAIL,
                _service_1.P_USER_ROLE_CREATE,
                _service_1.P_USER_ROLE_UPDATE,
                _service_1.P_USER_ROLE_DELETE,
                _service_1.P_USER_LISTED,
                _service_1.P_USER_DETAIL,
                _service_1.P_USER_CREATE,
                _service_1.P_USER_DELETE,
                _service_1.P_USER_UPDATE,
                _service_1.P_DATA_TYPE_LISTED,
                _service_1.P_DATA_TYPE_CREATE,
                _service_1.P_DATA_TYPE_UPDATE,
                _service_1.P_DATA_TYPE_DELETE,
                _service_1.P_DATA_LISTED,
                _service_1.P_DATA_CREATE,
                _service_1.P_DATA_UPDATE,
                _service_1.P_DATA_DELETE,
                _service_1.P_PARAMETER_CREATE,
                _service_1.P_PARAMETER_DELETE,
                _service_1.P_PARAMETER_LISTED,
                _service_1.P_PARAMETER_UPDATE,
                _service_1.P_POST_CREATE,
                _service_1.P_POST_DELETE,
                _service_1.P_POST_LISTED,
                _service_1.P_POST_UPDATE,
                _service_1.P_POST_TYPE_CREATE,
                _service_1.P_POST_TYPE_DELETE,
                _service_1.P_POST_TYPE_LISTED,
                _service_1.P_POST_TYPE_UPDATE,
                _service_1.P_ADDRESS_CREATE,
                _service_1.P_ADDRESS_UPDATE,
                _service_1.P_ADDRESS_DELETE,
            ],
            isSystemAdmin: false,
        };
        const repoRole = dataSource.getRepository(_model_1.UserRole);
        const roleSuperAdminExists = await repoRole
            .createQueryBuilder('base')
            .andWhere(`base.name=:name`, { name: dataRoleSuperAdmin.name })
            .getOne();
        if (!roleSuperAdminExists) {
            const newDataRoleSuperAdmin = repoRole.create(dataRoleSuperAdmin);
            await repoRole.save(newDataRoleSuperAdmin);
            const repository = dataSource.getRepository(_model_1.User);
            const data = await factoryManager.get(_model_1.User).make({
                email: 'admin@admin.com',
                avatar: 'https://hinhanhdep.org/wp-content/uploads/2016/07/anh-avatar-girl-xinh.jpg',
                roleCode: newDataRoleSuperAdmin.code,
            });
            if ((0, dayjs_1.default)().endOf('year').toDate().toDateString() === (0, dayjs_1.default)(data.startDate).endOf('year').toDate().toDateString()) {
                data.dateLeave = (0, dayjs_1.default)().diff((0, dayjs_1.default)(data.startDate), 'months');
            }
            else {
                data.dateLeave = (0, dayjs_1.default)().startOf('year').diff((0, dayjs_1.default)(data.startDate), 'months');
            }
            const dataExists = await repository
                .createQueryBuilder('base')
                .andWhere(`base.email=:email`, { email: data.email })
                .getOne();
            if (!dataExists) {
                const newData = repository.create(data);
                await repository.save(newData);
            }
        }
    }
}
exports.UserSeeder = UserSeeder;
//# sourceMappingURL=user.seeder.js.map