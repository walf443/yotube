<template>
  <div v-if="trick">
    <section>
      <h1 class="header">{{trick.name}}</h1>
      <div class="categories">
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"

function findTrick(categories: any, name: string): any {
  for (const category of categories) {
    for (const level of category.levels) {
      for ( const trick of level.tricks ) {
        if (trick.name === name) {
          return trick
        }
      }
    }
  }
}

@Component({
  components: {
  }
})
export default class extends Vue {
  @State categories;
  get trick () {
    return findTrick(this.categories, this.$route.params.name);
  }
}
</script>
<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
}

</style>
