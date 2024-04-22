import { ClassTransformOptions } from 'class-transformer';
import { AccessTokenGuard, RefreshTokenGuard } from '@shared';
export declare function Auth({ summary, permission, serializeOptions, tokenGuard, }: {
    summary: string;
    permission?: string;
    serializeOptions?: ClassTransformOptions;
    tokenGuard?: typeof AccessTokenGuard | typeof RefreshTokenGuard;
}): MethodDecorator;
export declare const IS_PUBLIC_KEY = "isPublic";
export declare function Public({ summary, serializeOptions, }: {
    summary: string;
    serializeOptions?: ClassTransformOptions;
}): MethodDecorator;
