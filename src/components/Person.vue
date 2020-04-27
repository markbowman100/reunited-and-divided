<template>
  <div class="person" ref="richard">
    <div class="logo-container">
      <p class="md-display-1">
        {{name}}
      </p>
      <img id="richard" alt="Richard" class="person-image" :src="imagePath">
      <p class="md-subheading description" style="text-align:center;">
        {{description}}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Person extends Vue {
  @Prop() private name!: string;
  @Prop() private description!: string;
  @Prop() private imagePath!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
