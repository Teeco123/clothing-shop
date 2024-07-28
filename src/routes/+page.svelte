<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let load = false;

	onMount(() => {
		load = true;
	});
</script>

<body>
	<div class="header">
		<div class="nav">
			{#if load}
				<a href="/" transition:fade={{ delay: 250, duration: 500 }}>HUJ</a>
				<a href="/" transition:fade={{ delay: 250, duration: 500 }}>GOWNO</a>
				<a href="/" transition:fade={{ delay: 250, duration: 500 }}>DUPA</a>
				<a href="/" transition:fade={{ delay: 250, duration: 500 }}>CIPA</a>
			{/if}
		</div>
		{#if load}
			<div class="logo" transition:fade={{ delay: 250, duration: 500 }}>GOWNO</div>
		{/if}
		<div class="menu">
			{#if load}
				<div class="search" transition:fade={{ delay: 250, duration: 500 }}>
					<enhanced:img class="img" src="/static/search.png" alt="search" />
				</div>
				<div class="profile" transition:fade={{ delay: 250, duration: 500 }}>
					<enhanced:img class="img" src="/static/profile.png" alt="profile" />
				</div>
				<div class="bag" transition:fade={{ delay: 250, duration: 500 }}>
					<enhanced:img class="img" src="/static/shopping_bag.png" alt="shopping bag" />
				</div>
			{/if}
		</div>
	</div></body
>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

	body {
		margin: 0;
		background-color: grey;
		font-family: Jost;
		.header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: black;
			height: 180px;
			color: white;
			.nav {
				display: flex;
				justify-content: flex-start;
				margin-left: 2%;
				width: 100%;
				a {
					margin: 0 5%;
					text-decoration: none;
					color: white;
				}
			}
			.logo {
				display: flex;
				justify-content: center;
				width: 100%;
			}
			.menu {
				display: flex;
				justify-content: flex-end;
				margin-right: 2%;
				width: 100%;
				.search {
					display: flex;
					align-items: center;
					width: 5%;
					margin: 0 3%;
					.img {
						width: 100%;
						height: 100%;
					}
				}
				.profile {
					display: flex;
					align-items: center;
					width: 5%;
					margin: 0 3%;
					.img {
						width: 100%;
						height: 100%;
					}
				}
				.bag {
					display: flex;
					align-items: center;
					width: 5%;
					margin: 0 3%;
					.img {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
</style>
