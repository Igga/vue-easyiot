<template>
    <b-card no-body class="content-card">
        <b-card-header header-tag="header" role="tab" class="content-card-header">
            <b-button block v-b-toggle.accordion-6 variant="feautured" class="content-card-button text-left">Events</b-button>
        </b-card-header>
        <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <b-table-simple striped bordered hover v-if="events.length">
                    <b-thead>
                        <b-tr>
                            <b-th>#</b-th>
                            <b-th>Event</b-th>
                            <b-th>Data</b-th>
                            <b-th>Time</b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody>
                        <b-tr v-for="(event, index) in events" v-bind:key="index">
                            <b-td>{{ index + 1 }}</b-td>
                            <b-td>{{ event.name }}</b-td>
                            <b-td>{{ event.data }}</b-td>
                            <b-td>{{ calcDate(event.time) }}</b-td>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>

                <b-button block variant="primary"
                    @click="refreshEvents()"
                    :disabled="disabled"
                >REFRESH</b-button>

            </b-card-body>
        </b-collapse>
    </b-card>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import { Event, Device, DEVICE_REQUEST } from "@/store/device/types";

    @Component({
        computed: {
            disabled(): boolean {
                return (this.$store.getters.disabled ||
                    !this.$store.getters.selectedDevice.connected);
            },
            events(): Event[] {
                return this.$store.getters.selectedDevice.events;
            }
        }
    })
    export default class Events extends Vue {

        calcDate(date: Date): string {
            return new Date(date).toISOString().replace(/T/, ' ').replace(/\..+/, '')
        }

        refreshEvents(){
            this.$store.dispatch(DEVICE_REQUEST, `/api/devices/get`);
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