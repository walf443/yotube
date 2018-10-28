<template>
    <div>
        <h3>
            <nuxt-link :to="{ 'path': pagePath }">
                {{levelName}}
            </nuxt-link>
        </h3>

        <div v-if="isExpanded">
            <div v-for="(trick, index) in level.tricks" :key={index} style="display: flex; flex: 1">
                <div>
                    <Trick :trick="trick" isExpanded="true" />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component, Prop} from "nuxt-property-decorator";
    import Trick from "./Trick"

    @Component({
        components: {Trick},
    })
    export default class Level extends Vue {
        @Prop() category;
        @Prop() index;
        @Prop() level;
        @Prop() isExpanded;
        get levelName(): string {
            return `レベル${this.index + 1}`;
        }
        get pagePath(): string {
            return `${this.category.name}/level${this.index + 1}`;
        }
        toggleExpanded() {
            this.isExpanded = !this.isExpanded;
        }
    }
</script>

<style scoped>
    h3 a {
        color: white;
        text-decoration: none;
    }
</style>
