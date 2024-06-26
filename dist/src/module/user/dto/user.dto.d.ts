import { CodeDto, UserRoleDto } from '@dto';
import { User } from '@model';
import { DefaultResponsesDto, PaginationResponsesDto } from '@shared';
declare const LoginAuthRequestDto_base: import("@nestjs/common").Type<Pick<User, "email" | "password">>;
export declare class LoginAuthRequestDto extends LoginAuthRequestDto_base {
}
declare const RegisterAuthRequestDto_base: import("@nestjs/common").Type<Pick<User, "description" | "name" | "startDate" | "email" | "password" | "phoneNumber" | "dob">>;
export declare class RegisterAuthRequestDto extends RegisterAuthRequestDto_base {
    readonly retypedPassword: string;
}
declare const ContactRequestDto_base: import("@nestjs/common").Type<Pick<User, "description" | "email" | "phoneNumber">>;
export declare class ContactRequestDto extends ContactRequestDto_base {
    readonly firstName: string;
    readonly lastName: string;
}
declare const ProfileAuthRequestDto_base: import("@nestjs/common").Type<Pick<User, "description" | "name" | "email" | "password" | "avatar" | "phoneNumber" | "dob" | "positionCode">>;
export declare class ProfileAuthRequestDto extends ProfileAuthRequestDto_base {
    retypedPassword: string;
    passwordOld: string;
}
declare const ForgottenPasswordAuthRequestDto_base: import("@nestjs/common").Type<Pick<User, "email">>;
export declare class ForgottenPasswordAuthRequestDto extends ForgottenPasswordAuthRequestDto_base {
    notSendEmail: boolean;
}
declare const OTPConfirmationAuthRequestDto_base: import("@nestjs/common").Type<Pick<User, "email" | "otp">>;
export declare class OTPConfirmationAuthRequestDto extends OTPConfirmationAuthRequestDto_base {
}
declare const RestPasswordAuthRequestDto_base: import("@nestjs/common").Type<Pick<User, "email" | "password" | "otp">>;
export declare class RestPasswordAuthRequestDto extends RestPasswordAuthRequestDto_base {
    readonly retypedPassword: string;
}
declare const DefaultAuthResponseDto_base: import("@nestjs/common").Type<Partial<DefaultResponsesDto>>;
export declare class DefaultAuthResponseDto extends DefaultAuthResponseDto_base {
    readonly data: AuthDto;
}
declare const DefaultForgottenPasswordResponseDto_base: import("@nestjs/common").Type<Partial<DefaultResponsesDto>>;
export declare class DefaultForgottenPasswordResponseDto extends DefaultForgottenPasswordResponseDto_base {
    readonly data: string | boolean;
}
export declare class AuthDto {
    user: DefaultAuthResponsesUserDto;
    readonly accessToken: string;
    readonly refreshToken: string;
}
declare const DefaultAuthResponsesUserDto_base: import("@nestjs/common").Type<Partial<Omit<User, "position" | "password" | "role">>>;
export declare class DefaultAuthResponsesUserDto extends DefaultAuthResponsesUserDto_base {
    readonly position?: CodeDto;
    readonly role?: UserRoleDto;
}
declare const ProfileAuthResponseDto_base: import("@nestjs/common").Type<Partial<DefaultResponsesDto>>;
export declare class ProfileAuthResponseDto extends ProfileAuthResponseDto_base {
    readonly data: DefaultAuthResponsesUserDto;
}
declare const CreateUserRequestDto_base: import("@nestjs/common").Type<Pick<User, "description" | "name" | "startDate" | "email" | "password" | "avatar" | "phoneNumber" | "dob" | "roleCode" | "positionCode" | "dateLeave">>;
export declare class CreateUserRequestDto extends CreateUserRequestDto_base {
    retypedPassword: string;
}
declare const UpdateUserRequestDto_base: import("@nestjs/common").Type<Pick<User, "description" | "name" | "startDate" | "email" | "avatar" | "phoneNumber" | "dob" | "roleCode" | "positionCode" | "dateLeave">>;
export declare class UpdateUserRequestDto extends UpdateUserRequestDto_base {
}
declare const ListUserResponseDto_base: import("@nestjs/common").Type<Partial<PaginationResponsesDto>>;
export declare class ListUserResponseDto extends ListUserResponseDto_base {
    readonly data: User[];
}
declare const UserDto_base: import("@nestjs/common").Type<Partial<Omit<User, "isDeleted" | "createdAt" | "updatedAt" | "position" | "password" | "role">>>;
export declare class UserDto extends UserDto_base {
    readonly position: CodeDto;
    readonly role: UserRoleDto;
}
declare const UserResponseDto_base: import("@nestjs/common").Type<Partial<DefaultResponsesDto>>;
export declare class UserResponseDto extends UserResponseDto_base {
    readonly data: DefaultAuthResponsesUserDto | null;
}
export {};
