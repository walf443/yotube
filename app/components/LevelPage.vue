<template>
  <section>
      <div class="page-nav">
          <div class="page-nav-link page-nav-left" v-if="prevLevel" @click="handleClickPrev">
              <i class="el-icon-arrow-left" /> {{prevLevelName}}
          </div>
          <div class="page-nav-link page-nav-right" v-if="nextLevel" @click="handleClickNext">
              {{nextLevelName}} <i class="el-icon-arrow-right" />
          </div>
      </div>
      <Level :category="category" :level="level" :index="levelIndex" isExpanded="true" />
      <div class="page-nav">
          <div class="page-nav-link page-nav-left" v-if="prevLevel" @click="handleClickPrev">
             <i class="el-icon-arrow-left" /> {{prevLevelName}}
          </div>
          <div class="page-nav-link page-nav-right" v-if="nextLevel" @click="handleClickNext">
              {{nextLevelName}} <i class="el-icon-arrow-right" />
          </div>
      </div>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"
import {utils, findCategoryByName, findCategoryLevel} from "../utils/trick"
import Level from "../components/Level"

@Component({
  components: {
      Level
  }
})

export default class LevelPage extends Vue {
  @State categories;

  async fetch({ store, route }) {
      store.dispatch('routeChanged', { route: route });
  }

  get category(): utils.Category | null {
      return findCategoryByName(this.categories, this.categoryName);
  }

  get level (): utils.Level | null {
    return findCategoryLevel(this.categories, this.categoryName, this.levelIndex);
  }

  get prevLevelName(): string | null {
      return this.getLevelName(this.levelIndex - 1);
  }

  get nextLevelName(): string | null {
      return this.getLevelName(this.levelIndex + 1);
  }

  get prevLevel(): utils.Level | null {
      return findCategoryLevel(this.categories, this.categoryName, this.levelIndex - 1);
  }

  get nextLevel(): utils.Level | null {
      return findCategoryLevel(this.categories, this.categoryName, this.levelIndex + 1);
  }

  get categoryName(): string {
      throw 'please override';
  }

  get levelIndex(): number {
      throw 'please override';
  }

  getLevelName(index: number): string {
      return `レベル${index + 1}`;
  }

  getLevelLink(index: number): string | null {
      const category = this.category;
      if (category == null) {
          return null;
      }

      return `/${category.name}/level${index + 1}`;
  }

  handleClickPrev() {
      const link = this.getLevelLink(this.levelIndex - 1);
      if (link == null) {
          return;
      }
      this.$router.push(link);
  }
  handleClickNext() {
      const link = this.getLevelLink(this.levelIndex + 1);
      if (link == null) {
          return;
      }
      this.$router.push(link);
  }
}
</script>

<style scoped>
    .page-nav {
        width: 100%;
        height: 20px;
    }

    .page-nav::after {
        content: ' ';
        clear: both;
    }

    .page-nav-link {
        color: #666;
    }

    .page-nav-link:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    .page-nav-left {
      float: left;
    }

    .page-nav-right {
      float: right;
    }
</style>
