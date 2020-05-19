<template>
    <b-card no-body class="content-card">
        <b-card-header header-tag="header" role="tab" class="content-card-header">
            <b-button block v-b-toggle.accordion-1 variant="feautured" class="content-card-button text-left">Main information</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>

                <b-form-group
                    label-cols-sm="2"
                    label="IP"
                    >
                    <b-form-input id="nested-street" plaintext value="148.251.51.135"></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols-sm="2"
                    label="Device ID"
                    >
                    <b-form-input id="nested-street" plaintext value="7b6601"></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols-sm="2"
                    label="Device name"
                    >
                    <b-form-input id="nested-street" plaintext value="Бегущая строка"></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols-sm="2"
                    label="Last online"
                    >
                    <b-form-input id="nested-street" plaintext value="Never"></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols-sm="2"
                    label="Status"
                    >
                    <b-button variant="danger">OFFLINE</b-button>
                </b-form-group>
                <b-alert variant="warning" show>
                    To configure your device connect it to Easy-IoT server
                </b-alert>
            </b-card-body>
        </b-collapse>
    </b-card>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class MainInfo extends Vue {}
</script>

<style scoped>

    .content-card {
        border-bottom-width: 0px;
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