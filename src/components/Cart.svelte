<div class="wrapper">
	<div class="cart-text">YOUR CART</div>
	<div class="cart-wrapper">
		<div class="cart-labels">
			<div class="product-label">PRODUCT</div>
			<div class="quantity-label">QUANTITY</div>
			<div class="total-label">TOTAL</div>
		</div>
		<div class="cart-items">
			<div class="item">
				<div class="item-img">
					<img
						src="https://xgsegeuhgevlcrridgyk.supabase.co/storage/v1/object/public/product-photos/Gowno%20bluza/Gowno%20bluza0.webp"
						alt="bluza"
					/>
				</div>
				<div class="item-info">
					<div class="item-name">GOWNO BLUZA</div>
					<div class="item-price">45ZŁ</div>
					<div class="item-size">SIZE: M</div>
				</div>
				<div class="item-quantity">2</div>
				<div class="item-total">90ZŁ</div>
			</div>
		</div>
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
				}
				.quantity-label {
					width: 20%;
				}
				.total-label {
					width: 20%;
				}
			}
			.cart-items {
				border-top: 1px white solid;
				width: calc(100vw - 64px);
				max-width: 1500px;
				.item {
					display: flex;
					flex-direction: row;
					align-items: center;
					margin: 24px 0px;
					.item-img {
						width: 10%;
						img {
							width: 100%;
							object-fit: cover;
						}
					}
					.item-info {
						margin-left: 26px;
						width: calc(50% - 26px);
						.item-name {
							margin-bottom: 26px;
							font-weight: 600;
							font-size: 18px;
						}
						.item-price {
							margin-bottom: 12px;
							font-weight: 500;
						}
						.item-size {
							font-weight: 500;
						}
					}
					.item-quantity {
						width: 20%;
					}
					.item-total {
						width: 20%;
					}
				}
			}
		}
	}
</style>
