<template>
    <b-card no-body class="content-card">
        <b-card-header header-tag="header" role="tab" class="content-card-header">
            <b-button block v-b-toggle.accordion-4 variant="feautured" class="content-card-button text-left">Variables</b-button>
        </b-card-header>
        <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <b-table-simple striped bordered hover v-if="variables.length">
                    <b-thead>
                        <b-tr>
                            <b-th>#</b-th>
                            <b-th>Variable</b-th>
                            <b-th>Last response</b-th>
                            <b-th>Response time</b-th>
                            <b-th>Action</b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody>
                        <b-tr v-for="(variable, index) in variables" v-bind:key="index">
                            <b-td>{{ index + 1 }}</b-td>
                            <b-td>{{ variable.name }}</b-td>
                            <b-td>{{ variable.lastResponse }}</b-td>
                            <b-td>{{ calcDate(variable.responseTime) }}</b-td>
                            <b-td>
                                <b-button-group>
                                    <b-button variant="outline-success" size="sm"
                                        @click="readVar(variable.name)"
                                        :disabled="disabled"
                                    >
                                        Read
                                    </b-button>
                                    <b-button variant="outline-danger" size="sm"
                                        @click="deleteVar(variable.name)"
                                        :disabled="disabled"
                                    >
                                        Delete
                                    </b-button>
                                </b-button-group>
                            </b-td>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>    
                <b-input-group>
                    <b-form-input type="search"
                        v-model="name"
                        placeholder="Enter variable name"
                        :disabled="disabled"
                    ></b-form-input>
                    <b-input-group-append>
                    <b-button variant="outline-success"
                        @click="addVar(name)"
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
    import { Variable, Device, DEVICE_REQUEST } from "@/store/device/types";

    @Component({
        computed: {
            disabled(): boolean {
                return (this.$store.getters.disabled ||
                    !this.$store.getters.selectedDevice.connected);
            },
            variables(): Variables[] {
                return this.$store.getters.selectedDevice.variables;
            }
        }
    })
    export default class Variables extends Vue {

        private name = "";

        calcDate(date: Date): string {
            return new Date(date).toISOString().replace(/T/, ' ').replace(/\..+/, '')
        }

        readVar(name: string){
            const device: Device = this.$store.getters.selectedDevice;
            this.$store.dispatch(DEVICE_REQUEST, `/api/variables/get/${device.id}/${name}`);
        }

        deleteVar(name: string){
            const device: Device = this.$store.getters.selectedDevice;
            this.$store.dispatch(DEVICE_REQUEST, `/api/variables/delete/${device.id}/${name}`);
        }

        addVar(name: string){
            const device: Device = this.$store.getters.selectedDevice;
            this.$store.dispatch(DEVICE_REQUEST, `/api/variables/create/${device.id}/${name}`);
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