<template>
    <div id="TheLayout">
        <div id="TheHeader">
            <TheHeader />
        </div>
        <div id="TheSidebar">
            <TheSidebar/>
        </div>
        <div id="TheMain">
            <nuxt/>
        </div>
        <div id="TheFooter">
            <a href="https://github.com/walf443/yotube/issues" target="_blank" rel="noopener">Contact</a>
        </div>
    </div>
</template>

<style scoped>
    #TheLayout {
        display: grid;
        grid-template-columns: 150px 1fr;
    }
    #TheHeader {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana,
        sans-serif;
        grid-column: 1 / 3;
    }

    #TheSidebar {
        grid-column: 1 / 2;
        width: 150px;
    }

    #TheMain {
        grid-column: 2 / 3;
    }

    #TheFooter {
        grid-column: 2 / 3;
        text-align: center;
    }

    #TheFooter a {
        color: #666;
    }

    @media screen and (max-width: 450px) {
        #TheLayout {
            grid-template-columns: 0 1fr;
        }

        #TheHeader {
            padding: 12px;
        }

        #TheSidebar {
            display: none;
        }

        #TheMain {
            grid-column: 1 / 3;
        }
    }

</style>
<script>
    import TheHeader from "./TheHeader";
    import TheSidebar from "./TheSidebar";

    export default {
        components: {TheSidebar, TheHeader}
    }
</script>
