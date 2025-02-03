<template>
	<nav
		class="px-[2rem] pt-[3.2rem] bg-purple-900 relative z-10 md:pt-[3.2rem] md:px-[4.4rem] z-100">
		<div class="flex justify-between items-center container">
			<img :src="logo" alt="workit" class="w-[9.6rem]" />
			<a
				href="#"
				class="text-[1.8rem] underline decoration-[3px] underline-offset-8 decoration-green text-white font-bold z-100"
				>Apply for access</a
			>
		</div>
	</nav>
</template>

<script setup lang="ts">
import logo from '@/images/Logo.png'
</script>
