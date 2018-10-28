<template>
  <section>
      <Level :level="level" :index="0" />
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
      return findCategoryByName(this.categories, '1A');
  }

  get level (): utils.Level | null {
    return findCategoryLevel(this.categories, '1A', 0);
  }
}
</script>
