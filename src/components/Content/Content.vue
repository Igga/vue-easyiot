<template>
    <div role="tablist" class="content">
        
        <MainInfo />

        <Pins />

        <b-card no-body style="border-bottom-width: 0px; border-top-width: 0px; border-radius: 0rem">
            <b-card-header header-tag="header" role="tab" class="content-card-header">
                <b-button block v-b-toggle.accordion-3 variant="feautured" class="content-card-button text-left">Analog (PWM)</b-button>
            </b-card-header>
            <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                    <b-card-text>0adgvbpso0idchgsa0d8ig<br>hbsa0pgsad0psadgasd8igasd<br>0sagd0sagsa09ogsabd0Б<br>sagd</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

        <Variables />
        
        <Functions />

    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import MainInfo from "@/components/Content/MainInfo.vue"
    import Variables  from "@/components/Content/Variables.vue";
    import Functions from "@/components/Content/Functions.vue";
    import Pins from "@/components/Content/Pins.vue";


    @Component({
        components: {
            MainInfo,
            Variables,
            Functions,
            Pins
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