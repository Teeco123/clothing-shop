<script lang="ts">
	export let data;

	$: ({ products } = data);
</script>

<div class="items-grid">
	{#each products as product}
		<a
			href="/product/{product.name}"
			data-aos="fade-down"
			data-aos-duration="400"
			data-aos-once="true"
			class="item"
		>
			<div class="item-img"><div class="fake-img" /></div>
			<div class="item-info">
				<div class="item-name">{product.name}</div>
				{#if product.quantity > 0}
					<div class="item-price">{product.price} ZŁ</div>
				{:else}
					<div class="out-of-stock">Out of stock</div>
				{/if}
			</div>
		</a>
	{/each}
</div>

<style lang="scss">
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
			text-decoration: none;
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
					width: 50%;
					font-size: 1.2vw;
				}
				.item-price {
					display: flex;
					justify-content: center;
					width: 40%;
					font-size: 1.2vw;
				}
				.out-of-stock {
					display: flex;
					justify-content: center;
					width: 50%;
					font-size: 1.2vw;
				}
			}
		}
	}

	@media only screen and (max-width: 768px) {
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
					.out-of-stock {
						font-size: 2vw;
					}
				}
			}
		}
	}

	@media only screen and (max-width: 425px) {
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

					.out-of-stock {
						font-size: 3.5vw;
					}
				}
			}
		}
	}
</style>
