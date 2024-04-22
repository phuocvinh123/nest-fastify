import { DefaultResponsesDto, PaginationResponsesDto } from '@shared';
import { Building } from '@model';
declare const CreateBuildingRequestDto_base: import("@nestjs/common").Type<Pick<Building, never>>;
export declare class CreateBuildingRequestDto extends CreateBuildingRequestDto_base {
}
declare const UpdateBuildingRequestDto_base: import("@nestjs/common").Type<Partial<CreateBuildingRequestDto>>;
export declare class UpdateBuildingRequestDto extends UpdateBuildingRequestDto_base {
}
declare const BuildingDto_base: import("@nestjs/common").Type<Partial<Omit<Building, "isDeleted">>>;
export declare class BuildingDto extends BuildingDto_base {
}
declare const BuildingResponseDto_base: import("@nestjs/common").Type<Partial<DefaultResponsesDto>>;
export declare class BuildingResponseDto extends BuildingResponseDto_base {
    readonly data: BuildingDto | null;
}
declare const ListBuildingResponseDto_base: import("@nestjs/common").Type<Partial<PaginationResponsesDto>>;
export declare class ListBuildingResponseDto extends ListBuildingResponseDto_base {
    readonly data: BuildingDto[];
}
export {};
