"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var history = new Map();
function historyCheckFailed(item, list, historySize) {
    if (historySize === void 0) { historySize = 5; }
    if (!history.has(list)) {
        history.set(list, [item]);
        return false;
    }
    if (list.length < 2) {
        return false;
    }
    var historyList = history.get(list);
    if (historyList.indexOf(item) !== -1) {
        return true;
    }
    historyList.push(item);
    var maxSize = Math.min(list.length, historySize) - 1;
    if (historyList.length >= maxSize) {
        historyList.shift();
    }
    return false;
}
exports.default = historyCheckFailed;
//# sourceMappingURL=history-check-failed.js.map