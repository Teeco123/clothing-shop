<div class="wrapper">
	<div class="cart-text">YOUR CART</div>
	<div class="cart-wrapper">
		<table class="cart-items">
			<thead>
				<tr>
					<th class="product-text">PRODUCT</th>
					<th class="quantity-text">QUANTITY</th>
					<th class="total-text">TOTAL</th>
				</tr>
			</thead>
			<tbody>
				<tr class="cart-item">
					<td class="item-img">
						<img
							src="https://xgsegeuhgevlcrridgyk.supabase.co/storage/v1/object/public/product-photos/Gowno%20bluza/Gowno%20bluza0.webp"
							alt="gowno bluza"
						/>
					</td>
					<td class="item-info">
						<div class="item-name">GOWNO BLUZA</div>
						<div class="item-price">45ZŁ</div>
						<div class="item-size">SIZE: M</div>
					</td>
					<td class="item-quantity">QUANTITY</td>
				</tr>
			</tbody>
		</table>
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
			justify-content: center;
			.cart-items {
				display: flex;
				flex-direction: column;
				width: calc(100vw - 128px);
				max-width: 1500px;
				thead {
					width: 100%;
					margin-bottom: 24px;
					tr {
						display: flex;
						width: 100%;
						.product-text {
							width: 60%;
						}
						.quantity-text {
							width: 20%;
						}
						.total-text {
							width: 20%;
						}
					}
				}
				tbody {
					border-top: 1px white solid;
					height: 60vh;
					width: 100%;
					.cart-item {
						height: 220px;
						width: 100%;
						.item-img {
							width: 128px;
							height: 100%;
							img {
								width: 100%;
								height: 100%;
								object-fit: cover;
							}
						}
						.item-info {
							padding-left: 48px;
							width: calc(60% - 128px);
							.item-name {
								font-weight: 600;
							}
							.item-price {
								margin-top: 24px;
								font-weight: 300;
							}
							.item-size {
								margin-top: 8px;
								font-weight: 300;
							}
						}
					}
				}
			}
		}
	}
</style>
