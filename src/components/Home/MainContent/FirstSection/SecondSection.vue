<template>
	<section class="grid px-[2rem] py-[9.2rem] pb-[0]">
		<img :src="guy" alt="Happy guy" class="mx-auto block" />
		<div
			class="bg-purple-900 p-[3.2rem] grid place-items-center gap-y-[3.2rem] mt-[-4.7rem]">
			<h3 class="text-white font-fraunces text-[3.2rem] leading-[1.2]">
				Be the first to test
			</h3>
			<p class="text-white leading-[1.8] text-center">
				Hi, I'm Louis Graham, the founder of the company. Book a demo call
				with me to become a beta tester for our app and kickstart your
				company. Apply for access below and I’ll be in touch to schedule a
				call.
			</p>
			<button
				class="px-[3.2rem] py-[1.2rem] bg-green text-[1.6rem] font-bold text-slate-900">
				Apply for access
			</button>
		</div>
	</section>
</template>

<script setup lang="ts">
import guy from '@/images/image-removebg-preview(363).png'
</script>

<style></style>
