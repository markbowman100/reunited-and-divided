<template>
  <div class="person md-elevation-3">
    <div class="logo-container">
      <img id="mark" alt="Mark" class="person-image md-elevation-3 md-primary" src="../assets/mark.png">
      <p class="md-subheading description" style="text-align:center;">
        Mark Bowman: when asked if he's a Democrat he said 'Did you just assume my party line?' Political status: its complicated.
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
  border-style: solid;
  border-color: orange;
  border-radius: 16px;
  border-width: .5px;
  padding: 2%;
}
.description {
  padding-top: 3%;
  text-align:center;
}
</style>
