<template>
    <el-menu mode="vertical" v-if="currentCategory" :default-active="activeMenuIndex">
        <el-menu-item v-for="(level, index) in currentCategory.levels" :key="`sidebar-${level.id}`"
            :index="index.toString()" @click="$router.push(`/${currentCategory.name}/${level.name}`)">

            <nuxt-link :to="{ path: `/${currentCategory.name}/${level.name}` }">{{`レベル${index + 1}`}}</nuxt-link>
        </el-menu-item>
    </el-menu>
</template>
<script lang="ts">
    import {
        Component,
        Prop,
        Vue
    } from "nuxt-property-decorator"
    import {utils} from "../utils/trick";

    @Component({
    })
    export default class extends Vue {
        get currentCategory() {
            return this.$store.state.currentCategory;
        }

        get currentLevel() {
            return this.$store.state.currentLevel;
        }
        get activeMenuIndex(): string {
            const category = this.currentCategory;
            if (category == null) {
                return "";
            }
            const level = this.currentLevel;
            if (level == null) {
                return "";
            }
            console.log(level.name);
            let index = 0;
            for (const l of category.levels) {
                if (l.name == level.name ) {
                    console.log(l.name);
                    return index.toString();
                }
                index++;
            }
            return "";
        }
    }
</script>

<style scoped>
    .el-menu-item a {
        color: black;
        text-decoration: none;
    }

</style>
