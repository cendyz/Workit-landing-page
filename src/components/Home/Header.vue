<template>
	<header
		class="bg-purple-900 text-center px-[2rem] pt-[5.6rem] pb-[14.4rem] relative before:absolute before:bottom-[-3rem] before:left-1/2 before:w-[130%] before:translate-x-[-50%] before:h-[20rem] before:bg-purple-900 overflow-x-clip z-[5] md:before:bottom-[-9rem]  md:before:h-[30rem] md:before:w-[120vw] lg:before:bottom-[-18rem] lg:before:w-[138rem] xl:before:bottom-[-28rem] xl:before:h-[40rem] xl:before:w-[120vw]">
		<h1
			class="text-[4.8rem] text-white font-fraunces leading-[1.1] mb-[4rem] md:text-[6rem] md:px-[17rem] lg:px-[0] lg:mx-auto lg:w-[37rem] xl:text-[8rem] xl:w-[45rem]">
			Data
			<span class="underline decoration-[3px] underline-offset-8 decoration-green">tailored</span>
			to your needs.
		</h1>
		<button
			type="button"
			class="px-[3.2rem] py-[1.2rem] bg-green text-[1.6rem] md:text-[1.8rem] font-bold z-30 relative">
			Learn more
		</button>
		<picture>
			<source :srcset="tabletPhone" media="(min-width: 768px)" />
			<img
				:src="phone"
				alt="phone"
				class="w-[33rem] absolute bottom-[-10rem] left-1/2 translate-x-[-50%] z-10 md:w-[51rem] md:bottom-[-15rem] lg:w-[65rem] lg:bottom-[-27rem] xl:w-[90rem] xl:bottom-[-43rem]" />
		</picture>
		<picture>
			<source :srcset="deskTopRight" media="(min-width: 1024px)" />
			<img :src="right" alt="" class="hidden md:block absolute right-0 bottom-[11%]" aria-hidden="true" />
		</picture>
		<picture>
			<source :srcset="deskTopLeft" media="(min-width: 1024px)" />
			<img
				aria-hidden="true"
				:src="left"
				alt=""
				class="hidden md:block absolute left-0 top-[2%] lg:top-[8rem] lg:w-[20%] xl:w-[15%] xl:top-[13rem]" />
		</picture>
	</header>
</template>

<script setup lang="ts">
import phone from '@/images/illustration.png'
import right from '@/images/Group 10.png'
import left from '@/images/Group 10 left.png'
import tabletPhone from '@/images/phoneTablet.png'
import deskTopLeft from '@/images/deskTopLeft.png'
import deskTopRight from '@/images/desktopTopRight.png'
</script>

<style lang="scss">
header {
	&::before {
		clip-path: ellipse(50% 36% at 50% 63%);
	}
	@media (min-width: 768px) {
		&::before {
			clip-path: ellipse(50% 35% at 50% 50%);
		}
	}
	@media (min-width: 1024px) {
		&::before {
			clip-path: ellipse(49% 40% at 50% 50%);
		}
	}
}
</style>
