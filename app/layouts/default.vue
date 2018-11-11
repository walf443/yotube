<template>
    <el-container>
        <el-header id="TheHeader">
            <TheHeader />
        </el-header>
        <el-container>
            <el-aside width="200px">
                <TheSidebar/>
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

<style scoped>
    #TheHeader {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana,
        sans-serif;
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
<script>
    import TheHeader from "./TheHeader";
    import TheSidebar from "./TheSidebar";

    export default {
        components: {TheSidebar, TheHeader}
    }
</script>