<template>
    <div role="tablist" class="content">
        
        <div v-if="!isDevice">
            Create your first device with "My Devices"
        </div>

        <div v-if="isDevice">
        
            <MainInfo />

            <Digital />

            <Analog />

            <Variables />
            
            <Functions />

            <Events />
            <!--
            <Sheduler />
            
            <Programming />
            -->
        </div>

    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import MainInfo from "@/components/Content/MainInfo.vue"
    import Variables  from "@/components/Content/Variables.vue";
    import Functions from "@/components/Content/Functions.vue";
    import Digital from "@/components/Content/Digital.vue";
    import Analog from "@/components/Content/Analog.vue";
    import Events from "@/components/Content/Events.vue";
    import Sheduler from "@/components/Content/Sheduler.vue";
    import Programming from "@/components/Content/Programming.vue";

    @Component({
        computed: {
            isDevice(): boolean {
                return !!this.$store.getters.selectedDevice;
            }
        },
        components: {
            MainInfo,
            Variables,
            Functions,
            Digital,
            Analog,
            Events,
            Sheduler,
            Programming
        }
    })
    export default class Content extends Vue {}
</script>

<style>

    .content {
        padding: 20px;
        margin-top: 60px;
    }

</style>