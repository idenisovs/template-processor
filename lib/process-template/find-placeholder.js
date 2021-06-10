"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findPlaceholder(template) {
    var openingBraceIdx = template.indexOf('[');
    if (openingBraceIdx === -1) {
        return '';
    }
    var closingBraceIdx = template.indexOf(']', openingBraceIdx);
    if (closingBraceIdx === -1) {
        return '';
    }
    return template.substring(openingBraceIdx, closingBraceIdx + 1);
}
exports.default = findPlaceholder;
//# sourceMappingURL=find-placeholder.js.map