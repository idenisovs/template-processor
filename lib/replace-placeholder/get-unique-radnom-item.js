"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var history_check_failed_1 = __importDefault(require("./history-check-failed"));
var get_random_item_1 = __importDefault(require("./get-random-item"));
function getUniqueRandomItem(list) {
    var result;
    do {
        result = get_random_item_1.default(list);
    } while (history_check_failed_1.default(result, list));
    return result;
}
exports.default = getUniqueRandomItem;
//# sourceMappingURL=get-unique-radnom-item.js.map