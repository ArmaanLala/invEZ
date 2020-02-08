<template>
  <md-card style="width: 400px">
    <md-card-header>
      <h3 class="md-title">{{ listing.name }} ({{ listing.ticker }}) [{{ listing.category }}]</h3>
    </md-card-header>
    <md-card-content>
      <line-chart :chart-data="datacollection" :options="optio"></line-chart>
      <canvas></canvas>
    </md-card-content>
  </md-card>
</template>

<script>
import LineChart from "./LineChart.js";

export default {
  components: {
    LineChart
  },
  data() {
    return {
      datacollection: null,
      optio: null,
      data: null,
      months: [
        { month: "January" },
        { month: "Febuary" },
        { month: "March" },
        { month: "April" },
        { month: "May" },
        { month: "June" },
        { month: "July" },
        { month: "August" },
        { month: "September" },
        { month: "October" },
        { month: "November" },
        { month: "December" }
      ],
      num: null,
      month1: null,
      month2: null,
      month3: null
    };
  },
  mounted() {},
  methods: {
    fillData() {
      this.datacollection = {
        labels: [this.month1, this.month2, this.month3],
        datasets: [
          {
            label: "Data",
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderColor: "#2d9428",
            lineTension: 0,

            data: [10000, this.getData2(), this.getData3()]
          }
        ]
      };
      this.optio = {
        scales: {
          yAxes: [
            {
              ticks: {
                min: 5000,
                max: 20000
              }
            }
          ]
        }
      };
    },
    getData2() {
      return 10000 * (this.data[22].level / this.data[21].level);
    },
    getData3() {
      return 10000 * (this.data[23].level / this.data[21].level);
    }
  },
  name: "Listing",
  props: {
    listing: Object
  },
  async created() {
    try {
      const resp = await fetch(`/api/blackrock/${this.listing.ticker}`);
      const data = await resp.json();
      this.data = data;
      this.num = parseInt(this.data[23].date.substring(5, 7)) - 1;
      this.month3 = this.months[this.num].month;
      this.num = this.num - 1;
      if (this.num == -1) {
        this.num = 11;
      }
      this.month2 = this.months[this.num].month;
      this.num = this.num - 1;
      if (this.num == -1) {
        this.num = 11;
      }
      this.month1 = this.months[this.num].month;
      console.log(
        this.months[parseInt(this.data[23].date.substring(5, 7))].month
      );
      this.fillData();
    } catch (err) {
      console.error(err.message);
    }
  }
};
</script>

<style scoped>
.md-card {
  flex-wrap: wrap;
}
</style>