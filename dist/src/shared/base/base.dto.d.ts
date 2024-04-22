export declare class DefaultResponsesDto {
    message: string;
}
export declare class PaginationQueryDto {
    perPage?: number;
    page?: number;
    filter?: string;
    sorts?: string;
    extend?: string | object;
    skip?: string | object;
    fullTextSearch?: string;
    where?: object[];
    array?: string[];
}
declare const PaginationResponsesDto_base: import("@nestjs/common").Type<Partial<DefaultResponsesDto>>;
export declare class PaginationResponsesDto extends PaginationResponsesDto_base {
    count: number;
}
export {};
