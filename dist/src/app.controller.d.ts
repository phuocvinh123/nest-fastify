import { ProductCategoryService, ProductService } from '@service';
import { ProductCategoryResponseDto } from '@dto';
import { PaginationQueryDto } from '@shared';
export declare class AppController {
    private readonly categoryService;
    private readonly productService;
    constructor(categoryService: ProductCategoryService, productService: ProductService);
    root(language: string | undefined, urlLang: string | undefined, paginationQuery: PaginationQueryDto): Promise<any>;
    findOneBySlug(language: string | undefined, urlLang: string | undefined, slugCategory: string, paginationQuery: PaginationQueryDto): Promise<ProductCategoryResponseDto>;
    rootEn(language: string | undefined, urlLang: string | undefined, paginationQuery: PaginationQueryDto): Promise<any>;
    common(language: string): Promise<any>;
    administrator(): void;
}
