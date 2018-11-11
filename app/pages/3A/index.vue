<template>
  <section>
      <Category :category="category"/>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"
import {findCategoryByName, utils} from "../../utils/trick"
import Category from "../../components/Category"

@Component({
  components: {
    Category
  }
})
export default class extends Vue {
  @State categories;
  get category (): utils.Category | null {
    return findCategoryByName(this.categories, '3A');
  }

  async fetch({ store, route }) {
      store.dispatch('routeChanged', { route: route });
  }
}
</script>
<style scoped>

</style>
