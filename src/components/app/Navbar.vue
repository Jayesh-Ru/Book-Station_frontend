<template>
	<nav class="navbar">
		<div class="wrapper">
			<router-link tag="div" to="/" class="logo">Book-Station</router-link>
			<ul>
				<router-link
					v-for="link of links"
					:key="link.id"
					tag="li"
					:to="link.to"
					>{{ link.title }}</router-link
				>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: "Navbar",
	data: () => ({
		links: [
			{ id: 1, to: "/", title: "All Books" },
			{ id: 2, to: "/create", title: "Create Book" },
		],
	}),
};
</script>

<style lang="scss" scoped>
nav {
	background-color: #221e22;
	color: #fff;
}
.wrapper {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: stretch;
	height: 60px;
}
.logo {
	cursor: pointer;
	display: flex;
	align-items: center;
	font-size: 1.5rem;
	font-weight: 700;
}
ul {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
li {
	display: flex;
	align-items: center;
	height: 100%;
	cursor: pointer;
	padding: 0 10px;
	&:hover,
	&:focus {
		background-color: #0e0c0e;
	}
	&.router-link-exact-active {
		background-color: #0e0c0e !important;
	}
}
@media screen and (max-width: 568px) {
	.logo {
		padding-left: 10px;
	}
}
</style>
