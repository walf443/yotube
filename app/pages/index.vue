<template>
  <section>
    <h1 class="header">Yoyotube</h1>
    <div class="categories">
      <Category v-for="(category, index) in categories" :key="index" :category="category"></Category>
    </div>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"
import Category from "../components/Category.vue"

@Component({
  components: {
    Category
  }
})
export default class extends Vue {
  @State categories
}
</script>
<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>