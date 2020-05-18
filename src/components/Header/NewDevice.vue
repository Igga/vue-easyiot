<template>
    <div>
        <b-dropdown-item v-b-modal.modal-new>Add new device</b-dropdown-item>
        <b-modal 
            id="modal-new"
            title="Add new device"
            @show="resetModal"
            @hidden="resetModal"
            @ok="handleOk"
            >
            <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group
                :state="nameState"
                label="Name"
                label-for="name-input"
                invalid-feedback="Name is required"
                >
                <b-form-input
                    id="name-input"
                    v-model="name"
                    :state="nameState"
                    placeholder="e.g. Farm controller"
                    required
                ></b-form-input>
                </b-form-group>
            </form>
        </b-modal>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class NewDevice extends Vue {
        name = "";
        nameState: any = null;

        checkFormValidity() {
            const valid = (this.$refs.form as any).checkValidity();
            this.nameState = valid;
            return valid;
        }

        resetModal(){
            this.name = "";
            this.nameState = null;
        }

        handleOk(bvModalEvt: any){
            bvModalEvt.preventDefault();
            this.handleSubmit();
        }

        handleSubmit(){
            if (!this.checkFormValidity())
                return;

            /*
                TO DO: SAVE this.name;
            */
            this.$nextTick(() => {
                this.$bvModal.hide('modal-new')
            });
        }
    }
</script>