<template>
  <div class="person">
    <div class="logo-container">
      <img id="richard" alt="Richard" class="person-image md-elevation-3" src="../assets/logo.png">
      <p class="md-subheading">
        Say hello to Richard.
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Richard'
}
</script>

<style scoped>
.person-image {
  margin-top:2%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width:50%;
}
.md-subheading, .person {
  margin-top: 5%;
}
</style>
