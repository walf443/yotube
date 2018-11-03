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
import {utils, findCategoryByName, findCategoryLevel} from "../../utils/trick"
import Level from "../../components/Level"

@Component({
  components: {
      Level
  }
})
export default class extends Vue {
  @State categories;
  get category(): utils.Category | null {
      return findCategoryByName(this.categories, '4A');
  }

  get level (): utils.Level | null {
    return findCategoryLevel(this.categories, '4A', this.levelIndex);
  }

  get levelIndex(): number {
      return 1;
  }
}
</script>
