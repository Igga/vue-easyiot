<template>
    <b-card no-body class="content-card">
        <b-card-header header-tag="header" role="tab" class="content-card-header">
            <b-button block v-b-toggle.accordion-6 variant="feautured" class="content-card-button text-left">Sheduler</b-button>
        </b-card-header>
        <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <b-alert show dismissible fade
                    @dismissed="cronDelete()"
                >
                    GET VARIABLE <b>TEMPERATURE</b> EVERY <b>2 MIN</b>
                </b-alert>
                <b-input-group style="justify-content: center;">
                    <template v-slot:prepend>
                        <b-input-group>
                            <template v-slot:prepend>
                                <!--
                                <b-form-select v-model="selected" v-b-tooltip.hover title="GET variable or CALL function">
                                    <b-form-select-option value="a">GET</b-form-select-option>
                                    <b-form-select-option value="b">CALL</b-form-select-option>
                                </b-form-select>
                                -->
                            </template>
                            <template v-slot:append>
                                <b-input-group>
                                    <template v-slot:prepend>
                                        <b-input-group-text >GET VARIABLE</b-input-group-text>
                                    </template>
                                    <template v-slot:append>
                                        <b-form-select v-model="variableSelected"
                                            :disabled="disabled"
                                        >
                                            <b-form-select-option 
                                                v-for="(variable, index) in variables" 
                                                v-bind:key="index"
                                                :value="variable.name">{{ variable.name | caps }}</b-form-select-option>
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
                                                <b-form-spinbutton 
                                                    v-model="repeatTime"
                                                    :disabled="disabled"
                                                    min="1" max="60"
                                                ></b-form-spinbutton>
                                            </template>
                                            <template v-slot:append>
                                                <b-form-select v-model="repeatInterval"
                                                    :disabled="disabled"
                                                >
                                                    <b-form-select-option value="m">MIN</b-form-select-option>
                                                    <b-form-select-option value="h">HOUR</b-form-select-option>
                                                    <b-form-select-option value="d">DAY</b-form-select-option>
                                                </b-form-select>
                                            </template>
                                        </b-input-group>
                                    </template>
                                </b-input-group>
                            </template>
                            <template v-slot:append>
                                <b-button variant="outline-success"
                                    :disabled="disabled"
                                    @click="createCron(variableSelected, repeatTime, repeatInterval)"
                                >ADD</b-button>
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
    import { Variable } from "@/store/device/types";

    @Component({
        computed: {
            disabled(): boolean {
                return (this.$store.getters.disabled ||
                    !this.$store.getters.selectedDevice.connected);
            },
            variables(): Variable[] {
                return this.$store.getters.selectedDevice.variables;
            }
        }
    })
    export default class Sheduler extends Vue {

        private variableSelected = this.$store.getters.selectedDevice.variables[0].name || "";
        private repeatTime = 1;
        private repeatInterval = "m";

        cronDelete() {
            console.log(123);
        }

        createCron(variableName: string, repeatTime: number, repeatInterval: string) {
            console.log(`${variableName} ${repeatTime} ${repeatInterval}`);
        }

    }
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