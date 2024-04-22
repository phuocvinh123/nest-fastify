import { FastifyReply, FastifyRequest } from 'fastify';
import { StreamableFile } from '@nestjs/common';
import { I18nContext } from 'nestjs-i18n';
import { FileResponseDto, ListFileResponseDto } from '@dto';
import { User } from '@model';
import { FileService } from '@service';
import { PaginationQueryDto } from '@shared';
export declare class FileController {
    private readonly service;
    constructor(service: FileService);
    findAll(i18n: I18nContext, paginationQuery: PaginationQueryDto): Promise<ListFileResponseDto>;
    create(i18n: I18nContext, req: FastifyRequest, user: User): Promise<FileResponseDto>;
    stream(userId: string, name: string, res: FastifyReply): Promise<StreamableFile | undefined>;
    remove(i18n: I18nContext, url: string): Promise<FileResponseDto>;
}
