<template>
    <b-card no-body class="content-card">
        <b-card-header header-tag="header" role="tab" class="content-card-header">
            <b-button block v-b-toggle.accordion-5 variant="feautured" class="content-card-button text-left">Functions</b-button>
        </b-card-header>
        <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>

                <b-input-group v-for="(name, index) in device.functions" v-bind:key="index" :prepend="name" class="mt-3">
                    <b-form-input placeholder="Param" type="search"
                        v-model="param"
                        :disabled="disabled"
                    ></b-form-input>
                    <b-input-group-append>
                    <b-button variant="outline-success"
                        @click="readFunc(name, param)"
                        :disabled="disabled"
                    >Send</b-button>
                    <b-button variant="outline-danger"
                        @click="deleteFunc(name)"
                        :disabled="disabled"
                    >Delete</b-button>
                    </b-input-group-append>
                </b-input-group>

                <b-input-group class="mt-3">
                    <b-form-input
                        placeholder="Enter function name"
                        type="search"
                        v-model="name"
                        :disabled="disabled"
                        @keydown.space.prevent
                    ></b-form-input>
                    <b-input-group-append>
                    <b-button variant="outline-success"
                        @click="addFunc(name)"
                        :disabled="disabled"
                    >ADD</b-button>
                    </b-input-group-append>
                </b-input-group>

            </b-card-body>
        </b-collapse>
    </b-card>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import { Function, Device, DEVICE_REQUEST } from "@/store/device/types";

    @Component({
        computed: {
            disabled(): boolean {
                return (this.$store.getters.disabled ||
                    !this.$store.getters.selectedDevice.connected);
            },
            device(): Device {
                return this.$store.getters.selectedDevice;
            }
        }
    })
    export default class Functions extends Vue {

        private name = "";
        private param = "";

        readFunc(name: Function, param: string){
            if(!param.length)
                param = "none";
            const device: Device = this.$store.getters.selectedDevice;
            this.$store.dispatch(DEVICE_REQUEST, `/api/functions/call/${device.id}/${name}/${param}`)
            .then(() => {
                this.$bvToast.toast(this.$store.getters.selectedDevice.message, {
                    title: "Notification",
                    autoHideDelay: 5000,
                    appendToast: true
                });
            });
        }

        deleteFunc(name: Function){
            const device: Device = this.$store.getters.selectedDevice;
            this.$store.dispatch(DEVICE_REQUEST, `/api/functions/delete/${device.id}/${name}`);
        }

        addFunc(name: string){
            if(!name)
                return;
            const device: Device = this.$store.getters.selectedDevice;
            this.$store.dispatch(DEVICE_REQUEST, `/api/functions/create/${device.id}/${name}`);
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