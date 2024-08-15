<div class="footer">
	<div class="newsletter">
		<div class="newsletter-text">Signup for newsletter</div>
		<form class="newsletter-form">
			<input type="text" placeholder="Email address" />
			<button type="submit">Join</button>
		</form>
	</div>
	<div class="socials">
		<a href="/">
			<enhanced:img class="socials-img" src="/static/instagram.png" alt="instagram" />
		</a>
		<a href="/">
			<enhanced:img class="socials-img" src="/static/facebook.png" alt="facebook" />
		</a>
		<a href="/">
			<enhanced:img class="socials-img" src="/static/twitter.png" alt="twitter" />
		</a>
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

<style lang="scss">
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
				margin: 2% 2% 24px;
				width: 100%;
				input {
					border: 1px rgb(60, 60, 60) solid;
					background-color: black;
					width: 15vw;
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
				.socials-img {
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

	@media only screen and (max-width: 768px) {
		.footer {
			.newsletter {
				.newsletter-text {
					font-size: 2.5vw;
				}
				.newsletter-form {
					input {
						width: 40vw;
					}
				}
			}
		}
	}

	@media only screen and (max-width: 425px) {
		.footer {
			.newsletter {
				.newsletter-text {
					font-size: 3.5vw;
				}
				.newsletter-form {
					input {
						width: 50vw;
					}
				}
			}
		}
	}
</style>
