<template>
    <div>
        <nuxt-link :to="{ name: 'tricks-name', params: { name: trick.name } }">{{trick.name}}</nuxt-link>
        <div class="card">
            <iframe class="youtubePlayer" :src="videoUrl" />
        </div>
    </div>
</template>

<script lang="ts">
  import { Vue, Prop, Component } from 'nuxt-property-decorator'

  @Component({})
  export default class Trick extends Vue {
    @Prop() trick

    get videoUrl() {
      return "http://www.youtube.com/embed?listType=search&amp;list=" + encodeURIComponent("ヨーヨー " + this.trick.name);
    }
  }
</script>

<style scoped>
.youtubePlayer {
  width: 400px;
  height: 300px;
}
</style>