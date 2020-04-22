<template>
  <div>
    <div class="about" name="about">
      <div class="border-bottom spacing-bottom">
        <img id="r-and-d" alt="Reunited and Divided Logo" class="person-image" src="../assets/r_and_d.jpg">
      </div>
      <div class="description border-bottom">
        <p class="md-subheading">
          Reunited and Divided is a podcast hosted by three high school friends. <br>
          Separated by the military for sixteen years, after many debates on social media, <br>
          they are recording their political views and broadcasting them for all the world to disagree with. <br>
        </p>
      </div>
    </div>
    <div class="spacing-bottom border-bottom">
      <iframe width="100%" src="https://w.soundcloud.com/player/?url=https%3A//api-v2.soundcloud.com/tracks/797753905&amp;"></iframe>
    </div>
    <div class="person" ref="richard">
      <div class="logo-container">
        <p class="md-display-1">
          Richard Devoe
        </p>
        <img id="richard" alt="Richard" class="person-image" src="../assets/richard.jpg">
        <p class="md-subheading description" style="text-align:center;">
          Richard: Classified
        </p>
      </div>
    </div>
    <div class="person" ref="george">
      <div class="logo-container">
        <p class="md-display-1">
          George Quick
        </p>
        <img id="george" alt="George" class="person-image" src="../assets/george.jpg">
        <p class="md-subheading description" style="text-align:center;">
          George Quick: I met Mark and Rich in the 8th grade, we made our own versions of RPGs and strategy games to play at lunch. <br>
          In high school, we played Magic the Gathering, poker and Dungeons and Dragons. <br>
          We were in choir and drama together, we hung out on weekends at my Dad's on the farm or at Rich's house. <br>
          We spent the summers together on the farm or in summer school. Then the bad times came, we don't talk about the bad times. <br>
          I got married, joined the Army and moved to Germany. I did IT in the Army, 25Q, worked in a signal company then an S6 shop. <br>
          I spent 9 years and 2 deployments in the military, got remarried earned a bachelors and masters in Economics. <br>
          I have 3 children a fantastic wife and work in data analytics in the IT audit department of a bank. <br>
        </p>
      </div>
    </div>
    <div class="person" ref="mark">
      <div class="logo-container">
        <p class="md-display-1">
          Mark Bowman
        </p>
        <img id="mark" alt="Mark" class="person-image md-primary" src="../assets/mark.png">
        <p class="md-subheading description" style="text-align:center;">
          Mark Bowman: I don't remember exactly when I met Richard, but I didn't like him. <br>
          I met George in 8th grade, and he invited me to play games. I found out later that Richard was invited too.  <br>
          I was immediately skeptical of George at that point, but I gave it a shot anyway. It was a good thing.  <br>
          Within a short period of time, we became good friends, and we continued playing games,  <br>
          poker, dungeons and dragons, custom RPGs, video games, etc.  <br>
          Then George destroyed everything. He got married. Then we all joined the military.  <br>
          I served in the United States Air Force as Security Forces for six years.  <br>
          I met my wife playing Star Wars The Old Republic. I went to college for Information Systems,  <br>
          and I sought a career as a Software Engineer. I've been developing software ever since.  <br>
          My wife and I got married in 2017, and my daughter was born in 2019. <br>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.person-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width:50%;
  }
  .about {
    text-align:center;
    border-bottom-style: solid;
    border-color: grey;
    border-width: .5px;
    padding: 4%;
    padding-bottom: 6%;
  }
  .person {
    padding: 4%;
    text-align:center;
    border-bottom-style: solid;
    border-color: grey;
    border-width: .5px;
  }
  .border-bottom {
    border-bottom-style: solid;
    border-color: grey;
    border-width: .5px;
  }
  .spacing-bottom {
    padding-bottom: 5%;
  }
</style>