<template>
  <div>
    
		<div class="md-layout  fields">
		<md-field style="width:187.33px;">
      <label for="money">Amount to Invest</label>
      <md-input v-model="money" name="money" id="money"></md-input>
    </md-field>
<br>
		</div>
		<div class="md-layout  fields">
<br>
	<md-field style="width:187.33px;">
          <label for="time">Time to Invest</label>
          <md-select v-model="time" name="time" id="time">
            <md-option value="1-month">1 Month</md-option>
            <md-option value="3-month">3 Months</md-option>
            <md-option value="6-month">6 Months</md-option>
            <md-option value="9-month">9 Months</md-option>
            <md-option value="1-year">1 Year</md-option>
          </md-select>
        </md-field>
</div>
	

    <!-- <div v-if="loading">
      Loading...
      TODO: have an animation here
    </div>  -->
    <section>
      <ol>
        <li v-for="listing in listings" :key="listing.ticker">
          <Listing :listing="listing" />
        </li>
      </ol>
    </section>
  </div>
</template>

<script>
import Listing from "./Listing";

export default {
  name: "Main",
  components: { Listing },
  data() {
    return {
		money: 100,
		time: '3-month',
      isLoading: true,
      listings: null
    };
  },
  async created() {
    // TODO: get listings based on user from BlackRock API
    const resp = await fetch("/api/blackrock/test");
    const data = await resp.json();
    this.listings = data;
  }
};
</script>

<style scoped>
.fields{
	/* margin: auto; */
	justify-content: center;
}
.md-field{
	/* width: auto; */
}
ol {
  list-style: none;
  padding: 0;
}
</style>