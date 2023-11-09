<template>
	<div class="home">
		<div class="wrapper">
			<Loader v-if="!mounted" />
			<div class="books" v-else-if="mounted && books.length">
				<h1>Total no. of Books: {{ books.length }}</h1>
			</div>	
			<div class="empty" v-else>
				<h1>empty abcd</h1>
				<router-link to="/create" class="link"
					>abcd</router-link
				>
			</div>
		</div>
		<table id="secondTable">
			<thead>
				<tr>
				<th v-for="col in columns">{{col}}</th>
				</tr>
			</thead>
			<tbody>
				<Book v-for="book of books" :key="book._id" :book="book" />
			</tbody>
		</table>
	</div>
</template>

<script>
import axios from "axios";
import Book from "@/components/Book";
import Loader from "@/components/app/Loader";

export default {
	name: "Home",
	data: () => ({
		books: [],
		mounted: false,
		columns:['ISBN','Title','Author','Summary','','']
	}),
	components: {
		Book,
		Loader,
	},
	async mounted() {
		await axios
			.get("api/books/")
			.then(res => {
				this.books = res.data;
			})
			.catch(error => console.error(error));
		this.mounted = true;
	},
};
</script>

<style lang="scss" scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
	padding: 30px 0 100px;
}
.books {
	display: flex;
	flex-direction: column;
	max-width: 500px;
	margin: 0 auto;
	align-items:center;
}
.link {
	text-decoration: underline;
}
.empty {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
table {
  font-family: 'Open Sans', sans-serif;
  overflow: scroll;
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

    
</style>
