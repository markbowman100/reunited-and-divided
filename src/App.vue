<template>
  <div id="app" class="full-screen">
    <link rel="stylesheet" href="https://unpkg.com/vue-material@beta/dist/theme/default.css">
    <div class="page-container md-layout-column">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-toolbar-section-start">
          <md-button class="md-icon-button show-small" @click="showNavigation = true">
            <img alt="Menu" src="./assets/menu.png">
          </md-button>
          <router-link to="/" style="width:10%;" class="hide-small"><img alt="Reunited and Divided" src="./assets/r_and_d.jpg"></router-link>
        </span>

        <span class="hide-small md-toolbar-section-middle">
          <md-button to="/">
            <span>Home</span>
          </md-button>

          <md-button to="/richard">
            <span>Richard</span>
          </md-button>

          <md-button to="/george">
            <span>George</span>
          </md-button>

          <md-button to="/mark">
            <span>Mark</span>
          </md-button>

          <md-button to="/episodes">
            <span>Episodes</span>
          </md-button>
        </span>

        <div class="md-toolbar-section-end">
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
      </md-toolbar>

      <md-drawer :md-active.sync="showNavigation" md-swipeable>
        <md-toolbar class="md-transparent" md-elevation="0">
          <img alt="Reunited and Divided" src="./assets/r_and_d.jpg">
        </md-toolbar>

        <md-list>
          <md-list-item to="/">
            <span class="md-list-item-text">Home</span>
          </md-list-item>

          <md-list-item to="/richard">
            <span class="md-list-item-text">Richard</span>
          </md-list-item>

          <md-list-item to="/george">
            <span class="md-list-item-text">George</span>
          </md-list-item>

          <md-list-item to="/mark">
            <span class="md-list-item-text">Mark</span>
          </md-list-item>

          <md-list-item to="/episodes">
            <span class="md-list-item-text">Episodes</span>
          </md-list-item>
        </md-list>
      </md-drawer>
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
    name: 'TabRouter',
    data: () => ({
      showNavigation: false,
      showSidepanel: false
    })
  }
</script>

<style scoped>
  @media (max-width: 1026px) {
    .hide-small {
      display: none;
    }
  }
  @media (min-width: 1026px) {
    .show-small {
      display: none;
    }
  }
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