<template>
  <div>
    <h2>{{ category.name }}</h2>
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
