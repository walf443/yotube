<template>
    <div>
        <nuxt-link class="title" :to="{ name: 'tricks-name', params: { name: trick.name } }">{{trick.name}}</nuxt-link>
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
      return "http://www.youtube.com/embed?listType=search&amp;list=" + encodeURIComponent("ヨーヨー " + this.trick.name);
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

    a {
        color: white;
        text-decoration: none;
    }

</style>