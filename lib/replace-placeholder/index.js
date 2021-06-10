"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_random_item_1 = __importDefault(require("./get-random-item"));
function replacePlaceholder(placeholder, sources) {
    var sourceName = placeholder.slice(1, -1);
    if (sourceName in sources) {
        return get_random_item_1.default(sources[sourceName]);
    }
    return placeholder;
}
exports.default = replacePlaceholder;
//# sourceMappingURL=index.js.map