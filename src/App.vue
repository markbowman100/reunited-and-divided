<template>
  <div id="app" class="full-screen">
    <md-tabs id="toolbar" md-sync-route md-alignment="centered">
      <md-tab id="tab-home" md-label="Home" to="/" exact></md-tab>
      <md-tab id="tab-richard" md-label="Richard" to="/richard"></md-tab>
      <md-tab id="tab-george" md-label="George" to="/george"></md-tab>
      <md-tab id="tab-mark" md-label="Mark" to="/mark"></md-tab>
      <md-tab id="tab-contact-us" md-label="Contact Us" to="/contact-us"></md-tab>
    </md-tabs>
    <div class="md-layout biography full-screen">
      <div class="md-layout-item md-small-size-0 md-xsmall-size-0 md-size-25"></div>
      <div class="md-layout-item md-small-size-100 md-xsmall-size-100 md-size-50 content">
        <router-view></router-view>
      </div>
      <div class="md-layout-item md-small-size-0 md-xsmall-size-0 md-size-25"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabRouter'
  }
</script>

<style scoped>
#toolbar{
  position:sticky;
  top:1px;
}
.content {
  font-family: Roboto,Noto Sans,-apple-system,BlinkMacSystemFont,sans-serif;
}
</style>