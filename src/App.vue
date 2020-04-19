<template>
  <div id="app" class="full-screen">
    <div class="md-layout">
      <div class="md-layout-item md-size-25" style="text-align:left;">
        <md-button to="/">
          <img id="george" alt="George" src="./assets/r_and_d.jpg" style="width:40px;">
        </md-button>
      </div>
      <div class="md-layout-item md-size-50" style="text-align:center">
        <md-button to="/" class="md-button">
          Home
        </md-button>
        <md-button to="/richard" class="md-button">
          Richard
        </md-button>
        <md-button to="/george" class="md-button">
          George
        </md-button>
        <md-button to="/mark" class="md-button">
          Mark
        </md-button>
        <md-button to="/episodes" class="md-button">
          Episodes
        </md-button>
        <md-button to="/contact-us" class="md-button">
          Contact
        </md-button>
      </div>
      <div class="md-layout-item md-size-25" style="text-align:center;">
        <span>
          <a href="https://www.facebook.com/groups/235954670978104/" target="_blank">
            <img alt="Facebook" src="./assets/facebook.png" style="margin-top:7px;width:30px;">
          </a>
        </span>
        <span>
          <a href="https://podcasts.apple.com/us/podcast/reunited-and-divided/id1508240158" target="_blank">
            <img alt="Listen on Itunes" src="./assets/apple.png" style="margin-top:7px;margin-left:7px;width:30px;">
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
  </div>
</template>
<link rel="stylesheet" href="https://unpkg.com/vue-material@beta/dist/theme/default.css">

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
    float:right;
  }
</style>