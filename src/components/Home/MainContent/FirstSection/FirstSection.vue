<template>
	<section
		class="grid gap-y-[3.2rem] pt-[14.7rem] px-[2rem] relative bg-purple-100 z-[2] before:absolute before:bottom-[-3rem] before:left-1/2 before:translate-x-[-50%] before:h-[20rem] before:bg-purple-100 before:w-[120vw] overflow-x-clip md:px-[4.4rem] md:pt-[19.6rem] md:pb-[4.4rem] md:before:bottom-[-10rem] md:before:h-[30rem] lg:pt-[40rem] lg:flex lg:justify-center xl:pt-[60rem] xl:gap-x-[3rem] xl:before:bottom-[-20rem] xl:before:h-[40rem]">
		<div
			class="flex flex-col items-center md:flex-row md:gap-x-[5.6rem] md:justify-center z-40 lg:flex-col xl:w-[36rem]"
			v-for="item in data"
			:key="nanoid()">
			<div
				class="w-[5.8rem] h-[5.8rem] flex items-center justify-center border rounded-full border-purple-500 mb-[2.4rem] md:mb-0">
				<p class="md:mb-0 font-fraunces xl:text-[2.8rem] xl:pb-[.5rem]">
					{{ item.num }}
				</p>
			</div>
			<div class="text-center md:text-left md:w-[57.6rem] lg:w-fit lg:text-center lg:mt-[5rem]">
				<h2 class="font-fraunces text-[2.4rem] leading-[1.2] text-purple-900 mb-[1.6rem] xl:text-[3.2rem]">
					{{ item.title }}
				</h2>
				<p class="text-purple-900 leading-[1.8] z-[15] relative xl:text-[1.8rem]">
					{{ item.desc }}
				</p>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { nanoid } from 'nanoid'

const data = reactive({
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
})
</script>

<style scoped lang="scss">
section {
	&::before {
		clip-path: ellipse(50% 36% at 50% 63%);
	}
}

@media (min-width: 798px) {
	section {
		&::before {
			clip-path: ellipse(50% 35% at 50% 50%);
		}
	}
}
</style>
