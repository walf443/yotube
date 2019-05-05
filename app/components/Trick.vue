<template>
    <div class="trick-card">
        <div class="clearfix">
            <div class="title">{{trick.name.ja}}</div>
            <div class="title">{{trick.name.en}}</div>

            <el-button class="btn-see-more" type="text" @click="handleSeeMore">別の動画を探す</el-button>
        </div>
        <div v-if="isExpanded" class="item">
            <div>
                <iframe class="youtubePlayer" :src="videoUrl" />
            </div>
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
      return "https://www.youtube.com/embed?listType=search&amp;list=" + encodeURIComponent("ヨーヨー " + this.trick.name.ja);
    }

    toggleExpand() {
        this.isExpanded = !this.isExpanded;
    }

    handleSeeMore() {
        window.open('https://www.youtube.com/results?search_query=' + encodeURIComponent("ヨーヨー " + this.trick.name.ja));
    }
  }
</script>

<style scoped>
    .trick-card {
        max-width: 440px;
        margin: auto;
        margin-bottom: 40px;
    }

    .btn-see-more {
        float: right;
    }

    .clearfix:before, .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both;
    }

    .youtubePlayer {
        width: 400px;
        height: 300px;
    }

    .title {
        font-size: 20px;
        font-weight: bold;
    }

    @media screen and (max-width: 450px) {
        .trick-card {
            width: 330px;
            min-height: initial;
        }

        .youtubePlayer {
            width: 284px;
            height: 213px;
        }
    }

</style>
