"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomItem(list) {
    var rnd = Math.random() * (list.length - 1);
    var idx = Math.round(rnd);
    return list[idx];
}
exports.default = getRandomItem;
//# sourceMappingURL=get-random-item.js.map