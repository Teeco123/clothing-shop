<script lang="ts">
	import { onMount } from 'svelte';
	import 'aos/dist/aos.css';
	import AOS from 'aos';

	onMount(() => {
		AOS.init({
			duration: 1500
		});
	});
</script>

<body>
	<div class="wrapper">
		<div class="header">
			<div class="nav">
				<a data-aos="fade-in" href="/">HUJ</a>
				<a data-aos="fade-in" href="/">GOWNO</a>
				<a data-aos="fade-in" href="/">DUPA</a>
				<a data-aos="fade-in" href="/">CIPA</a>
			</div>

			<div data-aos="fade-in" class="logo">GOWNO</div>

			<div class="menu">
				<div data-aos="fade-in" class="search">
					<enhanced:img class="img" src="/static/search.png" alt="search" />
				</div>
				<div data-aos="fade-in" class="profile">
					<enhanced:img class="img" src="/static/profile.png" alt="profile" />
				</div>
				<div data-aos="fade-in" class="bag">
					<enhanced:img class="img" src="/static/shopping_bag.png" alt="shopping bag" />
				</div>
			</div>
		</div>
		<div data-aos="fade-down" data-aos-duration="300" data-aos-once="true" class="big-img-wrapper">
			<enhanced:img class="big-img" src="/static/cartman.png" alt="cartman" />
		</div>
	</div>
	<div class="main">
		<div class="items-grid">
			<div data-aos="fade-down" data-aos-duration="400" data-aos-once="true" class="item">
				<div class="item-img"><div class="fake-img"></div></div>
				<div class="item-info">
					<div class="item-name">GIGA KURTKA KURWA</div>
					<div class="item-price">69 ZŁ</div>
				</div>
			</div>
			<div data-aos="fade-down" data-aos-duration="400" data-aos-once="true" class="item">
				<div class="item-img"><div class="fake-img"></div></div>
				<div class="item-info">
					<div class="item-name">GIGA KURTKA KURWA</div>
					<div class="item-price">69 ZŁ</div>
				</div>
			</div>
			<div data-aos="fade-down" data-aos-duration="400" data-aos-once="true" class="item">
				<div class="item-img"><div class="fake-img"></div></div>
				<div class="item-info">
					<div class="item-name">GIGA KURTKA KURWA</div>
					<div class="item-price">69 ZŁ</div>
				</div>
			</div>
			<div data-aos="fade-down" data-aos-duration="400" data-aos-once="true" class="item">
				<div class="item-img"><div class="fake-img"></div></div>
				<div class="item-info">
					<div class="item-name">GIGA KURTKA KURWA</div>
					<div class="item-price">69 ZŁ</div>
				</div>
			</div>
			<div data-aos="fade-down" data-aos-duration="400" data-aos-once="true" class="item">
				<div class="item-img"><div class="fake-img"></div></div>
				<div class="item-info">
					<div class="item-name">GIGA KURTKA KURWA</div>
					<div class="item-price">69 ZŁ</div>
				</div>
			</div>
			<div data-aos="fade-down" data-aos-duration="400" data-aos-once="true" class="item">
				<div class="item-img"><div class="fake-img"></div></div>
				<div class="item-info">
					<div class="item-name">GIGA KURTKA KURWA</div>
					<div class="item-price">69 ZŁ</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer">
		<div class="newsletter">
			<div class="newsletter-text">Signup for newsletter</div>
			<form class="newsletter-form">
				<input type="text" placeholder="Email address" />
				<button type="submit">Join</button>
			</form>
		</div>
		<div class="socials">
			<a href="/"><enhanced:img src="/static/instagram.png" /></a>
			<a href="/"><enhanced:img src="/static/facebook.png" /></a>
			<a href="/"><enhanced:img src="/static/twitter.png" /></a>
		</div>
		<div class="other-links">
			<div class="links">
				<a href="/">GIGA SKLEP HUJ 2024 ©</a>
				<a href="/">Contact</a>
				<a href="/">Terms and conditions</a>
				<a href="/">Privacy policy</a>
				<a href="/">Shipping policy</a>
			</div>
		</div>
	</div>
</body>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

	body {
		margin: 0;
		background-color: black;
		font-family: Jost;
		.wrapper {
			height: 100vh;
			.header {
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
			.big-img-wrapper {
				height: calc(100vh - 180px);
				box-sizing: border-box;
				.big-img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					background-color: gray;
				}
			}
		}
		.main {
			.items-grid {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				grid-gap: 4% 2%;
				margin: 5% 10% 8%;
				.item {
					display: flex;
					flex-direction: column;
					justify-content: center;
					box-sizing: border-box;
					color: white;
					.item-img {
						aspect-ratio: 414 / 572;
						.fake-img {
							width: 100%;
							height: 100%;
							object-fit: cover;
							background-color: gray;
						}
					}
					.item-info {
						display: flex;
						justify-content: space-around;
						align-items: center;
						height: 10%;
						width: 100%;
						.item-name {
							display: flex;
							justify-content: center;
							width: 65%;
							font-size: 1.2vw;
						}
						.item-price {
							display: flex;
							justify-content: center;
							width: 35%;
							font-size: 1.2vw;
						}
					}
				}
			}
		}
		.footer {
			height: calc(300px - 1%);
			border-top: 1px rgb(20, 20, 20) solid;
			padding: 40px 0px 20px;
			.newsletter {
				display: flex;
				flex-direction: column;
				align-items: center;
				.newsletter-text {
					color: white;
					letter-spacing: 4px;
					word-spacing: 8px;
					font-size: 1vw;
				}
				.newsletter-form {
					display: flex;
					justify-content: center;
					margin: 2%;
					width: 100%;
					input {
						border: 1px rgb(60, 60, 60) solid;
						background-color: black;
						width: 20vw;
						max-width: 15vw;
						height: calc(48px - 24px);
						padding: 12px;
						color: rgb(222, 222, 222);
						&:focus-visible {
							outline: none;
						}
					}
					button {
						border: 1px rgb(60, 60, 60) solid;
						background-color: black;
						margin: 0% 1%;
						width: 48px;
						height: 48px;
						color: rgb(222, 222, 222);
						&:hover {
							cursor: pointer;
						}
					}
				}
			}
			.socials {
				display: flex;
				justify-content: center;
				a {
					display: flex;
					align-items: center;
					width: 32px;
					margin: 0 12px;
					img {
						height: 100%;
						width: 100%;
						filter: invert(100%);
					}
				}
			}
			.other-links {
				border-top: 1px rgb(120, 120, 120) solid;
				margin: 24px 24px 0px;
				.links {
					margin-top: 24px;
					a {
						font-size: 1em;
						margin-right: 12px;
						text-decoration: none;
						color: white;
					}
				}
			}
		}
	}
</style>
