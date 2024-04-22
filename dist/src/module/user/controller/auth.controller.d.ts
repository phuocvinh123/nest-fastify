import { I18nContext } from 'nestjs-i18n';
import { DefaultResponsesDto } from '@shared';
import { DefaultAuthResponseDto, ForgottenPasswordAuthRequestDto, LoginAuthRequestDto, ProfileAuthRequestDto, ProfileAuthResponseDto, RegisterAuthRequestDto, RestPasswordAuthRequestDto, UserResponseDto, ContactRequestDto, OTPConfirmationAuthRequestDto, DefaultForgottenPasswordResponseDto } from '@dto';
import { User } from '@model';
import { AuthService } from '@service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(i18n: I18nContext, createUserDto: RegisterAuthRequestDto): Promise<ProfileAuthResponseDto>;
    login(i18n: I18nContext, loginAuthDto: LoginAuthRequestDto): Promise<DefaultAuthResponseDto>;
    getProfile(i18n: I18nContext, user: User): Promise<UserResponseDto>;
    updateProfile(i18n: I18nContext, user: User, updateData: ProfileAuthRequestDto): Promise<DefaultAuthResponseDto>;
    refreshTokens(i18n: I18nContext, user: User): Promise<DefaultAuthResponseDto>;
    forgottenPassword(i18n: I18nContext, body: ForgottenPasswordAuthRequestDto): Promise<DefaultForgottenPasswordResponseDto>;
    OTPConfirmation(i18n: I18nContext, body: OTPConfirmationAuthRequestDto): Promise<DefaultForgottenPasswordResponseDto>;
    resetPassword(i18n: I18nContext, body: RestPasswordAuthRequestDto): Promise<DefaultResponsesDto>;
    logout(i18n: I18nContext, user: User): Promise<UserResponseDto>;
    sendEmailContact(i18n: I18nContext, body: ContactRequestDto): Promise<DefaultResponsesDto>;
}
