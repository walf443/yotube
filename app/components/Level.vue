<template>
    <div>
        <div @click="toggleExpanded">{{levelName}}</div>
        <div v-if="isExpanded">
            <div v-for="(trick, index) in level.tricks" :key={index} style="display: flex; flex: 1">
                <div>
                    <Trick :trick="trick"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import {Vue, Component, Prop} from "nuxt-property-decorator";
    import Trick from "../components/Trick"

    @Component({
        components: {Trick},
    })
    export default class Level extends Vue {
        @Prop() index;
        @Prop() level;
        @Prop() isExpanded;
        get levelName() {
            return `レベル${this.index + 1}`;
        }
        toggleExpanded() {
            this.isExpanded = !this.isExpanded;
        }
    }
</script>