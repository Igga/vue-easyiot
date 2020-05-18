<template>
    <b-navbar-nav class="ml-center">
        <b-nav-item-dropdown text="My Devices" center>
            <NewDevice />
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Farm controller</b-dropdown-item>
            <b-dropdown-item>Gates controller</b-dropdown-item>
            <b-dropdown-item>Flower controller</b-dropdown-item>
        </b-nav-item-dropdown>
    </b-navbar-nav>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import NewDevice from "@/components/Header/NewDevice.vue";

    @Component({
        components: {
            NewDevice
        }
    })
    export default class Devices extends Vue {}
</script>