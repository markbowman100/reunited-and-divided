<template>
  <div class="person">
    <div class="logo-container">
      <img id="mark" alt="Mark" class="person-image md-elevation-3 md-primary" src="../assets/mark.png">
      <p class="md-subheading description" style="text-align:center;">
        Meet Mark Bowman, when asked if he's a Democrat he said 'Did you just assume my party line?' Political status: its complicated.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mark'
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
