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
import {findCategoryByName} from "../utils/trick"
import Category from "../components/Category"

@Component({
  components: {
    Category
  }
})
export default class extends Vue {
  @State categories;
  get category () {
    return findCategoryByName(this.categories, '1A');
  }
}
</script>
<style scoped>

</style>
