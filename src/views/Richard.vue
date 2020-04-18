<template>
  <div class="person">
    <div class="logo-container">
      <img id="richard" alt="Richard" class="person-image md-elevation-3" src="../assets/richard.jpg">
      <p class="md-subheading description" style="text-align:center;">
        Classified
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
  display: block;
  margin-left: auto;
  margin-right: auto;
  width:50%;
}
.person {
  padding: 4%;
  padding-bottom: 6%;
}
.description {
  padding-top: 3%;
  padding-bottom: 3%;
  text-align:center;
}
</style>
