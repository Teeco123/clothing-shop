<script lang="ts">
	import { onMount } from 'svelte';

	let mobileNav: HTMLElement;

	function OpenMenu() {
		window.document.body.style.overflow = 'hidden';
		mobileNav.style.width = '100vw';
	}

	function CloseMenu() {
		window.document.body.style.overflow = 'auto';
		mobileNav.style.width = '0vw';
	}

	onMount(() => {
		window.document.body.style.overflow = 'auto';
	});
</script>

<div class="mobile-nav" bind:this={mobileNav}>
	<div class="top-item">
		<div class="profile">
			<enhanced:img class="img" src="/static/profile.png" alt="profile" />
		</div>
		<button class="close" on:click={CloseMenu}>
			<enhanced:img class="img" src="/static/close.png" alt="close" />
		</button>
	</div>
	<div class="middle-item"><a href="/">HUJ</a></div>
	<div class="middle-item"><a href="/">GOWNO</a></div>
	<div class="middle-item"><a href="/">DUPA</a></div>
	<div class="middle-item"><a href="/">CIPA</a></div>
	<div class="search-box">
		<div class="search-img">
			<enhanced:img class="img" src="/static/search.png" alt="search" />
		</div>
		<input type="text" placeholder="Search" />
	</div>
</div>
<div class="header-desktop">
	<div class="nav">
		<a data-aos="fade-in" href="/">HUJ</a>
		<a data-aos="fade-in" href="/">GOWNO</a>
		<a data-aos="fade-in" href="/">DUPA</a>
		<a data-aos="fade-in" href="/">CIPA</a>
	</div>
	<a href="/" data-aos="fade-in" class="logo">GOWNO</a>
	<div class="menu">
		<div data-aos="fade-in" class="search">
			<enhanced:img class="img" src="/static/search.png" alt="search" />
		</div>
		<div data-aos="fade-in" class="profile">
			<enhanced:img class="img" src="/static/profile.png" alt="profile" />
		</div>
		<a href="/cart" data-aos="fade-in" class="bag">
			<enhanced:img class="img" src="/static/shopping_bag.png" alt="shopping bag" />
		</a>
	</div>
</div>
<div class="header-mobile">
	<button class="nav-button-wrapper" on:click={OpenMenu}>
		<div class="nav-button-img">
			<enhanced:img class="img" src="/static/menu.png" alt="menu button" />
		</div>
	</button>
	<a href="/" data-aos="fade-in" class="logo">GOWNO</a>
	<div class="menu">
		<a href="/cart" data-aos="fade-in" class="bag">
			<enhanced:img class="img" src="/static/shopping_bag.png" alt="shopping bag" />
		</a>
	</div>
</div>

<style lang="scss">
	.mobile-nav {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 0vw;
		position: fixed;
		z-index: 99999;
		background-color: rgba(0, 0, 0, 0.95);
		overflow-x: hidden;
		transition: 0.5s;
		.top-item {
			display: flex;
			flex-direction: row;
			width: 100%;
			justify-content: space-between;
			border-bottom: 1px rgb(60, 60, 60) solid;
			.profile {
				display: flex;
				align-items: center;
				width: 32px;
				margin: 16px;
				.img {
					width: 100%;
					height: 100%;
				}
			}
			.close {
				display: flex;
				align-items: center;
				width: 32px;
				margin: 16px;
				border: none;
				background-color: rgba(0, 0, 0, 0.95);
				padding: 0;
				.img {
					width: 100%;
					height: 100%;
				}
			}
		}
		.middle-item {
			display: flex;
			border-bottom: 1px rgb(60, 60, 60) solid;
			a {
				color: white;
				margin: 0px 22px;
				padding: 16px 0px;
				text-decoration: none;
			}
		}
		.search-box {
			display: flex;
			width: 100%;
			border-bottom: 1px rgb(60, 60, 60) solid;
			.search-img {
				display: flex;
				align-items: center;
				width: 32px;
				padding: 16px;
				border-right: 1px rgb(60, 60, 60) solid;
				.img {
					width: 100%;
					height: 100%;
				}
			}
			input {
				width: calc(100% - 64px - 16px);
				border: none;
				background: transparent;
				color: white;
				padding-left: 16px;
				&:focus-within {
					outline: none;
				}
				&::placeholder {
					font-family: Jost;
					color: white;
				}
			}
		}
	}
	.header-desktop {
		position: sticky;
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
			color: white;
			text-decoration: none;
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
	.header-mobile {
		position: sticky;
		display: none;
		align-items: center;
		justify-content: space-between;
		background-color: black;
		height: 180px;
		color: white;
		.nav-button-wrapper {
			display: flex;
			margin-left: 2%;
			width: 100%;
			border: none;
			background-color: black;
			.nav-button-img {
				display: flex;
				align-items: center;
				width: 20%;
				margin: 0 20%;
				.img {
					height: 100%;
					width: 100%;
				}
			}
		}
		.logo {
			display: flex;
			justify-content: center;
			width: 100%;
			color: white;
			text-decoration: none;
		}
		.menu {
			display: flex;
			justify-content: flex-end;
			margin-right: 2%;
			width: 100%;
			.bag {
				display: flex;
				align-items: center;
				width: 20%;
				margin: 0 20%;
				.img {
					width: 100%;
					height: 100%;
				}
			}
		}
	}

	@media only screen and (max-width: 1024px) {
		.header-desktop {
			display: none;
		}
		.header-mobile {
			display: flex;
		}
	}
</style>
