<template>
  <div>
    <div class="card">
      <md-card class="md-layout-item md-size-50 md-small-size-100 md-elevation-24">
        <md-card-header>
          <!--
          <md-card-media-cover md-solid>
            <md-card-media md-ratio="4:3">
              <img src="/../assets/wallpaper.PNG">
            </md-card-media>
          </md-card-media-cover>
          -->
          <div class="md-title">
            <img src="../assets/logo2.png" height="590" width="590" />
          </div>
        </md-card-header>
        <h1>
          Inv<span class="green">EZ</span>ting made
          <span class="green">easy</span>
        </h1>
        <br />
        <br />
      </md-card>
    </div>
    <div class="card">
      <md-card class="md-layout-item md-size-50 md-small-size-100 md-elevation-24">
        <md-card-header>
          <div class="md-title">
            <h2>Who We Are</h2>
          </div>
        </md-card-header>
        <hr />
        <p id="t">InvEZ technology analyzes your inputted information with cloud processing in order to predict your financial outcome for you to make the best investment decision. Our company, catered towards people with little to no financial background, focuses on using business and stock trends to recommend our users to lucrative investments. Our new team, currently consisting of three software engineers, is centered in Athens, Georgia. We strive to create a helpful and intuitive product for our users.</p>
        <br />
        <br />
      </md-card>
    </div>
    <div class="card2">
      <!-- IMAGE 1 -->
      <md-card class = "md-elevation-24" style="margin-right:4%; width:350px; height:550px">
        <md-card-header>
          <div class="md-title">Our Database</div>
        </md-card-header>
        <hr />
        <h6>
          <img src="../assets/r1.png" style="height: 250px" />
          <br />
          <br />
		<hr>
        When a new user signs up for an account, we ask a few questions about the individual which we use in our calculations to find the right portfolio for them.
        </h6>
        <br />
        <br />
      </md-card>

      <!-- IMAGE 2 -->
      <md-card class = "md-elevation-24" style="margin-right:4%; width:350px; height:550px">
        <md-card-header>
          <div class="md-title">Our Code</div>
        </md-card-header>
        <hr />
        <h6>
          <img src="../assets/r2.png" style="height: 250px" />
          <br />
          <br />

          <hr /> After the user inputs their data, we use cloud computing to categorize the user in order to determine the best stocks for them.
        </h6>
        <br />
        <br />
      </md-card>

      <!-- IMAGE 3 -->
      <md-card class = "md-elevation-24" style="width:350px; height:550px">
        <md-card-header>
          <div class="md-title">Our Advice</div>
        </md-card-header>
        <hr />
        <h6>
          <img src="../assets/r3.png" style="height:250px" />
          <br />
          <br />
          <hr />After categorizing the user, we present them with several stocks that fit their interests and give them projected gain/loss based on how much and how long they are willing to invest.
        </h6>

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
h6 {
  font-size: .8rem;
}
#t {
  font-size: 1.1rem;
}
/* template {
  background-color: rgb(142, 194, 159);
} */
.md-card {
  padding: 3rem;
  justify-content: center;
  display: inline-block;
  flex-wrap: wrap;
  width: 24%;
}
.card2 {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  padding: 4rem;
}
.card {
  padding: 3rem;
}
.green {
  color: #2d9428;
}
</style>