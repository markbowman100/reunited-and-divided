<template>
  <div class="episodes">
    <br>
    <div v-for="episode in episodes" :key="episode.trackPath">
      <Episode :trackPath="episode.trackPath" :title="episode.title"></Episode>
    </div>
  </div>
</template>

<script lang="ts">
import Episode from '../components/Episode.vue'
export default {
  name: "Episodes",
  data: function() {
    const episodes = [
      {
        trackPath: "https://w.soundcloud.com/player/?url=https%3A//api-v2.soundcloud.com/tracks/797753905&amp;",
        title: "Episode 1: How to Ruin Friendships"
      },
      {
        trackPath: "https://w.soundcloud.com/player/?url=https%3A//api-v2.soundcloud.com/tracks/797903593&amp;",
        title: "Episode 2: Governor Whitmer's response to COVID-19"
      },
      {
        trackPath: "https://w.soundcloud.com/player/?url=https%3A//api-v2.soundcloud.com/tracks/797913283&amp;",
        title: "Episode 3: USS Roosevelt"
      },
      {
        trackPath: "https://w.soundcloud.com/player/?url=https%3A//api-v2.soundcloud.com/tracks/798419041&amp;",
        title: "Episode 4: UBI"
      },
      {
        trackPath: "https://w.soundcloud.com/player/?url=https%3A//api-v2.soundcloud.com/tracks/801756307&amp;",
        title: "Episode 5: Healthcare and the Democratic Party"
      },
      {
        trackPath: "https://w.soundcloud.com/player/?url=https%3A//api-v2.soundcloud.com/tracks/801944686&amp;",
        title: "Episode 6: Guns"
      }
    ]

    return {
      episodes: episodes
    }
  },
  components: {
    Episode
  }
}
</script>