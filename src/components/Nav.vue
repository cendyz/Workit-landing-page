<template>
	<nav class="px-[1.25em] pt-[2em] flex justify-between items-center bg-purple-900">
		<img :src="logo" alt="workit" class="w-[5.985em]" />
		<a
			href="#"
			class="text-[1.8rem] underline decoration-[3px] underline-offset-8 decoration-green text-white font-bold"
			>Apply for access</a
		>
	</nav>
</template>

<script setup lang="ts">
import logo from '@/images/Logo.png'
</script>
