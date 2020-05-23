<template>
    <b-navbar-nav class="ml-center">
        <b-nav-item-dropdown text="My Devices" center>
            <NewDevice />
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item v-for="(device, index) in devices" v-bind:key="device.id" @click="selectDevice(index)">{{ device.name }}</b-dropdown-item>
        </b-nav-item-dropdown>
    </b-navbar-nav>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import NewDevice from "@/components/Header/NewDevice.vue";
    import { Device, DEVICE_SELECT } from '../../store/device/types';

    @Component({
        computed: {
            devices: function() {
                return this.$store.getters.devices;
            }
        },
        components: {
            NewDevice
        }
    })
    export default class Devices extends Vue {
        selectDevice(index: number): void {
            this.$store.dispatch(DEVICE_SELECT, index);
        }
    }
</script>