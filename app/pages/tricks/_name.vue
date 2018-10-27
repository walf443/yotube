<template>
  <section>
    <div v-if="trick">
      <h1 class="header">{{trick.name}}</h1>
      <Trick :trick="trick" />
      <div class="categories">
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"
import {findTrickByName} from "~/utils/trick"
import Trick from "~/components/Trick"

@Component({
  components: {
    Trick
  }
})
export default class TagNamePage extends Vue {
  @State categories;
  get trick () {
    return findTrickByName(this.categories, this.$route.params.name);
  }
}
</script>
<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana,
    sans-serif;
}

</style>
