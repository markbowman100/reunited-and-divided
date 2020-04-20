<template>
  <div class="person md-elevation-3">
    <div class="logo-container">
      <img id="george" alt="George" class="person-image md-elevation-3" src="../assets/george.jpg">
      <p class="md-subheading description" style="text-align:center;">
        George Quick: I met Mark and Rich in the 8th grade, we made our own versions of RPGs and strategy games to play at lunch. In high school, we played Magic the Gathering, poker and Dungeons and Dragons. We were in choir and drama together, we hung out on weekends at my Dad's on the farm or at Rich's house. We spent the summers together on the farm or in summer school. Then the bad times came, we don't talk about the bad times. I got married, joined the Army and moved to Germany. I did IT in the Army, 25Q, worked in a signal company then an S6 shop. I spent 9 years and 2 deployments in the military, got remarried earned a bachelors and masters in Economics. I have 3 children a fantastic wife and work in data analytics in the IT audit department of a bank.
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
  padding-top: 1%;
  text-align:center;
}
</style>
