<template>
  <div id="app" class="full-screen">
    <div class="md-layout">
      <div class="md-layout-item md-size-25" style="text-align:left;">
        <md-button to="/">
          <img id="george" alt="George" src="./assets/r_and_d.jpg" style="width:50px;">
        </md-button>
      </div>
      <div class="md-layout-item md-size-50" style="text-align:center">
        <md-button to="/" class="md-button">
          <span>Home</span>
        </md-button>
        <md-button to="/richard" class="md-button">
          <span>Richard</span>
        </md-button>
        <md-button to="/george" class="md-button">
          <span>George</span>
        </md-button>
        <md-button to="/mark" class="md-button">
          <span>Mark</span>
        </md-button>
        <md-button to="/episodes" class="md-button">
          <span>Episodes</span>
        </md-button>
        <!--
        <md-button to="/contact-us" class="md-button">
          <span>Contact</span>
        </md-button>
        -->
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
    <br>
    <div class="md-layout footer">
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

<link rel="stylesheet" href="https://unpkg.com/vue-material@beta/dist/theme/default.css">

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
    font-size: large;
  }
  .footer {
    color: white;
    left: 0;
    bottom: 0;
    width:100%;
  }
</style>