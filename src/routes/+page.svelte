<body>
	<div class="header">
		<div class="nav">
			<a href="/">HUJ</a>
			<a href="/">GOWNO</a>
			<a href="/">DUPA</a>
			<a href="/">CIPA</a>
		</div>
		<div class="logo">GOWNO</div>
		<div class="menu">
			<div class="search">
				<enhanced:img class="img" src="/static/search.png" />
			</div>
			<div class="profile">
				<enhanced:img class="img" src="/static/profile.png" />
			</div>
			<div class="bag">
				<enhanced:img class="img" src="/static/shopping_bag.png" />
			</div>
		</div>
	</div></body
>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
	body {
		margin: 0;
		background-color: grey;
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
					margin: 0 5%;
					.img {
						width: 100%;
						height: 100%;
					}
				}
				.profile {
					display: flex;
					align-items: center;
					width: 5%;
					margin: 0 5%;
					.img {
						width: 100%;
						height: 100%;
					}
				}
				.bag {
					display: flex;
					align-items: center;
					width: 5%;
					margin: 0 2%;
					.img {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
</style>
