<template>
    <div>
        <h3>
            <nuxt-link :to="{ 'path': pagePath }">
                {{levelName}}
            </nuxt-link>
        </h3>

        <el-row :gutter="20" v-if="isExpanded">
            <el-col :span="12" :xs="24" :md=12 :lg="8" v-for="(trick, index) in level.tricks" :key=trick.id>
                <Trick :trick="trick" isExpanded="true" />
            </el-col>
        </el-row>
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
            return `/${this.category.name}/level${this.index + 1}`;
        }
        toggleExpanded() {
            this.isExpanded = !this.isExpanded;
        }
    }
</script>

<style scoped>
    h3 a {
        text-decoration: none;
    }
    .el-col {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }


</style>
