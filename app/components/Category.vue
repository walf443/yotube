<template>
  <div class="category">
    <h2>{{ category.name }}</h2>
    <div v-for="(level, index) in category.levels" :key={index}>
      <div>レベル{{index + 1}}</div>
      <div v-for="(trick, index) in level.tricks" :key={index}>
        <div><nuxt-link :to="{ name: 'tricks-name', params: { name: trick.name } }">{{trick.name}}</nuxt-link></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

@Component({})
export default class Category extends Vue {
  @Prop() category
}
</script>
<style scoped>
.card {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
  padding: 1rem;
  margin: 0.25rem;
  border: 0.25rem solid gainsboro;
}
</style>
