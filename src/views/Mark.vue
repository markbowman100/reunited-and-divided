<template>
  <div class="person md-elevation-3">
    <div class="logo-container">
      <img id="mark" alt="Mark" class="person-image md-elevation-3 md-primary" src="../assets/mark.png">
      <p class="md-subheading description" style="text-align:center;">
        Mark Bowman: I don't remember exactly when I met Richard, but I didn't like him. I met George in 8th grade, and he invited me to play games. I found out later that Richard was invited too. I was immediately skeptical of George at that point, but I gave it a shot anyway. It was a good thing. Within a short period of time, we became good friends, and we continued playing games, poker, dungeons and dragons, custom RPGs, video games, etc, until George destroyed everything. He got married. Then we all joined the military. I served in the United States Air Force as Security Forces for six years. I met my wife playing Star Wars The Old Republic. I went to college for Information Systems, and I sought a career as a Software Engineer. I've been developing software ever since. My wife and I got married in 2017, and my daughter was born in 2019.
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
