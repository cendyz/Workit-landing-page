<template>
	<header
		class="bg-purple-900 text-center px-[2rem] pt-[5.6rem] pb-[16.8rem] relative before:absolute before:bottom-[-3rem] before:left-1/2 before:w-[130%] before:translate-x-[-50%] before:h-[20rem] before:bg-purple-900">
		<h1
			class="text-[4.8rem] text-white font-fraunces font-thin leading-[1.1] mb-[4rem]">
			Data
			<span
				class="underline decoration-[3px] underline-offset-8 decoration-green"
				>tailored</span
			>
			to your needs.
		</h1>
		<button
			type="button"
			class="px-[3.2rem] py-[1.2rem] bg-green text-[1.6rem] font-bold">
			Learn more
		</button>
		<img
			:src="phone"
			alt="phone"
			class="w-[33rem] absolute bottom-[-10rem] left-1/2 translate-x-[-50%]" />
	</header>
</template>

<script setup lang="ts">
import phone from '@/images/illustration.png'
</script>

<style lang="scss">
header {
	&::before {
		clip-path: ellipse(50% 36% at 50% 63%);
	}
}
</style>
