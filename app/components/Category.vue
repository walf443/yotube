<template>
  <div class="container">
    <h2>{{ category.name }}</h2>
    <div v-for="(level, index) in category.levels" :key={index}>
      <div>レベル{{index + 1}}</div>
      <div v-for="(trick, index) in level.tricks" :key={index} style="display: flex; flex: 1">
        <div class="card">
          <Trick :trick="trick" />
          <div><nuxt-link :to="{ name: 'tricks-name', params: { name: trick.name } }">{{trick.name}}</nuxt-link></div>
        </div>
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
import Trick from "~/components/Trick"

@Component({
  components: {
    Trick
  }
})
export default class Category extends Vue {
  @Prop() category
}
</script>
