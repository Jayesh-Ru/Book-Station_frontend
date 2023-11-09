<template>
	<footer class="footer">
		<div class="wrapper">
			<div class="copyright">
				© {{ new Date().getFullYear() }} - Jayesh Khairnar
			</div>
			<a href="https://github.com/Jayesh-Ru" target="_blank" class="more"
				><i class="fab fa-github"></i> <span>Github</span></a
			>
		</div>
	</footer>
</template>

<script>
export default {
	name: "Footer",
};
</script>

<style lang="scss" scoped>
footer {
	background-color: #221e22;
	color: #fff;
	position: fixed;
	bottom: 0;
	width: 100%;
}
.wrapper {
	display: flex;
	justify-content: space-between;
	padding: 20px 0;
}
.more {
	height: 100%;
	color: #fff;
	cursor: pointer;
	// @include transition(all 0.3s ease);
	&:hover {
		color: rgb(233, 233, 233);
	}
}
@media screen and (max-width: 568px) {
	.wrapper {
		flex-direction: column;
		.copyright {
			margin-bottom: 10px;
		}
	}
}
</style>
