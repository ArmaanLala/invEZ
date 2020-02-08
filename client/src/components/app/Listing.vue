<template>
  <md-card style="width: 400px">
    <md-card-header>
      <h3 class="md-title">{{ listing.name }} ({{ listing.ticker }}) [{{ listing.category }}]</h3>
    </md-card-header>
    <md-card-content>
      <line-chart :chart-data="datacollection" :options="optio"></line-chart>
      <h4>${{ investAmount }} for {{ investTime }} months</h4>
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
      month3: null,
      month4: null,
      month5: null,
      month6: null,
      month7: null,
      month8: null,
      month9: null,
      month10: null,
      month11: null,
      month12: null,
      investTime: 3,
      investAmount: 100
    };
  },
  mounted() {},
  methods: {
    setInvestTime(value) {
      // value is a number representing months
      this.investTime = value;
    },
    setInvestAmount(value) {
      // value is a number representing USD
      this.investAmount = value;
    },
    fillData() {
      this.datacollection = {
        labels: [
          this.month1,
          this.month2,
          this.month3,
          this.month4,
          this.month5,
          this.month6,
          this.month7,
          this.month8,
          this.month9,
          this.month10,
          this.month11,
          this.month12
        ],
        datasets: [
          {
            label: "Data",
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderColor: "#2d9428",
            lineTension: 0,

            data: [
              10000,
              this.getData2(),
              this.getData3(),
              this.getData4(),
              this.getData5(),
              this.getData6(),
              this.getData7(),
              this.getData8(),
              this.getData9(),
              this.getData10(),
              this.getData11(),
              this.getData12()
            ]
          }
        ]
      };
      this.optio = {
        scales: {
          yAxes: [
            {
              ticks: {
                min: 5000,
                max: 25000
              }
            }
          ]
        }
      };
    },
    getData2() {
      return 10000 * (this.data[13].level / this.data[12].level);
    },
    getData3() {
      return 10000 * (this.data[14].level / this.data[12].level);
    },
    getData4() {
      return 10000 * (this.data[15].level / this.data[12].level);
    },
    getData5() {
      return 10000 * (this.data[16].level / this.data[12].level);
    },
    getData6() {
      return 10000 * (this.data[17].level / this.data[12].level);
    },
    getData7() {
      return 10000 * (this.data[18].level / this.data[12].level);
    },
    getData8() {
      return 10000 * (this.data[19].level / this.data[12].level);
    },
    getData9() {
      return 10000 * (this.data[20].level / this.data[12].level);
    },
    getData10() {
      return 10000 * (this.data[21].level / this.data[12].level);
    },
    getData11() {
      return 10000 * (this.data[22].level / this.data[12].level);
    },
    getData12() {
      return 10000 * (this.data[23].level / this.data[12].level);
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
      this.month12 = this.months[this.num].month;
      this.num = this.num - 1;
      if (this.num == -1) {
        this.num = 11;
      }
      this.month11 = this.months[this.num].month;
      this.num = this.num - 1;
      if (this.num == -1) {
        this.num = 11;
      }
      this.month10 = this.months[this.num].month;
      this.num = this.num - 1;
      if (this.num == -1) {
        this.num = 11;
      }
      this.month9 = this.months[this.num].month;
      this.num = this.num - 1;
      if (this.num == -1) {
        this.num = 11;
      }
      this.month8 = this.months[this.num].month;
      this.num = this.num - 1;
      if (this.num == -1) {
        this.num = 11;
      }
      this.month7 = this.months[this.num].month;
      this.num = this.num - 1;
      if (this.num == -1) {
        this.num = 11;
      }
      this.month6 = this.months[this.num].month;
      this.num = this.num - 1;
      if (this.num == -1) {
        this.num = 11;
      }
      this.month5 = this.months[this.num].month;
      this.num = this.num - 1;
      if (this.num == -1) {
        this.num = 11;
      }
      this.month4 = this.months[this.num].month;
      this.num = this.num - 1;
      if (this.num == -1) {
        this.num = 11;
      }
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