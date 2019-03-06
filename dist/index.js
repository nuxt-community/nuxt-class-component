"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_class_component_1 = __importStar(require("vue-class-component"));
exports.default = vue_class_component_1.default;
exports.mixins = vue_class_component_1.mixins;
var vuex_class_1 = require("vuex-class");
exports.State = vuex_class_1.State;
exports.Getter = vuex_class_1.Getter;
exports.Action = vuex_class_1.Action;
exports.Mutation = vuex_class_1.Mutation;
exports.namespace = vuex_class_1.namespace;
vue_class_component_1.default.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'asyncData',
    'fetch',
    'head',
    'middleware',
    'layout',
    'transition',
    'scrollToTop',
    'validate'
]);
//# sourceMappingURL=index.js.map