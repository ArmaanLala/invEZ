<template>
	<div>
		<div class ="card">
			<md-card md-with-hover class="md-layout-item md-size-50 md-small-size-100">
				<md-card-header>
					<div class="md-title"><img src="../assets/logo2.png" height="590" width="590"></div>
				</md-card-header>
			
			<h1>InvEZting made easy</h1>
			<br>
			<br>
			</md-card>
		</div>
		<div class ="card">
			<md-card md-with-hover class="md-layout-item md-size-50 md-small-size-100" >
				<md-card-header>
					<div class="md-title">Who We Are</div>
				</md-card-header>
			<hr>
			<p>We are a company focused on introducing people into investing and we want to make it as easy as possible for them. We are a small team of three software engineers with various levels of experience all based in the Athens-Clarke County Region. InvEZ analyzises your personal information and using cloud processing it is able to determine the best stocks for you and projects how much money you are expected to make in a given period of time.
			</p>
			<br>
			<br>
			</md-card>
		</div>
		<div class ="card2">
			<md-card style="margin-right:4%">
				<md-card-header>
					<div class="md-title">Feature 1</div>
				</md-card-header>
			<hr>
			<h2>Insert Image Here</h2>
			<br>
			<br>
			</md-card>
			<md-card style="margin-right:4%">
				<md-card-header>
					<div class="md-title">Feature 2</div>
				</md-card-header>
			<hr>
			<h2>Insert Image Here</h2>
			<br>
			<br>
			</md-card>
			<md-card >
				<md-card-header>
					<div class="md-title">Feature 3</div>
				</md-card-header>
			<hr>
			<h2>Insert Image Here</h2>
			<br>
			<br>
			</md-card>
		</div>

	</div>
</template>

<script>
export default {
	name: 'Home',
	async created() {
		const resp = await fetch('/api/test');
		const data = await resp.text();
		console.log(data);
	}
}
</script>

<style scoped>
.md-card {
	padding: 3rem;
	/* margin: auto; */
	justify-content: center;
	display: inline-block;
	flex-wrap: wrap;
	width: 24%;
	/* height: 600px; */
	/* padding-bottom: 54 rem; */
	/* max-width: 1200px; */
} 
.card2 { 
	flex-wrap: nowrap;

	padding: 3rem;
	
}
.card {

	padding: 3rem;
}
</style>