<template>
    <b-card no-body class="content-card">
        <b-card-header header-tag="header" role="tab" class="content-card-header">
            <b-button block v-b-toggle.accordion-6 variant="feautured" class="content-card-button text-left">Events</b-button>
        </b-card-header>
        <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
                
                <b-form-select class="mb-3" v-model="selected" :options="calcOptions(events)"></b-form-select>

                <Chart class="small"
                    v-if="selected"
                    :chartData="calcData(selected, events)"
                    :options="{responsive: true, maintainAspectRatio: false, fill: false}"
                />

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
    
    import Chart from "./Chart.vue";

    @Component({
        components: {
            Chart
        },
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

        selected = null;


        calcData(selected: string, events: Event[]) {
            if(!selected)
                return;
            
            const labels: string[] = [];
            const data: string[] = [];

            events.forEach((evt: Event) => {
                if(evt.name == selected) {
                    labels.push(this.calcDate(evt.time));
                    data.push(evt.data);
                }
            });

            return {
                labels: labels.reverse(),
                datasets: [{
                    label: selected.toUpperCase(),
                    data: data.reverse(),
                    fill: false,
                    backgroundColor: '#e7eaeb',
                    borderColor: '#3690eb'
                }]
            };
        }

        calcOptions(events: Event[]):any {
            const set = new Set<string>();
            const options: any[] = [];

            events.forEach((evt: Event) =>  set.add(evt.name) );
            for (const name of set)
                options.push({
                    value: name,
                    text: name
                });

            return options;
        }

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

    .small {
        height: 250px;
        margin:  0px auto 50px;
        position: 'relative';
    }

</style>