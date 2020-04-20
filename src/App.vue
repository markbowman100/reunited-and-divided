<template>
  <div id="app" class="full-screen">
    <div class="md-layout" style="background-color:orange;">
      <div class="md-layout-item md-size-25" style="text-align:left;">
        <md-button to="/">
          <img id="george" alt="George" src="./assets/r_and_d.jpg" style="width:40px;">
        </md-button>
      </div>
      <div class="md-layout-item md-size-50" style="text-align:center">
        <md-button to="/" class="md-button">
          <b>Home</b>
        </md-button>
        <md-button to="/richard" class="md-button">
          <b>Richard</b>
        </md-button>
        <md-button to="/george" class="md-button">
          <b>George</b>
        </md-button>
        <md-button to="/mark" class="md-button">
          <b>Mark</b>
        </md-button>
        <md-button to="/episodes" class="md-button">
          <b>Episodes</b>
        </md-button>
        <md-button to="/contact-us" class="md-button">
          <b>Contact</b>
        </md-button>
      </div>
      <div class="md-layout-item md-size-25" style="text-align:center;">
        <span>
          <a href="https://www.facebook.com/groups/235954670978104/" target="_blank">
            <img alt="Facebook" src="./assets/facebook.png" style="margin-top:7px;width:30px;">
            <md-tooltip md-direction="bottom">Facebook</md-tooltip>
          </a>
        </span>
        <span>
          <a href="https://podcasts.apple.com/us/podcast/reunited-and-divided/id1508240158" target="_blank">
            <img alt="Listen on Itunes" src="./assets/apple.png" style="margin-top:7px;margin-left:7px;width:30px;">
            <md-tooltip md-direction="bottom">Apple Podcasts</md-tooltip>
          </a>
        </span>
      </div>
    </div>
    <br>
    <br>
    <div class="md-layout">
      <div class="md-layout-item md-small-size-5 md-xsmall-size-3 md-size-25"></div>
      <div class="md-layout-item md-small-size-90 md-xsmall-size-94 md-size-50">
        <router-view class="content"></router-view>
      </div>
      <div class="md-layout-item md-small-size-5 md-xsmall-size-3 md-size-25"></div>
    </div>
    <div class="md-layout footer" style="background-color:orange;">
      <div class="md-layout-item md-size-100 social-media-icons" style="text-align:center;">
        <div class="find-us">
          Where to Find Us
        </div>
        <span>
          <a href="https://www.facebook.com/groups/235954670978104/" target="_blank">
            <img alt="Facebook" src="./assets/facebook.png" style="margin-top:7px;width:30px;">
            <md-tooltip md-direction="bottom">Facebook</md-tooltip>
          </a>
        </span>
        <span>
          <a href="https://podcasts.apple.com/us/podcast/reunited-and-divided/id1508240158" target="_blank">
            <img alt="Listen on Itunes" src="./assets/apple.png" style="margin-top:7px;margin-left:7px;width:30px;">
            <md-tooltip md-direction="bottom">Apple Podcasts</md-tooltip>
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabRouter'
  }
</script>

<style scoped>
  .content {
    font-family: Roboto,Noto Sans,-apple-system,BlinkMacSystemFont,sans-serif;
    padding-left: 1%;
  }
  .social-media-icons {
    font-family: Roboto,Noto Sans,-apple-system,BlinkMacSystemFont,sans-serif;
    margin-bottom:.5%;
  }
  .find-us {
    margin-top:.5%;
    font-size: large;
  }
  .footer {
    left: 0;
    bottom: 0;
    width:100%;
  }
</style>