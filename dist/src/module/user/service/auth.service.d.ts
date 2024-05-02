import { JwtService } from '@nestjs/jwt';
import { ContactRequestDto, ForgottenPasswordAuthRequestDto, LoginAuthRequestDto, OTPConfirmationAuthRequestDto, RegisterAuthRequestDto, RestPasswordAuthRequestDto } from '@dto';
import { BaseService } from '@shared';
import { User } from '@model';
import { UserRepository } from '@repository';
import { SchedulerRegistry } from '@nestjs/schedule';
export declare const P_AUTH_DELETE_IMAGE_TEMP = "11cc566b-b109-49f8-983f-84ff08f9849e";
export declare class AuthService extends BaseService<User> {
    readonly repo: UserRepository;
    private readonly jwtService;
    private schedulerRegistry;
    constructor(repo: UserRepository, jwtService: JwtService, schedulerRegistry: SchedulerRegistry);
    updateRefreshToken(userId: string, refreshToken: string): Promise<void>;
    getTokens(user: User, returnRefresh?: boolean): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(user: User): Promise<User | null>;
    forgottenPassword(body: ForgottenPasswordAuthRequestDto): Promise<string>;
    OTPConfirmation(body: OTPConfirmationAuthRequestDto): Promise<User>;
    sendMailContact(body: ContactRequestDto): Promise<boolean>;
    resetPassword({ email, otp, ...body }: RestPasswordAuthRequestDto): Promise<boolean>;
    login(body: LoginAuthRequestDto): Promise<User>;
    register(body: RegisterAuthRequestDto): Promise<User>;
}
