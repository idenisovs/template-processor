"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_random_item_1 = __importDefault(require("../utils/get-random-item"));
function getSourceName(placeholder) {
    if (placeholder.indexOf('|') === -1) {
        return placeholder;
    }
    var sources = placeholder.split('|');
    return get_random_item_1.default(sources).trim();
}
exports.default = getSourceName;
//# sourceMappingURL=get-source-name.js.map