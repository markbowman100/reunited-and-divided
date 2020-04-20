<template>
  <div class="person md-elevation-3">
    <div class="logo-container">
      <img id="richard" alt="Richard" class="person-image md-elevation-3" src="../assets/richard.jpg">
      <p class="md-subheading description" style="text-align:center;">
        Richard: Classified
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
  border-style: solid;
  border-color: orange;
  border-radius: 16px;
  border-width: .5px;
  padding: 2%;
}
.description {
  padding-top: 3%;
  padding-bottom: 1%;
  text-align:center;
}
</style>
