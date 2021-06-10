"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var history = new Map();
function historyCheckPassed(item, list, historySize) {
    if (historySize === void 0) { historySize = 5; }
    if (!history.has(list)) {
        history.set(list, [item]);
        return true;
    }
    var historyList = history.get(list);
    if (historyList.indexOf(item) !== -1) {
        return false;
    }
    var maxSize = Math.min(list.length, historySize);
    if (historyList.length >= maxSize) {
        historyList.shift();
    }
}
exports.default = historyCheckPassed;
//# sourceMappingURL=history-check-passed.js.map