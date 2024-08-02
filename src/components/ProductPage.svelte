<script lang="ts">
	import { register } from 'swiper/element/bundle';

	register();

	export let data;

	$: ({ products } = data);

	let selectedSize = '';

	$: console.log(selectedSize);
</script>

<div class="wrapper">
	<div class="product-page">
		{#each products as product}
			<div class="product-info">
				<div class="product-name">{product.name}</div>
				<div class="product-price">{product.price} ZŁ</div>
				<div class="sizes">
					<div class="sizes-text">SIZE</div>
					<div class="sizes-buttons">
						{#each product.sizes as size}
							<div class="size-button">
								{#if size.quantity == 0}
									<input
										type="radio"
										id="size-input-{size.size}"
										name="size"
										value={size.size}
										bind:group={selectedSize}
										disabled
									/>
								{:else}
									<input
										type="radio"
										id="size-input-{size.size}"
										name="size"
										value={size.size}
										bind:group={selectedSize}
									/>
								{/if}

								<label for="size-input-{size.size}">
									{size.size}
								</label>
							</div>
						{/each}
					</div>
				</div>
				<div class="cart-wrapper">
					<button class="add-to-cart">Add to cart</button>
				</div>
				<div class="product-description">
					<div class="title">Product description</div>
					<div class="description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lectus mauris, pulvinar ut
						mauris nec, gravida faucibus justo. Cras fringilla urna non dapibus tristique. Sed ut
						aliquam augue. Nulla fermentum augue at dolor vehicula mattis. Ut tincidunt massa leo,
						at accumsan massa dignissim eget. Pellentesque habitant morbi tristique senectus et
						netus et malesuada fames ac turpis egestas.
						<br /><br />
						- Boxy fit sherpa jacket<br />
						- Funnel neck<br />
						- Branded ¼ zip closure<br />
						- Fully lined<br />
					</div>
				</div>
			</div>
			<div class="product-images">
				<swiper-container class="swiper-container" navigation="true" loop="true" css-mode="true">
					<swiper-slide class="swiper-slide" lazy="true">
						<enhanced:img
							class="slide-img"
							src="/static/GirlTheBlackLighthouseFront.webp"
							alt="Girl Front"
							loading="lazy"
						/>
					</swiper-slide>
					<swiper-slide class="swiper-slide" lazy="true">
						<enhanced:img
							class="slide-img"
							src="/static/GirlTheBlackLighthouseSide.webp"
							alt="Girl Side"
							loading="lazy"
						/>
					</swiper-slide>
					<swiper-slide class="swiper-slide" lazy="true">
						<enhanced:img
							class="slide-img"
							src="/static/GirlTheBlackLighthouseBack.webp"
							alt="Girl Back"
							loading="lazy"
						/>
					</swiper-slide>
				</swiper-container>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		justify-content: center;
		color: white;
		.product-page {
			display: flex;
			flex-direction: row;
			width: calc(100vw - 32px);
			margin: 16px;
			max-width: 1500px;
			.product-info {
				width: 60%;
				display: flex;
				flex-direction: column;
				margin: 32px 16px;
				.product-name {
					font-size: 2em;
					margin: 16px;
				}
				.product-price {
					font-size: 2em;
					margin: 16px;
				}
				.sizes {
					margin: 42px 16px 16px;
					.sizes-buttons {
						display: grid;
						grid-template-columns: repeat(6, 72px);
						grid-gap: 12px;
						margin-top: 16px;
						.size-button {
							display: flex;
							width: 100%;
							height: 36px;
							label {
								display: flex;
								justify-content: center;
								align-items: center;
								width: 100%;
								height: 100%;
								border: 1px white solid;
								transition: 0.5s;
								&:hover {
									cursor: pointer;
									background-color: rgb(40, 40, 40);
								}
							}
							input[type='radio'] {
								width: 0;
								height: 0;
								opacity: 0;
								margin: 0;
							}
							input[type='radio']:disabled + label {
								border: 1px rgb(60, 60, 60) solid;
							}
							input[type='radio']:checked + label {
								background-color: white;
								color: black;
							}
						}
					}
				}
				.cart-wrapper {
					margin: 16px;
					.add-to-cart {
						border: 1px white solid;
						height: 36px;
						width: calc((6 * 72px) + (5 * 12px));
						color: black;
						background-color: white;
						font-weight: bold;
						font-size: 14px;
						transition: 0.3s;
						&:hover {
							cursor: pointer;
							color: white;
							background-color: black;
						}
					}
				}
				.product-description {
					margin: 32px 16px;
					.title {
						min-width: calc((6 * 72px) + (5 * 12px));
						padding-top: 8px;
						margin-right: 128px;
						border-top: 1px white solid;
						font-size: 1.8em;
					}
					.description {
						padding-top: 4px;
						margin-right: 128px;
						min-width: calc((6 * 72px) + (5 * 12px));
						font-size: 0.8em;
					}
				}
			}
			.product-images {
				width: 600px;
				margin: 32px 16px;
				overflow: hidden;
				.swiper-container {
					display: flex;
					width: 90%;
					.swiper-slide {
						aspect-ratio: 414 / 572;
						width: 100%;
						.slide-img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}
					swiper-slide::part(preloader) {
						display: none;
					}
				}
				swiper-container::part(button-prev) {
					color: black;
				}
				swiper-container::part(button-next) {
					color: black;
				}
			}
		}
	}

	@media only screen and (max-width: 1024px) {
		.wrapper {
			.product-page {
				flex-direction: column-reverse;
				align-items: center;
				.product-info {
					width: 100%;
					margin: 16px 16px;
					.product-name,
					.product-price,
					.sizes,
					.cart-wrapper,
					.product-description {
						margin-left: 5%;
					}
				}
				.product-images {
					width: 100%;
					margin: 16px 16px;
				}
			}
		}
	}
	@media only screen and (max-width: 553px) {
		.wrapper {
			.product-page {
				.product-info {
					width: 100%;
					.product-name {
						font-size: 6vw;
					}
					.product-price {
						font-size: 6vw;
					}
					.product-description {
						min-width: calc((3 * 72px) + (2 * 12px));
						.title {
							min-width: 100%;
						}
						.description {
							min-width: 100%;
						}
					}
					.sizes {
						.sizes-buttons {
							grid-template-columns: repeat(3, 72px);
						}
					}
					.cart-wrapper {
						.add-to-cart {
							width: calc((3 * 72px) + (2 * 12px));
						}
					}
				}
			}
		}
	}
</style>
