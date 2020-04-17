<template>
  <div class="person">
    <div class="logo-container">
      <img id="mark" alt="Mark" class="person-image md-elevation-3 md-primary" src="../assets/mark.png">
      <p class="md-subheading">
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
