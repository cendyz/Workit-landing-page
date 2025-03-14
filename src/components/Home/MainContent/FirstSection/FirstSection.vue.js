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
var vue_1 = require("vue");
var nanoid_1 = require("nanoid");
var data = (0, vue_1.reactive)({
    0: {
        num: 1,
        title: 'Actionable insights',
        desc: 'Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics.',
    },
    1: {
        num: 2,
        title: 'Data-driven decisions',
        desc: 'Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data.',
    },
    2: {
        num: 3,
        title: 'Always affordable',
        desc: 'Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees.',
    },
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ class: ("grid gap-y-[3.2rem] pt-[14.7rem] px-[2rem] relative bg-purple-100 z-[2] before:absolute before:bottom-[-3rem] before:left-1/2 before:translate-x-[-50%] before:h-[20rem] before:bg-purple-100 before:w-[120vw] overflow-x-clip md:px-[4.4rem] md:pt-[19.6rem] md:pb-[4.4rem] md:before:bottom-[-10rem] md:before:h-[30rem] lg:pt-[40rem] lg:flex lg:justify-center xl:pt-[60rem] xl:gap-x-[3rem] xl:before:bottom-[-20rem] xl:before:h-[40rem]") }));
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.data)); _i < _a.length; _i++) {
        var item = _a[_i][0];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex flex-col items-center md:flex-row md:gap-x-[5.6rem] md:justify-center z-40 lg:flex-col xl:w-[36rem]") }, { key: ((__VLS_ctx.nanoid())) }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("w-[5.8rem] h-[5.8rem] flex items-center justify-center border rounded-full border-purple-500 mb-[2.4rem] md:mb-0") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("md:mb-0 font-fraunces xl:text-[2.8rem] xl:pb-[.5rem]") }));
        (item.num);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("text-center md:text-left md:w-[57.6rem] lg:w-fit lg:text-center lg:mt-[5rem]") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: ("font-fraunces text-[2.4rem] leading-[1.2] text-purple-900 mb-[1.6rem] xl:text-[3.2rem]") }));
        (item.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-purple-900 leading-[1.8] z-[15] relative xl:text-[1.8rem]") }));
        (item.desc);
    }
    ['grid', 'gap-y-[3.2rem]', 'pt-[14.7rem]', 'px-[2rem]', 'relative', 'bg-purple-100', 'z-[2]', 'before:absolute', 'before:bottom-[-3rem]', 'before:left-1/2', 'before:translate-x-[-50%]', 'before:h-[20rem]', 'before:bg-purple-100', 'before:w-[120vw]', 'overflow-x-clip', 'md:px-[4.4rem]', 'md:pt-[19.6rem]', 'md:pb-[4.4rem]', 'md:before:bottom-[-10rem]', 'md:before:h-[30rem]', 'lg:pt-[40rem]', 'lg:flex', 'lg:justify-center', 'xl:pt-[60rem]', 'xl:gap-x-[3rem]', 'xl:before:bottom-[-20rem]', 'xl:before:h-[40rem]', 'flex', 'flex-col', 'items-center', 'md:flex-row', 'md:gap-x-[5.6rem]', 'md:justify-center', 'z-40', 'lg:flex-col', 'xl:w-[36rem]', 'w-[5.8rem]', 'h-[5.8rem]', 'flex', 'items-center', 'justify-center', 'border', 'rounded-full', 'border-purple-500', 'mb-[2.4rem]', 'md:mb-0', 'md:mb-0', 'font-fraunces', 'xl:text-[2.8rem]', 'xl:pb-[.5rem]', 'text-center', 'md:text-left', 'md:w-[57.6rem]', 'lg:w-fit', 'lg:text-center', 'lg:mt-[5rem]', 'font-fraunces', 'text-[2.4rem]', 'leading-[1.2]', 'text-purple-900', 'mb-[1.6rem]', 'xl:text-[3.2rem]', 'text-purple-900', 'leading-[1.8]', 'z-[15]', 'relative', 'xl:text-[1.8rem]',];
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
