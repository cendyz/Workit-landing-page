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
var image_removebg_preview_363__png_1 = require("@/images/image-removebg-preview(363).png");
var tablet_down_lines_png_1 = require("@/images/tablet down lines.png");
var deskavatar_png_1 = require("@/images/deskavatar.png"); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ class: ("grid px-[2rem] py-[9.2rem] pb-[0] relative container lg:mt-[8rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.picture, __VLS_intrinsicElements.picture)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.source)({
        srcset: ((__VLS_ctx.guyDesktop)),
        media: ("(min-width: 1280px)"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.guy)), alt: ("Happy guy") }, { class: ("mx-auto block md:mr-auto md:ml-0 lg:w-[474px]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("bg-purple-900 p-[3.2rem] grid place-items-center gap-y-[3.2rem] mt-[-4.7rem] md:w-[55rem] md:ml-auto md:mt-[-11rem] md:justify-items-start md:p-[4.8rem] lg:w-[60rem] lg:mt-[-30rem] lg:p-[6.4rem] xl:w-[85rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: ("text-white font-fraunces text-[3.2rem] leading-[1.2] md:text-[5rem] xl:text-[5.6rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-white leading-[1.8] text-center md:text-left md:text-[1.7rem] md:pr-[1.6rem] lg:text-[1.8rem] lg:pr-0 xl:text-[2.2rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ class: ("px-[3.2rem] py-[1.2rem] bg-green text-[1.6rem] md:text-[1.8rem] font-bold text-slate-900 xl:text-[2.2rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.downLines)), 'aria-hidden': ("true"), alt: ("") }, { class: ("hidden md:block absolute bottom-[-11rem] right-[4rem] lg:right-[7rem] xl:right-[17rem] xl:bottom-[-8rem]") }));
    ['grid', 'px-[2rem]', 'py-[9.2rem]', 'pb-[0]', 'relative', 'container', 'lg:mt-[8rem]', 'mx-auto', 'block', 'md:mr-auto', 'md:ml-0', 'lg:w-[474px]', 'bg-purple-900', 'p-[3.2rem]', 'grid', 'place-items-center', 'gap-y-[3.2rem]', 'mt-[-4.7rem]', 'md:w-[55rem]', 'md:ml-auto', 'md:mt-[-11rem]', 'md:justify-items-start', 'md:p-[4.8rem]', 'lg:w-[60rem]', 'lg:mt-[-30rem]', 'lg:p-[6.4rem]', 'xl:w-[85rem]', 'text-white', 'font-fraunces', 'text-[3.2rem]', 'leading-[1.2]', 'md:text-[5rem]', 'xl:text-[5.6rem]', 'text-white', 'leading-[1.8]', 'text-center', 'md:text-left', 'md:text-[1.7rem]', 'md:pr-[1.6rem]', 'lg:text-[1.8rem]', 'lg:pr-0', 'xl:text-[2.2rem]', 'px-[3.2rem]', 'py-[1.2rem]', 'bg-green', 'text-[1.6rem]', 'md:text-[1.8rem]', 'font-bold', 'text-slate-900', 'xl:text-[2.2rem]', 'hidden', 'md:block', 'absolute', 'bottom-[-11rem]', 'right-[4rem]', 'lg:right-[7rem]', 'xl:right-[17rem]', 'xl:bottom-[-8rem]',];
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
            guy: image_removebg_preview_363__png_1.default,
            downLines: tablet_down_lines_png_1.default,
            guyDesktop: deskavatar_png_1.default,
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
