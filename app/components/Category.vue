<template>
  <div>
      <h2><nuxt-link :to="{ 'path': `/${category.name}/level1` }">{{ category.name }}</nuxt-link></h2>
    <div v-for="(level, index) in category.levels" :key=level.id>
        <Level :index="index" :level="level" :category="category" />
    </div>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"
import Level from "./Level.vue";

@Component({
  components: {
      Level,
  }
})
export default class Category extends Vue {
  @Prop() category;
  clickLevel() {
  }

}
</script>
<style>
    h2 a {
        text-decoration: none;
    }
    h2 a:hover {
        text-decoration: underline;
    }

</style>
