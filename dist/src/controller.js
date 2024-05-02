"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./app.controller"), exports);
__exportStar(require("./module/core/controller/code.controller"), exports);
__exportStar(require("./module/core/controller/code-type.controller"), exports);
__exportStar(require("./module/core/controller/data.controller"), exports);
__exportStar(require("./module/core/controller/data-type.controller"), exports);
__exportStar(require("./module/core/controller/file.controller"), exports);
__exportStar(require("./module/core/controller/parameter.controller"), exports);
__exportStar(require("./module/core/controller/post.controller"), exports);
__exportStar(require("./module/core/controller/post-type.controller"), exports);
__exportStar(require("./module/user/controller/auth.controller"), exports);
__exportStar(require("./module/user/controller/address-province.controller"), exports);
__exportStar(require("./module/user/controller/address-district.controller"), exports);
__exportStar(require("./module/user/controller/address-ward.controller"), exports);
__exportStar(require("./module/user/controller/address.controller"), exports);
__exportStar(require("./module/user/controller/user.controller"), exports);
__exportStar(require("./module/user/controller/user-role.controller"), exports);
//# sourceMappingURL=controller.js.map