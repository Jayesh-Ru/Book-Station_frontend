<template>
	<div class="book">
		<div class="wrapper">
			<h1>Update an Entry</h1>
			<Loader v-if="!mounted" />
			<div v-else-if="error">Error occured! attempt to update an entry that's not present</div>
			<form v-else>
				<div class="form__group field">
					<input
						v-model="title"
						type="input"
						class="form__field"
						placeholder="abcd"
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
						placeholder="abcd"
						name="author"
						id="author"
						required
					/>
					<label for="author" class="form__label">Author</label>
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

				<div class="buttons-block">
					<button class="button button-purple" @click.prevent="updateBook()">
						update
					</button>
					<button class="button button-danger" @click.prevent="deleteBook()">
						delete
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import Loader from "@/components/app/Loader";

export default {
	name: "book",
	data: () => ({
		title: "",
		summary: "",
		author:"",
		date: "",
		mounted: false,
		error:false,
	}),
	components: { Loader },
	methods: {
		async deleteBook() {
			await this.$swal
				.fire({
					title: "Are you sure?",
					showDenyButton: true,
					showCancelButton: false,
					confirmButtonText: `Confirm`,
					denyButtonText: `Cancel`,
				})
				.then(result => {
					if (result.isConfirmed) {
						axios
							.delete(`api/books/${this.$route.params.id}`)
							.then(res => {
								this.$swal.fire("Entry succesfully deleted", "", "success");
								this.$router.push("/");
							})
							.catch(error => console.error(error));
					}
				});
		},
		async updateBook() {
			await axios
				.put(`api/books/${this.$route.params.id}`, {
					title: this.title,
					author: this.author,
					summary: this.summary,
				})
				.then(res => {
					this.$swal.fire("Entry updated!", "", "success").then(() => {
						this.$router.push("/");
					});
				})
				.catch(error => console.error(error));
		},
	},
	async mounted() {
		await axios
			.get(`api/books/${this.$route.params.id}`)
			.then(res => {
				this.title = res.data.title;
				this.author = res.data.author;
				this.summary = res.data.summary;
				this.date = res.data.date;
			})
			.catch((error) =>{console.log(error); this.error = true});
		this.mounted = true;
	},
};
</script>

<style lang="scss" scoped>
.book {
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
.buttons-block {
	button {
		min-width: 135px;
		color: #fff;
		&:first-child {
			margin-right: 10px;
		}
	}
}
</style>
