<template>
    <div>
        <div class="title">{{trick.name.ja}}</div>
        <div class="title">{{trick.name.en}}</div>
        <div v-if="isExpanded">
            <iframe class="youtubePlayer" :src="videoUrl" />
        </div>
    </div>
</template>

<script lang="ts">
  import { Vue, Prop, Component } from 'nuxt-property-decorator'

  @Component({})
  export default class Trick extends Vue {
    @Prop() trick;
    @Prop() isExpanded;

    get videoUrl() {
      return "http://www.youtube.com/embed?listType=search&amp;list=" + encodeURIComponent("ヨーヨー " + this.trick.name.ja);
    }

    toggleExpand() {
        this.isExpanded = !this.isExpanded;
    }
  }
</script>

<style scoped>
    .youtubePlayer {
        width: 400px;
        height: 300px;
    }

    .title {
        font-size: 20px;
        font-weight: bold;
    }

</style>