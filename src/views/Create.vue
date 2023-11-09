<template>
	<div class="create">
		<div class="wrapper">
			<h1>Create an Entry</h1>
			<form action="/create" @submit.prevent="createBook()">
				<div class="form__group field">
					<input
						v-model="title"
						type="input"
						class="form__field"
						placeholder="Title goes here"
						name="title"
						id="title"
						required
					/>
					<label for="title" class="form__label">Title</label>
				</div>
				<div class="form__group field">
					<input
						v-model="author"
						type="input"
						class="form__field"
						placeholder="Author name goes here"
						name="Author"
						id="Author"
						required
					/>
					<label for="title" class="form__label">Author</label>
				</div>
				<div class="form__group field">
					<input
						v-model="summary"
						type="input"
						class="form__field"
						placeholder="description"
						name="description"
						id="description"
						required
					/>
					<label for="description" class="form__label">Summary</label>
				</div>

				<button class="button button-purple">Create</button>
			</form>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "Create",
	data: () => ({
		title: "",
		summary: "",
		author:""
	}),
	methods: {
		async createBook() {
			let books = [];
			await axios
				.get("api/books/")
				.then(res => (books = res.data))
				.catch(error => console.error(error));

			/*
      @ Maximum number of books: 10
      */
			if (books.length < 10) {
				await axios
					.post("api/books/", {
						title: this.title,
						author: this.author,
						summary: this.summary,
					})
					.then(res => {
						this.$swal.fire("Succesfully created", "", "success").then(() => {
							this.$router.push("/");
						});
					})
					.catch(error => console.error(error));
			} else {
				this.$swal
					.fire({
						icon: "error",
						title: "Oops...",
						text: "Seems like you have already exceeded the Maximum limit 🙆‍♂️",
						footer:
							"<b>Try after deleting another book entry</b>",
					})
					.then(() => {
						this.$router.push("/");
					});
			}
		},
	},
};
</script>

<style lang="scss" scoped>
$primary: #44355b;
$secondary: #44355b;
$white: #333;
$gray: #333;
.create {
	padding: 30px 0 100px;
}
form {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	max-width: 500px;
	margin: 0 auto;
	padding: 40px 40px 0;
}
</style>
