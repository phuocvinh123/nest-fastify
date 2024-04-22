import { DefaultNamingStrategy, NamingStrategyInterface } from 'typeorm';
export declare class NamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {
    tableName(targetName: string, userSpecifiedName: string): string;
    columnName(propertyName: string, customName: string, embeddedPrefixes: string[]): string;
    relationName(propertyName: string): string;
    joinColumnName(relationName: string, referencedColumnName: string): string;
    joinTableName(firstTableName: string, secondTableName: string, firstPropertyName: string): string;
    joinTableColumnName(tableName: string, propertyName: string, columnName?: string): string;
}
