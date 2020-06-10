<template>
    <b-navbar expand="lg" type="dark" variant="dark" fixed="top" class="nav-content">
        <b-navbar-brand class="logo">Easy-IoT</b-navbar-brand>
        <Devices />
        <!--<b-button variant="outline-light">Logout</b-button>-->
    </b-navbar>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import Devices from "@/components/Header/Devices.vue";

    @Component({
        components: {
            Devices
        }
    })
    export default class Header extends Vue {}
</script>

<style scoped>

    .logo {
        font-family: monospace !important;
        font-size: 24px !important;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        margin-right: 0 !important;
        color: white !important;
    }
</style>