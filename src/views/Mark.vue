<template>
  <div class="home">
    <div class="logo-container">
      <img id="mark" alt="Mark" class="person-image md-elevation-3" src="../assets/mark.png">
      <p>
        Say hello to Mark.
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
.main-content {
  padding-left: 5%;
  padding-right: 5%;
}
.content {
  background-color: rgb(255,250,250);
}
</style>
