<div class="wrapper">
	<div class="cart-text">YOUR CART</div>
	<div class="cart-wrapper">
		<div class="cart-labels">
			<div class="product-label">PRODUCT</div>
			<div class="quantity-label">QUANTITY</div>
			<div class="total-label">TOTAL</div>
		</div>
		<div class="cart-items"></div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		color: white;
		margin: 48px 20px;
		.cart-text {
			display: flex;
			justify-content: center;
			margin-bottom: 64px;
		}
		.cart-wrapper {
			display: flex;
			align-items: center;
			flex-direction: column;
			.cart-labels {
				margin-bottom: 12px;
				width: calc(100vw - 64px);
				max-width: 1500px;
				display: flex;
				flex-direction: row;
				.product-label {
					width: 60%;
					text-align: center;
				}
				.quantity-label {
					width: 20%;
					text-align: center;
				}
				.total-label {
					width: 20%;
					text-align: center;
				}
			}
			.cart-items {
				border-top: 1px white solid;
				width: calc(100vw - 64px);
				max-width: 1500px;
			}
		}
	}
</style>
