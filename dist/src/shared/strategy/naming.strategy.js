"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamingStrategy = void 0;
const typeorm_1 = require("typeorm");
const StringUtils_1 = require("typeorm/util/StringUtils");
class NamingStrategy extends typeorm_1.DefaultNamingStrategy {
    tableName(targetName, userSpecifiedName) {
        return userSpecifiedName ? userSpecifiedName : (0, StringUtils_1.snakeCase)(targetName);
    }
    columnName(propertyName, customName, embeddedPrefixes) {
        return (0, StringUtils_1.snakeCase)(embeddedPrefixes.concat('').join('_')) + (customName ? customName : (0, StringUtils_1.snakeCase)(propertyName));
    }
    relationName(propertyName) {
        return (0, StringUtils_1.snakeCase)(propertyName);
    }
    joinColumnName(relationName, referencedColumnName) {
        return (0, StringUtils_1.snakeCase)(relationName + '_' + referencedColumnName);
    }
    joinTableName(firstTableName, secondTableName, firstPropertyName) {
        return (0, StringUtils_1.snakeCase)(firstTableName + '_' + firstPropertyName.replace(/\./gi, '_') + '_' + secondTableName);
    }
    joinTableColumnName(tableName, propertyName, columnName) {
        return (0, StringUtils_1.snakeCase)(tableName + '_' + (columnName ? columnName : propertyName));
    }
}
exports.NamingStrategy = NamingStrategy;
//# sourceMappingURL=naming.strategy.js.map