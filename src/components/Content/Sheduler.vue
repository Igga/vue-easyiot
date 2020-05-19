<template>
    <b-card no-body class="content-card">
        <b-card-header header-tag="header" role="tab" class="content-card-header">
            <b-button block v-b-toggle.accordion-6 variant="feautured" class="content-card-button text-left">Sheduler</b-button>
        </b-card-header>
        <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <b-alert show dismissible fade>
                    CALL <b>FUNCTION LCD</b> EVERY <b>2 MIN</b>
                </b-alert>
                <b-alert show dismissible fade>
                    GET <b>VARIABLE TEMPERATURE</b> EVERY <b>2 MIN</b>
                </b-alert>
                <b-input-group style="justify-content: center;">
                    <template v-slot:prepend>
                        <b-input-group>
                            <template v-slot:prepend>
                                <b-form-select v-model="selected" v-b-tooltip.hover title="GET variable or CALL function">
                                    <b-form-select-option value="a">GET</b-form-select-option>
                                    <b-form-select-option value="b">CALL</b-form-select-option>
                                </b-form-select>
                            </template>
                            <template v-slot:append>
                                <b-input-group>
                                    <template v-slot:prepend>
                                        <b-input-group-text >VARIABLE</b-input-group-text>
                                    </template>
                                    <template v-slot:append>
                                        <b-form-select v-model="selected">
                                            <b-form-select-option value="a">TEMPERATURE</b-form-select-option>
                                            <b-form-select-option value="b">HUMIDITY</b-form-select-option>
                                        </b-form-select>
                                    </template>
                                </b-input-group>                                    
                            </template>
                        </b-input-group>
                    </template>
                    <template v-slot:append>
                        <b-input-group>
                            <template v-slot:prepend>
                                <b-input-group>
                                    <template v-slot:prepend>
                                        <b-input-group-text >EVERY</b-input-group-text>
                                    </template>
                                    <template v-slot:append>
                                        <b-input-group>
                                            <template v-slot:prepend>
                                                <b-form-spinbutton v-model="value" min="1" max="60"></b-form-spinbutton>
                                            </template>
                                            <template v-slot:append>
                                                <b-form-select v-model="selected">
                                                    <b-form-select-option value="a">MIN</b-form-select-option>
                                                    <b-form-select-option value="b">HOUR</b-form-select-option>
                                                    <b-form-select-option value="b">DAY</b-form-select-option>
                                                </b-form-select>
                                            </template>
                                        </b-input-group>
                                    </template>
                                </b-input-group>
                            </template>
                            <template v-slot:append>
                                <b-button variant="outline-success">ADD</b-button>
                            </template>
                        </b-input-group>
                    </template>
                </b-input-group>

            </b-card-body>
        </b-collapse>
    </b-card>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class Sheduler extends Vue {}
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