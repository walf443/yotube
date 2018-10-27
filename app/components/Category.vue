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
import Trick from "~/components/Trick"
import Level from "./Level";

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
