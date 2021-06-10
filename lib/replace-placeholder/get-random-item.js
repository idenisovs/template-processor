"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var history_check_passed_1 = __importDefault(require("./history-check-passed"));
function getRandomItem(list, useHistory) {
    if (useHistory === void 0) { useHistory = false; }
    var result;
    do {
        var rnd = Math.random() * (list.length - 1);
        var idx = Math.round(rnd);
        result = list[idx];
    } while (useHistory && !history_check_passed_1.default(result, list));
    return result;
}
exports.default = getRandomItem;
//# sourceMappingURL=get-random-item.js.map