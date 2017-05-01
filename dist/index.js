"use strict";
exports.__esModule = true;
var vue_class_component_1 = require("vue-class-component");
vue_class_component_1["default"].registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'asyncData',
    'fetch',
    'middleware',
    'layout',
    'transition',
    'scrollToTop'
]);
exports["default"] = vue_class_component_1["default"];
