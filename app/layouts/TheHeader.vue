<template>
    <el-menu mode="horizontal">
        <el-menu-item index="1" @click="$router.push('/')">
            <nuxt-link id="TheLogo" :to="{ path: '/' }">Yo tube</nuxt-link>
        </el-menu-item>
        <el-menu-item index="2" @click="$router.push('/1A/level1')">
            <nuxt-link :to="{ path: '/1A/level1' }">1A</nuxt-link>
        </el-menu-item>
        <el-menu-item index="3" @click="$router.push('/2A/level1')">
            <nuxt-link :to="{ path: '/2A/level1' }">2A</nuxt-link>
        </el-menu-item>
        <el-menu-item index="4" @click="$router.push('/3A/level1')">
            <nuxt-link :to="{ path: '/3A/level1' }">3A</nuxt-link>
        </el-menu-item>
        <el-menu-item index="5" @click="$router.push('/4A/level1')">
            <nuxt-link :to="{ path: '/4A/level1' }">4A</nuxt-link>
        </el-menu-item>
        <el-menu-item index="6" @click="$router.push('/5A/level1')">
            <nuxt-link :to="{ path: '/5A/level1' }">5A</nuxt-link>
        </el-menu-item>
    </el-menu>
</template>
<script>
    export default {
        name: 'TheHeader'
    }
</script>
<style scoped>
    #TheLogo {
        font-weight: bold;
        font-size: 20px;
        color: red;
        text-decoration: none;
    }

    .el-menu-item a {
        text-decoration: none;
    }

    @media screen and (max-width: 450px) {
        #TheLogo {
            padding: 16px;
        }
        .el-menu-item {
            padding: 12px;
        }
    }

</style>
