"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Logo_png_1 = require("@/images/Logo.png"); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)(__assign({ class: ("px-[2rem] pt-[3.2rem] bg-purple-900 relative z-10 md:pt-[3.2rem] md:px-[4.4rem] z-100") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex justify-between items-center container") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.logo)), alt: ("workit") }, { class: ("w-[9.6rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ href: ("#") }, { class: ("text-[1.8rem] underline decoration-[3px] underline-offset-8 decoration-green text-white font-bold z-100") }));
    ['px-[2rem]', 'pt-[3.2rem]', 'bg-purple-900', 'relative', 'z-10', 'md:pt-[3.2rem]', 'md:px-[4.4rem]', 'z-100', 'flex', 'justify-between', 'items-center', 'container', 'w-[9.6rem]', 'text-[1.8rem]', 'underline', 'decoration-[3px]', 'underline-offset-8', 'decoration-green', 'text-white', 'font-bold', 'z-100',];
    var __VLS_slots;
    var $slots;
    var __VLS_inheritedAttrs;
    var $attrs;
    var __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            logo: Logo_png_1.default,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
