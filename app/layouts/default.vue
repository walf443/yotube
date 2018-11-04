<template>
    <el-container>
        <el-header id="TheHeader">
            <nuxt-link id="TheLogo" :to="{ path: '/' }" >Yoyotube</nuxt-link>
            <el-menu>
            </el-menu>
        </el-header>
        <el-container>
            <el-aside width="200px">
                サイドバー
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
