<template>
    <div v-if="currentCategory">
        <el-menu mode="vertical" v-if="currentCategory" v-for="(level, index) in currentCategory.levels" key="sidebar-${level.id}">
            <el-menu-item :index="index.toString()" @click="$router.push(`/${currentCategory.name}/${level.name}`)">
                <nuxt-link :to="{ path: `/${currentCategory.name}/${level.name}` }">{{`レベル${index + 1}`}}</nuxt-link>
            </el-menu-item>
        </el-menu>
    </div>
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
    }
</script>
