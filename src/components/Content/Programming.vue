<template>
    <b-card no-body class="content-card">
        <b-card-header header-tag="header" role="tab" class="content-card-header">
            <b-button block v-b-toggle.accordion-7 variant="feautured" class="content-card-button text-left">Programming</b-button>
        </b-card-header>
        <b-collapse id="accordion-7" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <b-alert show dismissible fade>
                    IF VARIABLE <b>TEMPERATURE > 0</b> THEN <b>EMAIL me@paq.su</b>
                </b-alert>
                <b-alert show dismissible fade>
                    IF VARIABLE <b>HUMIDITY = 0</b> THEN <b>CALL Farm contoller</b> FUNCTION <b>LCD</b>
                </b-alert>
                <b-input-group style="justify-content: center;">
                    <template v-slot:prepend>
                        <b-input-group>
                            <template v-slot:prepend>
                                <b-input-group>
                                    <template v-slot:prepend>
                                        <b-input-group-text >IF VARIABLE</b-input-group-text>
                                    </template>
                                    <template v-slot:append>
                                        <b-form-select v-model="selected">
                                            <b-form-select-option value="a">TEMPERATURE</b-form-select-option>
                                            <b-form-select-option value="b">HUMIDITY</b-form-select-option>
                                        </b-form-select>
                                    </template>
                                </b-input-group>
                            </template>
                            <template v-slot:append>
                                <b-input-group>
                                    <template v-slot:prepend>
                                        <b-form-select v-model="selected">
                                            <b-form-select-option value="a">&gt;</b-form-select-option>
                                            <b-form-select-option value="b">&lt;</b-form-select-option>
                                            <b-form-select-option value="b">=</b-form-select-option>
                                            <b-form-select-option value="b">!=</b-form-select-option>
                                        </b-form-select>
                                    </template>
                                    <template v-slot:append>
                                        <b-form-input style="max-width: 75px;" v-model="value"></b-form-input>
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
                                        <b-input-group>
                                            <template v-slot:prepend>
                                                <b-input-group-text >THEN</b-input-group-text>
                                            </template>
                                            <template v-slot:append>
                                                <b-form-select v-model="selected">
                                                    <b-form-select-option value="a">CALL</b-form-select-option>
                                                    <b-form-select-option value="b">EMAIL</b-form-select-option>
                                                </b-form-select>
                                            </template>
                                        </b-input-group>
                                    </template>
                                    <template v-slot:append>
                                        <b-input-group>
                                            <template v-slot:prepend>
                                                <b-form-select v-model="selected" v-b-tooltip.hover title="Device name">
                                                    <b-form-select-option value="a">Farm controller</b-form-select-option>
                                                    <b-form-select-option value="b">Gates contoller</b-form-select-option>
                                                    <b-form-select-option value="b">Flower controller</b-form-select-option>
                                                </b-form-select>
                                            </template>
                                            <template v-slot:append>
                                                <b-form-select v-model="selected" v-b-tooltip.hover title="Function name">
                                                    <b-form-select-option value="a">LCD</b-form-select-option>
                                                    <b-form-select-option value="b">DO_WASHING</b-form-select-option>
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
    export default class Programming extends Vue {}
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