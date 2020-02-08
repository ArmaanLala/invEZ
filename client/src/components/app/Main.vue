<template>
	<div v-if="isLoading">Loading...</div>
	<section v-else>
		<div class="md-layout fields">
			<md-field style="width:187.33px;">
				<label for="money">Amount to Invest</label>
				<md-input v-model="money" name="money" id="money" @keyup="setInvestAmount"></md-input>
			</md-field>
			<br />
		</div>
		<div class="md-layout fields">
			<br />
			<md-field style="width:187.33px;">
				<label for="time">Time to Invest</label>
				<md-select v-model="time" name="time" id="time" @blur="setInvestTime">
					<md-option value="1">1 Month</md-option>
					<md-option value="3">3 Months</md-option>
					<md-option value="6">6 Months</md-option>
					<md-option value="9">9 Months</md-option>
					<md-option value="12">1 Year</md-option>
				</md-select>
			</md-field>
		</div>
		<ol>
			<li v-for="listing in listings" :key="listing.ticker">
				<Listing :listing="listing" ref="listItem" />
			</li>
		</ol>
	</section>
</template>

<script>
import Listing from "./Listing";

export default {
	name: "Main",
	components: { Listing },
	data() {
		return {
			money: 100,
			time: "3",
			isLoading: true,
			listings: null
		};
	},
	async created() {
		this.isLoading = true;
		try {
			const resp = await fetch("/api/blackrock/curated");
			const data = await resp.json();
			this.listings = data;
		} catch (err) {
			console.error(err);
		}
		this.isLoading = false;
	},
	methods: {
		setInvestTime() {
			this.$refs.listItem.forEach((item) => {
				item.setInvestTime(Number(this.time));
			});
		},
		setInvestAmount() {
			this.money = this.money.replace(/\D/g, '');
			this.$refs.listItem.forEach((item) => {
				item.setInvestAmount(Number(this.money));
			});
		}
	}
};
</script>

<style scoped>
.fields {
	justify-content: center;
}
ol {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	list-style: none;
	padding: 0 1rem;
}
ol > li {
	padding-bottom: 2rem;
}
</style>