import { I18nContext } from 'nestjs-i18n';
import { CodeType } from '@model';
import { CodeTypeRepository } from '@repository';
import { BaseService } from '@shared';
export declare const P_CODE_TYPE_LISTED = "2a71d57d-7c2d-49ad-a7e9-3cd4aace132f";
export declare const P_CODE_TYPE_DETAIL = "7af26c77-e81f-4875-89df-9d4c2fa3ce52";
export declare const P_CODE_TYPE_CREATE = "45f014c0-9ebe-497e-9766-2054ebb7e1d5";
export declare const P_CODE_TYPE_UPDATE = "fdb47b79-1a6e-49be-8f5b-8525a547534a";
export declare const P_CODE_TYPE_DELETE = "f16e2bc7-12b9-446e-b53b-a2597ca0ad3a";
export declare class CodeTypeService extends BaseService<CodeType> {
    repo: CodeTypeRepository;
    constructor(repo: CodeTypeRepository);
    findOneCode(code: string, i18n: I18nContext): Promise<CodeType>;
}
