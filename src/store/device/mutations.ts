import { MutationTree } from 'vuex';
import { Devices,
         DeviceResp,
         DEVICE_ERROR,
         DEVICE_SUCCESS,
         DEVICE_REQUEST,
         DEVICE_SELECT } from './types';

export const mutations: MutationTree<Devices> = {
    [DEVICE_REQUEST]: (state: Devices) => {
        state.status = "loading";
    },
    [DEVICE_SUCCESS]: (state: Devices, resp: DeviceResp) => {
        state.status = "success loaded";
        state.devices = resp.devices;
    },
    [DEVICE_ERROR]: (state: Devices) => {
        state.status = "error";
    },
    [DEVICE_SELECT]: (state: Devices, selected: number) => {
        state.status = "selected changed";
        state.selected = selected;
    }
}