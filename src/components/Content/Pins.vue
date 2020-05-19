<template>
    <b-card no-body class="content-card">
        <b-card-header header-tag="header" role="tab" class="content-card-header">
            <b-button block v-b-toggle.accordion-2 variant="feautured" class="content-card-button text-left">Digital</b-button>
        </b-card-header>
        <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <b-card-group deck>
                    <b-card no-body style="max-width: 20rem;">
                        <b-card-body>
                            <b-card-title>PIN 5</b-card-title>
                            <b-card-sub-title class="mb-2">MODE INPUT</b-card-sub-title>
                            <b-card-text class="card-text">
                                Red pin
                            </b-card-text>
                        </b-card-body>
                        <b-card-footer>
                            <b-input-group>
                                <b-input-group-append>
                                    <b-button variant="outline-dark">READ</b-button>
                                    <b-button variant="outline-dark">OUTPUT</b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </b-card-footer>
                    </b-card>
                    
                    <b-card no-body style="max-width: 20rem;">
                        <b-card-body>
                            <b-card-title>PIN 5</b-card-title>
                            <b-card-sub-title class="mb-2">MODE INPUT</b-card-sub-title>
                            <b-card-text class="card-text">
                                Red pin
                            </b-card-text>
                        </b-card-body>
                        <b-card-footer>
                            <b-input-group>
                                <b-input-group-append>
                                    <b-button variant="outline-dark">READ</b-button>
                                    <b-button variant="outline-dark">OUTPUT</b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </b-card-footer>
                    </b-card>

                </b-card-group>

                <b-input-group class="mt-3">
                    <b-form-input
                        placeholder="Enter function name"
                    ></b-form-input>
                    <b-input-group-append>
                    <b-button variant="outline-success">ADD INPUT</b-button>
                    <b-button variant="outline-success">ADD OUTPUT</b-button>
                    </b-input-group-append>
                </b-input-group>

            </b-card-body>
        </b-collapse>
    </b-card>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class Pins extends Vue {}
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

    .card-text {
        min-height: 80px !important;
    }


</style>