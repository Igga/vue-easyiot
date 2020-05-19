<template>
    <div role="tablist" class="content">
        
        <MainInfo />

        <Digital />

        <Analog />

        <Variables />
        
        <Functions />

        <Sheduler />

        <Programming />

    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import MainInfo from "@/components/Content/MainInfo.vue"
    import Variables  from "@/components/Content/Variables.vue";
    import Functions from "@/components/Content/Functions.vue";
    import Digital from "@/components/Content/Digital.vue";
    import Analog from "@/components/Content/Analog.vue";
    import Sheduler from "@/components/Content/Sheduler.vue";
    import Programming from "@/components/Content/Programming.vue";

    @Component({
        components: {
            MainInfo,
            Variables,
            Functions,
            Digital,
            Analog,
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