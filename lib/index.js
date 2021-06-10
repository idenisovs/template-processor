"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateProcessor = void 0;
var process_template_1 = __importDefault(require("./process-template"));
var TemplateProcessor = /** @class */ (function () {
    function TemplateProcessor(sources) {
        this.sources = sources;
    }
    TemplateProcessor.prototype.process = function (template) {
        return process_template_1.default(template, this.sources);
    };
    return TemplateProcessor;
}());
exports.TemplateProcessor = TemplateProcessor;
//# sourceMappingURL=index.js.map