<template>
    <div class="menu">
        <div class="menu-item-logo menu-item" index="1" @click="$router.push('/')">
            <nuxt-link id="TheLogo" :to="{ path: '/' }">Yo tube</nuxt-link>
        </div>
        <div class="menu-item" index="2" @click="$router.push('/1A/level1')">
            <nuxt-link :to="{ path: '/1A/level1' }">1A</nuxt-link>
        </div>
        <div class="menu-item" index="3" @click="$router.push('/2A/level1')">
            <nuxt-link :to="{ path: '/2A/level1' }">2A</nuxt-link>
        </div>
        <div class="menu-item" index="4" @click="$router.push('/3A/level1')">
            <nuxt-link :to="{ path: '/3A/level1' }">3A</nuxt-link>
        </div>
        <div class="menu-item" index="5" @click="$router.push('/4A/level1')">
            <nuxt-link :to="{ path: '/4A/level1' }">4A</nuxt-link>
        </div>
        <div class="menu-item" index="6" @click="$router.push('/5A/level1')">
            <nuxt-link :to="{ path: '/5A/level1' }">5A</nuxt-link>
        </div>
    </div>
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

    .menu {
        display: flex;
        align-items: center;
    }

    .menu-item:hover {
        cursor: pointer;
    }

    .menu-item-logo {
        width: 120px;
    }

    .menu-item > a {
        padding: 16px;
        text-decoration: none;
    }

    @media screen and (max-width: 450px) {
        .menu-item > a {
            padding: 12px;
        }
    }

</style>
