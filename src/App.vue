<template>
    <div id="app">
        <Loading v-if="loading" />
        <Header v-if="!loading" />
        <Content v-if="!loading" />
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue } from "vue-property-decorator";
import Header from '@/components/Header/Header.vue';
import Content from "@/components/Content/Content.vue";
import Loading from "@/components/Loading.vue";
import { DEVICE_REQUEST } from './store/device/types';

@Component({
    created: function () {
        this.$store.dispatch(DEVICE_REQUEST, '/api/devices/get').then(() => {
            (this as any).loading  = false;
        });
    },
    components: {
        Header,
        Content,
        Loading
    }
})
export default class App extends Vue {
    loading = true;

}
</script>