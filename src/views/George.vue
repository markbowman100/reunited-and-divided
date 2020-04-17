<template>
  <div class="home">
    <div class="logo-container">
      <img id="george" alt="George" class="person-image md-elevation-3" src="../assets/george.jpg">
      <p>
        Say hello to George.
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'George'
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
