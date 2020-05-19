<template>
    <div id="app">
        <Header />
        <Content />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from '@/components/Header/Header.vue';
import Content from "@/components/Content/Content.vue";

@Component({
    components: {
        Header,
        Content
    }
})
export default class App extends Vue {}
</script>