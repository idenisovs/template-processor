"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var find_placeholder_1 = __importDefault(require("./find-placeholder"));
var replace_placeholder_1 = __importDefault(require("../replace-placeholder"));
function processTemplate(template, sources) {
    var tmp = template;
    var placeholder;
    while (placeholder = find_placeholder_1.default(tmp)) {
        tmp = tmp.replace(placeholder, replace_placeholder_1.default(placeholder, sources));
    }
    return tmp;
}
exports.default = processTemplate;
//# sourceMappingURL=index.js.map