<template>
    <section>
        <section id="TheHeader">
            <nuxt-link id="TheLogo" :to="{ path: '/' }" >Yoyotube</nuxt-link>
        </section>
        <section id="TheMain">
            <nuxt/>
        </section>
    </section>
</template>

<style scoped>
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
</style>
