<template>
	<tr>
		<td>{{book['_id']}}</td>
		<td>{{book['title']}}</td>
		<td>{{book['author']}}</td>
		<td>{{book['summary']}}</td>
		<td>			<button
				class="button-icon button-primary"
				@click="$router.push(`/${book._id}`)"
			>
				<i class="fas fa-edit"></i>
			</button></td>
		<td>			<button class="button-icon button-danger" @click="deleteBook()">
				<i class="fas fa-trash-alt"></i>
			</button></td>
	</tr>	
</template>

<script>
import axios from "axios";

export default {
	name: "Book",
	props: ["book"],
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
							.delete(`api/books/${this.book._id}`)
							.then(res => {
								this.$swal.fire("Entry succesfully deleted", "", "success").then(() => {
									this.$router.go();
								});
							})
							.catch(error => console.error(error));
					}
				});
		},
	},
};
</script>

<style lang="scss" scoped>
table {
  font-family: 'Open Sans', sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}
.book {
	display: grid;
	grid-template-columns: 4fr 1fr;
	width: 100%;
	padding: 20px;
	margin: 10px 0 0;
	border: 1px solid #31263e;
	border-radius: 7px;
	color: #fff;
	background-color: #44355b;
	max-height: 200px;
	&:hover {
		background-color: #392c4d;
	}
}
.book__info {
	display: flex;
	flex-direction: column;
	justify-content: cetner;
}
.book__buttons {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	button:first-child {
		margin: 0 0 10px;
	}
}
.date {
	font-size: 1rem;
	font-weight: 700;
}
.description {
	overflow: hidden;
}
@media screen and (max-width: 568px) {
	.book {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.book__buttons {
		margin-top: 10px;
		flex-direction: row;
		button:first-child {
			margin: 0 10px 0 0;
		}
	}
}
</style>
