"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_unique_radnom_item_1 = __importDefault(require("../utils/get-unique-radnom-item"));
var get_source_name_1 = __importDefault(require("./get-source-name"));
function replacePlaceholder(placeholder, sources) {
    var openPlaceholder = placeholder.slice(1, -1);
    var sourceName = get_source_name_1.default(openPlaceholder);
    if (sourceName in sources) {
        return get_unique_radnom_item_1.default(sources[sourceName]);
    }
    return placeholder;
}
exports.default = replacePlaceholder;
//# sourceMappingURL=index.js.map