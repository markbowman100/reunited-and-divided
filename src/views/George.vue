<template>
  <div class="person">
    <div class="logo-container">
      <img id="george" alt="George" class="person-image md-elevation-3" src="../assets/george.jpg">
      <p class="md-subheading">
        Meet George Quick, the hypocritical libertarian or better known to his friends as small government advocate. When asked how he plans to save the world, his answer is with the largest welfare expansion pack. Political status: single and ready to mingle
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
.md-subheading, .person {
  margin-top: 5%;
}
</style>
