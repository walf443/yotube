<template>
    <el-container>
        <el-header id="TheHeader">
            <el-menu mode="horizontal">
                <el-menu-item index="1" @click="$router.push('/')"><nuxt-link id="TheLogo" :to="{ path: '/' }" >Yoyotube</nuxt-link></el-menu-item>
                <el-menu-item index="2" @click="$router.push('/1A')"><nuxt-link :to="{ path: '/1A' }" >1A</nuxt-link></el-menu-item>
                <el-menu-item index="3" @click="$router.push('/2A')"><nuxt-link :to="{ path: '/2A' }" >2A</nuxt-link></el-menu-item>
                <el-menu-item index="4" @click="$router.push('/3A')"><nuxt-link :to="{ path: '/3A' }" >3A</nuxt-link></el-menu-item>
                <el-menu-item index="5" @click="$router.push('/4A')"><nuxt-link :to="{ path: '/4A' }" >4A</nuxt-link></el-menu-item>
                <el-menu-item index="6" @click="$router.push('/5A')"><nuxt-link :to="{ path: '/5A' }" >5A</nuxt-link></el-menu-item>
            </el-menu>
        </el-header>
        <el-container>
            <el-aside width="200px">
            </el-aside>
            <el-container>
                <el-main id="TheMain">
                    <nuxt/>
                </el-main>
                <el-footer>Powered by Next.js</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<style>
    #TheHeader {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana,
        sans-serif;
    }
    #TheHeader a {
        text-decoration: none;
    }
    #TheLogo {
        font-weight: bold;
        font-size: 20px;
        color: red;
        text-decoration: none;
    }

    #TheMain {
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(1) .el-aside,
    .el-container:nth-child(2) .el-aside {
        line-height: 260px;
    }
</style>
