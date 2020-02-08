<template>
	<div>
		<div class="card">
			<md-card class="md-layout-item md-size-50 md-small-size-100">
				<md-card-header>
					<div class="md-title">
						<img src="../assets/logo2.png" height="590" width="590" />
					</div>
				</md-card-header>

				<h1>Inv<span class="green">EZ</span>ting made <span class="green">easy</span></h1>
				<br />
				<br />
			</md-card>
		</div>
		<div class="card">
			<md-card class="md-layout-item md-size-50 md-small-size-100">
				<md-card-header>
					<div class="md-title">
						<h2>Who We Are</h2>
					</div>
				</md-card-header>
				<hr />
				<p>We are a company focused on introducing people into investing and we want to make it as easy as possible for them. We are a small team of three software engineers with various levels of experience all based in the Athens-Clarke County Region. InvEZ analyzises your personal information and using cloud processing it is able to determine the best stocks for you and projects how much money you are expected to make in a given period of time.</p>
				<br />
				<br />
			</md-card>
		</div>
		<div class="card2">
			<md-card style="margin-right:4%">
				<md-card-header>
					<div class="md-title">Feature 1</div>
				</md-card-header>
				<hr />
				<h2>
					<img src="../assets/r1.jpg" height="590" width="590" />
				</h2>
				<br />
				<br />
			</md-card>
			<md-card style="margin-right:4%">
				<md-card-header>
					<div class="md-title">Feature 2</div>
				</md-card-header>
				<hr />
				<h2>
					<img src="../assets/r2.jpg" height="590" width="590" />
				</h2>
				<br />
				<br />
			</md-card>
			<md-card>
				<md-card-header>
					<div class="md-title">Feature 3</div>
				</md-card-header>
				<hr />
				<h2>
					<img src="../assets/r3.jpg" height="590" width="590" />
				</h2>
				<br />
				<br />
			</md-card>
		</div>
	</div>
</template>

<script>
export default {
	name: "Home"
};
</script>

<style scoped>
.md-card {
	padding: 3rem;
	justify-content: center;
	display: inline-block;
	flex-wrap: wrap;
	width: 24%;
}
.card2 {
	flex-wrap: nowrap;
	padding: 3rem;
}
.card {
	padding: 3rem;
}
.green {
	color: #2d9428;
}
</style>