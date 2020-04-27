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
    <div v-for="person in personInfo" :key="person.name">
      <Person :description="person.description" :name="person.name" :imagePath="person.imagePath"></Person>
    </div>
  </div>
</template>

<script>
  import Person from '../components/Person'

  export default {
    name: 'About',
    data: function() {
      const personData = [
        {
          description:"Classified",
          name:"Richard Devoe",
          imagePath:"img/richard.jpg"
        },
        {
          description:`George Quick: I met Mark and Rich in the 8th grade, we made our own versions of RPGs and strategy games to play at lunch. 
            In high school, we played Magic the Gathering, poker and Dungeons and Dragons. 
            We were in choir and drama together, we hung out on weekends at my Dad's on the farm or at Rich's house. 
            We spent the summers together on the farm or in summer school. Then the bad times came, we don't talk about the bad times. 
            I got married, joined the Army and moved to Germany. I did IT in the Army, 25Q, worked in a signal company then an S6 shop. 
            I spent 9 years and 2 deployments in the military, got remarried earned a bachelors and masters in Economics. 
            I have 3 children a fantastic wife and work in data analytics in the IT audit department of a bank. `,
          name:"George Quick",
          imagePath:"img/george.jpg"
        },
        {
          description:`Mark Bowman: I don't remember exactly when I met Richard, but I didn't like him. 
            I met George in 8th grade, and he invited me to play games. I found out later that Richard was invited too.  
            I was immediately skeptical of George at that point, but I gave it a shot anyway. It was a good thing.  
            Within a short period of time, we became good friends, and we continued playing games,  
            poker, dungeons and dragons, custom RPGs, video games, etc.  
            Then George destroyed everything. He got married. Then we all joined the military.  
            I served in the United States Air Force as Security Forces for six years.  
            I met my wife playing Star Wars The Old Republic. I went to college for Information Systems,  
            and I sought a career as a Software Engineer. I've been developing software ever since.  
            My wife and I got married in 2017, and my daughter was born in 2019. `,
          name:"Mark Bowman",
          imagePath:"img/mark.png"
        }
      ];

      return {
        personInfo: personData
      };
    },
    components: {
      Person
    }
  }
</script>

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