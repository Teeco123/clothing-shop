<script lang="ts">
	import { onMount } from 'svelte';
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	import Header from '../components/Header.svelte';
	import BigImg from '../components/BigIMG.svelte';
	import Footer from '../components/Footer.svelte';

	export let data;

	$: ({ products } = data);

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
		<div class="items-grid">
			{#each products as product}
				<div data-aos="fade-down" data-aos-duration="400" data-aos-once="true" class="item">
					<div class="item-img"><div class="fake-img"></div></div>
					<div class="item-info">
						<div class="item-name">{product.name}</div>
						<div class="item-price">{product.price} ZŁ</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="footer">
		<Footer />
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
		}
		.main {
			.items-grid {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				grid-gap: 4% 2%;
				margin: 5vh 10% 13vh;
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
		}
	}

	@media only screen and (max-width: 768px) {
		body {
			.main {
				.items-grid {
					grid-gap: 2% 2%;
					margin: 5vh 10% 10vh;
					grid-template-columns: repeat(2, 1fr);
					.item {
						.item-info {
							.item-name {
								font-size: 2vw;
							}
							.item-price {
								font-size: 2vw;
							}
						}
					}
				}
			}
		}
	}

	@media only screen and (max-width: 425px) {
		body {
			.main {
				.items-grid {
					margin: 5vh 10% 40vh;
					grid-template-columns: repeat(1, 1fr);
					.item {
						.item-info {
							.item-name {
								font-size: 3.5vw;
							}
							.item-price {
								font-size: 3.5vw;
							}
						}
					}
				}
			}
		}
	}
</style>
