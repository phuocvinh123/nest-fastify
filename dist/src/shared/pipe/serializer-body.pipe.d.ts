import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class SerializerBody implements PipeTransform {
    private group?;
    constructor(group?: string[] | undefined);
    transform(value: object, { metatype }: ArgumentMetadata): Promise<object>;
}
