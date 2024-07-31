<script lang="ts">
	import { onMount } from 'svelte';
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	import Header from '../components/Header.svelte';
	import BigImg from '../components/BigIMG.svelte';
	import Footer from '../components/Footer.svelte';
	import ProductGrid from '../components/ProductGrid.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		AOS.init({
			duration: 1500
		});
	});
</script>

<body>
	<div class="wrapper">
		<Header />
		<BigImg />
	</div>
	<div class="main">
		<ProductGrid {data} />
	</div>

	<Footer />
</body>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

	body {
		margin: 0;
		background-color: black;
		font-family: Jost;
		.wrapper {
			height: 100vh;
		}
	}
</style>
