<script lang="ts">
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
								<input
									type="radio"
									id="size-input-{size.size}"
									name="size"
									value={size.size}
									bind:group={selectedSize}
								/>
								<label for="size-input-{size.size}">
									{size.size}
								</label>
							</div>
						{/each}
					</div>
				</div>
				<button class="add-to-cart">Add to cart</button>
			</div>
			<div class="product-images"></div>
		{/each}
	</div>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		justify-content: center;
		height: calc(100vh - 180px);

		color: white;
		.product-page {
			display: flex;
			flex-direction: row;
			max-width: 1500px;
			.product-info {
				width: 55%;
				margin: 32px;
				.product-name {
					font-size: 3.5vw;
					margin: 16px;
				}
				.product-price {
					font-size: 2vw;
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
							input[type='radio']:checked + label {
								background-color: white;
								color: black;
							}
						}
					}
				}
				.add-to-cart {
					margin: 16px;
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
			.product-images {
				width: 45%;
			}
		}
	}
</style>
