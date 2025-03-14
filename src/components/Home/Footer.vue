<template>
	<footer class="p-[8rem] flex flex-col items-center md:mt-[6rem]">
		<div class="grid gap-y-[5.6rem]">
			<img :src="logo" alt="workit logo" />
			<div class="flex justify-between">
				<img
					:src="item.icon"
					::alt="`${item.alt} icon`"
					class="block"
					v-for="item in data" :key="nanoid()"/>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
import logo from '@/images/Logo2.png'
import facebook from '@/images/socmed-facebook.svg'
import twitter from '@/images/socmed-twitter.svg'
import instagram from '@/images/socmed-instagram.svg'
import { reactive } from 'vue'
import { nanoid } from 'nanoid'

const data = reactive({
	0: {
		icon: facebook,
		alt: 'facebook',
	},
	1: {
		icon: twitter,
		alt: 'twitter',
	},
	2: {
		icon: instagram,
		alt: 'instagram',
	},
})
</script>
