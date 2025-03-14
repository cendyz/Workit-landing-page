<template>
	<Nav />
	<Header />
	<Main />
	<Footer />
</template>

<script setup lang="ts">
import Nav from './components/Nav.vue'
import Header from './components/Home/Header.vue';
import Main from './components/Home/MainContent/Main.vue';
import Footer from './components/Home/Footer.vue';
</script>

<style lang="scss">
@use './sass/reset.scss';

</style>
