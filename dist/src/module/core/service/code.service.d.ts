import { BaseService } from '@shared';
import { Code } from '@model';
import { CodeRepository } from '@repository';
export declare const P_CODE_LISTED = "5d808d76-bf99-4a51-b4b6-d5aa37bdb398";
export declare const P_CODE_DETAIL = "eb510a79-4f75-4b14-a118-f036c1daa430";
export declare const P_CODE_CREATE = "a9574d5e-269d-44f9-a5bb-41cf06d7bdda";
export declare const P_CODE_UPDATE = "6d34b679-9c0e-489a-a2de-a17e37fadf72";
export declare const P_CODE_DELETE = "e21ac25b-1651-443e-9834-e593789807c9";
export declare class CodeService extends BaseService<Code> {
    repo: CodeRepository;
    constructor(repo: CodeRepository);
}
