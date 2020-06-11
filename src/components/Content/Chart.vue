<script lang="ts">

import { Component, Vue, Prop } from "vue-property-decorator";
import { Line, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins

import { Event } from "@/store/device/types";

@Component({
    mixins: [reactiveProp, Line]
})
export default class Chart extends Vue {

    @Prop() readonly chartData!: Record<string, any>;
    @Prop() readonly options!: Record<string, any>;

    public renderChart!: (chartData: any, options: any) => void;

    mounted() {
        this.renderChart(this.chartData, this.options);
    }

}

</script>