<template>
  <div class="episode">
    <p class="md-subheading">
      {{title}}
    </p>
    <iframe width="100%" :src="trackPath"></iframe>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Episode extends Vue {
  @Prop() private title!: string;
  @Prop() private trackPath!: string;
}
</script>
