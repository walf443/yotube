<template>
  <section>
      <Level :category="category" :level="level" :index="levelIndex" isExpanded="true" />
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

  get categoryName(): string {
      throw 'please override';
  }

  get levelIndex(): number {
      throw 'please override';
  }
}
</script>
