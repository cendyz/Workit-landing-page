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
var Logo2_png_1 = require("@/images/Logo2.png");
var socmed_facebook_svg_1 = require("@/images/socmed-facebook.svg");
var socmed_twitter_svg_1 = require("@/images/socmed-twitter.svg");
var socmed_instagram_svg_1 = require("@/images/socmed-instagram.svg");
var vue_1 = require("vue");
var nanoid_1 = require("nanoid");
var data = (0, vue_1.reactive)({
    0: {
        icon: socmed_facebook_svg_1.default,
        alt: 'facebook',
    },
    1: {
        icon: socmed_twitter_svg_1.default,
        alt: 'twitter',
    },
    2: {
        icon: socmed_instagram_svg_1.default,
        alt: 'instagram',
    },
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)(__assign({ class: ("p-[8rem] flex flex-col items-center md:mt-[6rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("grid gap-y-[5.6rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
        src: ((__VLS_ctx.logo)),
        alt: ("workit logo"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex justify-between") }));
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.data)); _i < _a.length; _i++) {
        var item = _a[_i][0];
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign(__assign({ src: ((item.icon)), ':alt': (("".concat(item.alt, " icon"))) }, { class: ("block") }), { key: ((__VLS_ctx.nanoid())) }));
    }
    ['p-[8rem]', 'flex', 'flex-col', 'items-center', 'md:mt-[6rem]', 'grid', 'gap-y-[5.6rem]', 'flex', 'justify-between', 'block',];
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
            logo: Logo2_png_1.default,
            nanoid: nanoid_1.nanoid,
            data: data,
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
