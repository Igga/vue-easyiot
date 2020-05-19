<template>
    <b-card no-body class="content-card">
        <b-card-header header-tag="header" role="tab" class="content-card-header">
            <b-button block v-b-toggle.accordion-4 variant="feautured" class="content-card-button text-left">Variables</b-button>
        </b-card-header>
        <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
            <b-card-body>
                <b-table-simple striped bordered hover>
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
                        <b-tr>
                            <b-td>1</b-td>
                            <b-td>22</b-td>
                            <b-td>43</b-td>
                            <b-td>43</b-td>
                            <b-td>
                                <b-button-group>
                                    <b-button variant="outline-success" size="sm">
                                        Read
                                    </b-button>
                                    <b-button variant="outline-danger" size="sm">
                                        Delete
                                    </b-button>
                                </b-button-group>
                            </b-td>
                        </b-tr>
                        <b-tr>
                            <b-td>2</b-td>
                            <b-td>22</b-td>
                            <b-td>43</b-td>
                            <b-td>43</b-td>
                            <b-td>
                                <b-button-group>
                                    <b-button variant="outline-success" size="sm">
                                        Read
                                    </b-button>
                                    <b-button variant="outline-danger" size="sm">
                                        Delete
                                    </b-button>
                                </b-button-group>
                            </b-td>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>    
                <b-input-group>
                    <b-form-input
                        placeholder="Enter variable name"
                    ></b-form-input>
                    <b-input-group-append>
                    <b-button variant="outline-success">ADD</b-button>
                    </b-input-group-append>
                </b-input-group>

            </b-card-body>
        </b-collapse>
    </b-card>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class Variables extends Vue {}
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