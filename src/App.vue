<template>
  <div id="app" class="full-screen light-blue">
    <link rel="stylesheet" href="https://unpkg.com/vue-material@beta/dist/theme/default.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="page-container md-layout-column">
      <md-toolbar class="hide-small" md-elevation="0">
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

          <span v-if="$route.path === '/'">
            <md-button href="#richard" @click="showNavigation = false">
              <span>Richard</span>
            </md-button>

            <md-button href="#george" @click="showNavigation = false">
              <span>George</span>
            </md-button>

            <md-button href="#mark" @click="showNavigation = false">
              <span>Mark</span>
            </md-button>
          </span>
          
          <md-button to="/contact">
            <span>Contact</span>
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

      <md-toolbar class="md-transparent show-small" md-elevation="0">
        <span class="md-toolbar-section-start">
          <md-button class="md-icon-button" @click="showNavigation = true">
            <img alt="Menu" src="./assets/menu.png">
          </md-button>
        </span>
      </md-toolbar>

      <md-drawer md-fixed :md-active.sync="showNavigation" md-swipeable>
        <div>
          <img alt="Reunited and Divided" src="./assets/r_and_d.jpg">
        </div>
        <div class="menu-icons">
          <md-list>
            <md-list-item to="/" @click="showNavigation = false">
              <md-icon class="fa fa-home"></md-icon>
              <span class="md-list-item-text">Home</span>
            </md-list-item>

            <span v-if="$route.path === '/'">
              <md-list-item href="#richard" @click="showNavigation = false">
                <md-icon class="fa fa-face"></md-icon>
                <span class="md-list-item-text">Richard</span>
              </md-list-item>

              <md-list-item href="#george" @click="showNavigation = false">
                <md-icon class="fa fa-face"></md-icon>
                <span class="md-list-item-text">George</span>
              </md-list-item>

              <md-list-item href="#mark" @click="showNavigation = false">
                <md-icon class="fa fa-face"></md-icon>
                <span class="md-list-item-text">Mark</span>
              </md-list-item>
            </span>
            
            <md-list-item to="/contact" @click="showNavigation = false">
              <md-icon class="fa fa-envelope"></md-icon>
              <span class="md-list-item-text">Contact</span>
            </md-list-item>
          </md-list>
        </div>
        <div class="md-layout menu-icons border-top">
          <div class="md-layout-item md-size-40"></div>
          <div class="md-layout-item md-size-25">
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
          <div class="md-layout-item md-size-35"></div>
        </div>
      </md-drawer>
    </div>
    <br>
    <br>
    <div class="md-layout">
      <div class="md-layout-item md-size-5"></div>
      <div class="md-layout-item md-size-90">
        <router-view></router-view>
      </div>
      <div class="md-layout-item md-size-5"></div>
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
  .md-toolbar {
    position: fixed;
  }
  .content {
    font-family: Roboto,Noto Sans,-apple-system,BlinkMacSystemFont,sans-serif;
    padding-left: 1%;
  }
  .menu-icons {
    margin-top: 3%;
  }
  .social-media-icons {
    font-family: Roboto,Noto Sans,-apple-system,BlinkMacSystemFont,sans-serif;
    margin-bottom:3%;
  }
  .find-us {
    font-size: large;
  }
  .footer {
    left: 0;
    bottom: 0;
    width:100%;
  }
  .person-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width:50%;
  }
  .about {
    text-align:center;
    border-bottom-style: solid;
    border-color: grey;
    border-width: .5px;
    padding: 4%;
    padding-bottom: 6%;
  }
  .person {
    padding: 4%;
    text-align:center;
    margin-bottom:2%;
  }
  .border-bottom {
    border-bottom-style: solid;
    border-color: grey;
    border-width: .5px;
  }
  .border-top {
    border-top-style: solid;
    border-color: grey;
    border-width: .5px;
  }
</style>