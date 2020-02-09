<template>
  <div>
    <div class="card">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
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
          Inv
          <span class="green">EZ</span>ting made
          <span class="green">easy</span>
        </h1>
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
      <!-- IMAGE 1 -->
      <md-card style="margin-right:4%; width:350px; height:550px">
        <md-card-header>
          <div class="md-title">Our Database</div>
        </md-card-header>
        <hr />
        <h6>
          <img src="../assets/r1.png" style="height: 250px" />
          <br />
          <br />
		<hr>
		When a new user signs up for an account, we ask a few simple questions about the individual which we can use in our calculations all to find the best stocks for you.
        </h6>
        <br />
        <br />
      </md-card>

      <!-- IMAGE 2 -->
      <md-card style="margin-right:4%; width:350px; height:550px">
        <md-card-header>
          <div class="md-title">Our Code</div>
        </md-card-header>
        <hr />
        <h6>
          <img src="../assets/r2.png" style="height: 250px" />
          <br />
          <br />

          <hr />Once you input your data, we use cloud computing to determine how big of a risk taker are you and try our best to fit you into a demographic where you would enjoy our recomendations.
        </h6>
        <br />
        <br />
      </md-card>

      <!-- IMAGE 3 -->
      <md-card style="width:350px; height:550px">
        <md-card-header>
          <div class="md-title">Our Advice</div>
        </md-card-header>
        <hr />
        <h6>
          <img src="../assets/r3.png" style="height:250px" />
          <br />
          <br />
          <hr />After the results of our code come back we curate the best stocks for you to invest in and gives you an estimated amount you could expect to make.
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
  /* padding: 3rem; */
}
.card {
  padding: 3rem;
}
.green {
  color: #2d9428;
}
</style>