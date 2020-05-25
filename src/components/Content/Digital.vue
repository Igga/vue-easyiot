<template>
    <b-card no-body class="content-card">
        <b-card-header header-tag="header" role="tab" class="content-card-header">
            <b-button block v-b-toggle.accordion-2 variant="feautured" class="content-card-button text-left">Digital</b-button>
        </b-card-header>
        <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
            <b-card-body >
                <b-card-group deck>
                    
                    <b-card no-body style="max-width: 20rem;" v-for="pin in digital" v-bind:key="pin.id">
                        <b-card-body>
                            <b-card-title>PIN {{pin.id}}</b-card-title>
                            <b-card-sub-title class="mb-2">MODE {{ getMode(pin.mode) }}</b-card-sub-title>
                            <b-card-text class="card-text">
                                {{ pin.desc }}
                            </b-card-text>
                        </b-card-body>
                        <b-card-footer>
                            <b-button-group v-if="isInput(pin.mode)">
                                <b-button :variant="checkState(pin.state)" 
                                    @click="changeState(pin.id, pin.state)"
                                    :disabled="connected">LOW</b-button>
                                <b-button :variant="checkState(!pin.state)"
                                    @click="changeState(pin.id, pin.state)"
                                    :disabled="connected">HIGH</b-button>
                                <b-button variant="outline-dark"
                                    @click="changeMode(pin.id, pin.mode)"
                                    :disabled="connected">OUTPUT</b-button>
                            </b-button-group>
                            <b-button-group v-if="!isInput(pin.mode)">
                                <b-button variant="outline-dark" @click="readPin(pin.id)" :disabled="connected">READ</b-button>
                                <b-button variant="outline-dark" @click="changeMode(pin.id, pin.mode)" :disabled="connected">INTPUT</b-button>
                            </b-button-group>
                        </b-card-footer>
                    </b-card>

                </b-card-group>

                <b-input-group class="mt-3">
                    <b-form-input class="pin-id" type="number"
                        placeholder="Enter PIN"
                        v-model="pinId"
                        :disabled="connected"
                    ></b-form-input>
                    <b-form-input
                        placeholder="Enter description" type="search"
                        v-model="desc"
                        :disabled="connected"
                    ></b-form-input>
                    <b-input-group-append>
                    <b-button variant="outline-success"
                        @click="addPin(pinId, desc, 0)"
                        :disabled="connected">ADD INPUT</b-button>
                    <b-button variant="outline-success"
                        @click="addPin(pinId, desc, 1)"
                        :disabled="connected">ADD OUTPUT</b-button>
                    </b-input-group-append>
                </b-input-group>

            </b-card-body>
        </b-collapse>
    </b-card>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import { Pin, Device } from "@/store/device/types";

    @Component({
        computed: {
            connected(): boolean {
                return !this.$store.getters.selectedDevice.connected;
            },
            digital(): Pin[] {
                return this.$store.getters.selectedDevice.pins.filter(
                    (pin: Pin) => pin.type == "digital"
                )
            }
        }
    })
    export default class Digital extends Vue {

        getMode(mode: string){
            return mode == "o" ? "OUTPUT" : "INPUT";
        }

        isInput(mode: string) {
            return mode == "i";
        }

        checkState(state: number){
            return state ? "outline-danger" : "outline-success";
        }

        updateState(pinId: number, value: number) {
            console.log(pinId + " : " + value);
        }

        changeMode(pinId: number, mode: string){
            const device: Device = this.$store.getters.selectedDevice;
            const newmode: string = mode == "o" ? "i" : "o";
            
            console.log(device.id + " : " + newmode);
        }

        changeState(pinId: number, state: number){
            console.log(pinId + " : " + state);
            const device: Device = this.$store.getters.selectedDevice;
            const newstate: number = state == 1 ? 0 : 1;
        }

        readPin(pinId: number){
            const device: Device = this.$store.getters.selectedDevice;
        }

        addPin(pinId: number, desc: string, m: number){
            const mode: string = m ? "i" : "o";
            console.log(pinId + " : " + desc + " : " + mode);
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

    .card-text {
        min-height: 80px !important;
    }

    .pin-id {
        max-width: 150px;
    }

</style>