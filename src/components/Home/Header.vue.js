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
var illustration_png_1 = require("@/images/illustration.png");
var Group_10_png_1 = require("@/images/Group 10.png");
var Group_10_left_png_1 = require("@/images/Group 10 left.png");
var phoneTablet_png_1 = require("@/images/phoneTablet.png");
var deskTopLeft_png_1 = require("@/images/deskTopLeft.png");
var desktopTopRight_png_1 = require("@/images/desktopTopRight.png"); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)(__assign({ class: ("bg-purple-900 text-center px-[2rem] pt-[5.6rem] pb-[14.4rem] relative before:absolute before:bottom-[-3rem] before:left-1/2 before:w-[130%] before:translate-x-[-50%] before:h-[20rem] before:bg-purple-900 overflow-x-clip z-[5] md:before:bottom-[-9rem] md:before:w-[101.1rem] md:before:h-[30rem] lg:before:bottom-[-18rem] lg:before:w-[138rem] xl:before:w-[173rem] xl:before:bottom-[-28rem] xl:before:h-[40rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: ("text-[4.8rem] text-white font-fraunces leading-[1.1] mb-[4rem] md:text-[6rem] md:px-[17rem] lg:px-[0] lg:mx-auto lg:w-[37rem] xl:text-[8rem] xl:w-[45rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("underline decoration-[3px] underline-offset-8 decoration-green") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ type: ("button") }, { class: ("px-[3.2rem] py-[1.2rem] bg-green text-[1.6rem] md:text-[1.8rem] font-bold z-30 relative") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.picture, __VLS_intrinsicElements.picture)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.source)({
        srcset: ((__VLS_ctx.tabletPhone)),
        media: ("(min-width: 768px)"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.phone)), alt: ("phone") }, { class: ("w-[33rem] absolute bottom-[-10rem] left-1/2 translate-x-[-50%] z-10 md:w-[51rem] md:bottom-[-15rem] lg:w-[65rem] lg:bottom-[-27rem] xl:w-[90rem] xl:bottom-[-43rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.picture, __VLS_intrinsicElements.picture)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.source)({
        srcset: ((__VLS_ctx.deskTopRight)),
        media: ("(min-width: 1024px)"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign(__assign({ src: ((__VLS_ctx.right)), alt: ("") }, { class: ("hidden md:block absolute right-0 bottom-[11%]") }), { 'aria-hidden': ("true") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.picture, __VLS_intrinsicElements.picture)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.source)({
        srcset: ((__VLS_ctx.deskTopLeft)),
        media: ("(min-width: 1024px)"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ 'aria-hidden': ("true"), src: ((__VLS_ctx.left)), alt: ("") }, { class: ("hidden md:block absolute left-0 top-[2%] lg:top-[8rem] lg:w-[20%] xl:w-[15%] xl:top-[13rem]") }));
    ['bg-purple-900', 'text-center', 'px-[2rem]', 'pt-[5.6rem]', 'pb-[14.4rem]', 'relative', 'before:absolute', 'before:bottom-[-3rem]', 'before:left-1/2', 'before:w-[130%]', 'before:translate-x-[-50%]', 'before:h-[20rem]', 'before:bg-purple-900', 'overflow-x-clip', 'z-[5]', 'md:before:bottom-[-9rem]', 'md:before:w-[101.1rem]', 'md:before:h-[30rem]', 'lg:before:bottom-[-18rem]', 'lg:before:w-[138rem]', 'xl:before:w-[173rem]', 'xl:before:bottom-[-28rem]', 'xl:before:h-[40rem]', 'text-[4.8rem]', 'text-white', 'font-fraunces', 'leading-[1.1]', 'mb-[4rem]', 'md:text-[6rem]', 'md:px-[17rem]', 'lg:px-[0]', 'lg:mx-auto', 'lg:w-[37rem]', 'xl:text-[8rem]', 'xl:w-[45rem]', 'underline', 'decoration-[3px]', 'underline-offset-8', 'decoration-green', 'px-[3.2rem]', 'py-[1.2rem]', 'bg-green', 'text-[1.6rem]', 'md:text-[1.8rem]', 'font-bold', 'z-30', 'relative', 'w-[33rem]', 'absolute', 'bottom-[-10rem]', 'left-1/2', 'translate-x-[-50%]', 'z-10', 'md:w-[51rem]', 'md:bottom-[-15rem]', 'lg:w-[65rem]', 'lg:bottom-[-27rem]', 'xl:w-[90rem]', 'xl:bottom-[-43rem]', 'hidden', 'md:block', 'absolute', 'right-0', 'bottom-[11%]', 'hidden', 'md:block', 'absolute', 'left-0', 'top-[2%]', 'lg:top-[8rem]', 'lg:w-[20%]', 'xl:w-[15%]', 'xl:top-[13rem]',];
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
            phone: illustration_png_1.default,
            right: Group_10_png_1.default,
            left: Group_10_left_png_1.default,
            tabletPhone: phoneTablet_png_1.default,
            deskTopLeft: deskTopLeft_png_1.default,
            deskTopRight: desktopTopRight_png_1.default,
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
