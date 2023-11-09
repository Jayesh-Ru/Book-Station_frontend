<template>
	<div id="app">
		<Navbar />
		<router-view />
		<Footer />
	</div>
</template>

<script>
import Navbar from "@/components/app/Navbar";
import Footer from "@/components/app/Footer";

export default {
	name: "App",
	components: {
		Navbar,
		Footer,
	},
};
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html {
	scroll-behavior: smooth;
}
body {
	width: 100%;
	height: 100vh;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	position: relative;
	height: 100%;
}
ul {
	list-style: none;
}
a {
	text-decoration: none;
}
.wrapper {
	margin: 0 auto;
	@media screen and (max-width: 575.98px) {
		width: 100%;
	}
	@media screen and (min-width: 576px) {
		max-width: 540px;
	}
	@media screen and (min-width: 768px) {
		max-width: 720px;
	}
	@media screen and (min-width: 992px) {
		max-width: 960px;
	}
	@media screen and (min-width: 1200px) {
		max-width: 1140px;
	}
}
.button {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	font-size: 1.3rem;
	font-weight: 700;
	padding: 10px 15px;
	border-radius: 7px;
	border: 1px solid transparent;
	transition: all 0.3s ease;
	&-primary {
		background-color: #eca72c;
	}
	&-danger {
		background-color: #ee5622;
	}
	&-purple {
		color: #fff;
		background-color: #544170;
	}
	&:hover {
		opacity: 0.8;
	}
}
.button-icon {
	padding: 10px;
	min-width: 37px;
	border: 1px solid transparent;
	&:hover {
		opacity: 0.8;
	}
}
.swal2-title {
	font-family: Avenir, Helvetica, Arial, sans-serif;
}
$primary: #44355b;
$secondary: #44355b;
$white: #333;
$gray: #333;
.form__group {
	position: relative;
	padding: 15px 0 0;
	margin-bottom: 20px;
	width: 100%;
}
.form__field {
	font-family: inherit;
	width: 100%;
	border: 0;
	border-bottom: 1px solid $gray;
	outline: 0;
	font-size: 1.3rem;
	color: $white;
	padding: 7px 0;
	background: transparent;
	transition: border-color 0.2s;
	&::placeholder {
		color: transparent;
	}
	&:placeholder-shown ~ .form__label {
		font-size: 1.1rem;
		cursor: text;
		top: 25px;
	}
}
.form__label {
	position: absolute;
	top: 0;
	display: block;
	transition: 0.2s;
	font-size: 0.9rem;
	color: $gray;
}
.form__field:focus {
	~ .form__label {
		position: absolute;
		top: 0;
		display: block;
		transition: 0.2s;
		font-size: 0.8rem;
		color: $primary;
	}
	padding-bottom: 6px;
	border-image: linear-gradient(to right, $primary, $secondary);
	border-image-slice: 1;
}
.form__field {
	&:required,
	&:invalid {
		box-shadow: none;
	}
}
</style>
