<template>
  <div>
      <h2><nuxt-link :to="{ 'path': `/${category.name}` }">{{ category.name }}</nuxt-link></h2>
    <div v-for="(level, index) in category.levels" :key={index}>
        <Level :index="index" :level="level"/>
    </div>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"
import Trick from "./Trick.vue"
import Level from "./Level.vue";

@Component({
  components: {
      Level,
    Trick
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
        color: white;
        text-decoration: none;
    }
    h2 a:hover {
        text-decoration: underline;
    }

</style>
