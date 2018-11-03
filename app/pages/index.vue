<template>
    <div class="categories">
      <Category v-for="(category, index) in categories" :key=category.id :category="category"></Category>
    </div>
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

</style>