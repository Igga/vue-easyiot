<template>
    <b-card no-body class="content-card">
        <b-card-header header-tag="header" role="tab" class="content-card-header">
            <b-button block v-b-toggle.accordion-5 variant="feautured" class="content-card-button text-left">Functions</b-button>
        </b-card-header>
        <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>

                <b-input-group v-for="(name, index) in device.functions" v-bind:key="index" :prepend="name" class="mt-3">
                    <b-form-input placeholder="Param"></b-form-input>
                    <b-input-group-append>
                    <b-button variant="outline-success">Send</b-button>
                    <b-button variant="outline-danger">Delete</b-button>
                    </b-input-group-append>
                </b-input-group>

                <b-input-group class="mt-3">
                    <b-form-input
                        placeholder="Enter function name"
                    ></b-form-input>
                    <b-input-group-append>
                    <b-button variant="outline-success">ADD</b-button>
                    </b-input-group-append>
                </b-input-group>

            </b-card-body>
        </b-collapse>
    </b-card>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import { Function } from "@/store/device/types";

    @Component({
        computed: {
            device: function() {
                return this.$store.getters.selectedDevice;
            }
        }
    })
    export default class Functions extends Vue {}
</script>

<style scoped>

    .content-card {
        border-bottom-width: 0px;
        border-top-width: 0px;
        border-radius: 0rem
    }

    .content-card-header {
        padding: 0px;
        height: 65px;
    }

    .content-card-button {
        height: 100%;
        font-weight: 400;
        color: #007bff;
        text-decoration: none;
        padding: 20px;
    }

</style>