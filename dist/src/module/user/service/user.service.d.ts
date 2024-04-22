import { CreateUserRequestDto, UpdateUserRequestDto } from '@dto';
import { User } from '@model';
import { UserRepository } from '@repository';
import { BaseService } from '@shared';
import { FileService } from '@service';
export declare const P_USER_LISTED = "ac0c4f13-776d-4b71-be4d-f9952734a319";
export declare const P_USER_DETAIL = "a9de3f3d-4c04-4f50-9d1b-c3c2e2eca6dc";
export declare const P_USER_CREATE = "41c9d4e1-ba5a-4850-ad52-35ac928a61d9";
export declare const P_USER_UPDATE = "bc0b5f32-ddf7-4c61-b435-384fc5ac7574";
export declare const P_USER_DELETE = "b82e6224-12c3-4e6c-b4e0-62495fb799bf";
export declare class UserService extends BaseService<User> {
    readonly repo: UserRepository;
    readonly fileService: FileService;
    constructor(repo: UserRepository, fileService: FileService);
    create(body: CreateUserRequestDto): Promise<User | null>;
    update(id: string, body: UpdateUserRequestDto | {
        isDisabled?: Date | null;
    }, callBack?: (data: User) => Promise<User>): Promise<User | null>;
    remove(id: string): Promise<User | null>;
}
