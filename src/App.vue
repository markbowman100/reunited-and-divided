<template>
  <div id="app" class="full-screen">
    <md-tabs id="toolbar" md-sync-route md-alignment="centered" class="md-transparent">
      <md-tab id="tab-home" md-label="Home" to="/" exact></md-tab>
      <md-tab id="tab-richard" md-label="Richard" to="/richard"></md-tab>
      <md-tab id="tab-george" md-label="George" to="/george"></md-tab>
      <md-tab id="tab-mark" md-label="Mark" to="/mark"></md-tab>
      <md-tab id="tab-episodes" md-label="All Episodes" to="/episodes"></md-tab>
    </md-tabs>
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
</style>