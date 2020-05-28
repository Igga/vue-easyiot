import { MutationTree } from 'vuex';
import { Devices,
         DeviceResp,
         DEVICE_ERROR,
         DEVICE_SUCCESS,
         DEVICE_REQUEST,
         DEVICE_SELECT } from './types';

export const mutations: MutationTree<Devices> = {
    [DEVICE_REQUEST]: (state: Devices, url: string) => {
        state.disabled = true;
        state.status = `Getting ${url}`;
    },
    [DEVICE_SUCCESS]: (state: Devices, resp: DeviceResp) => {
        state.status = "success loaded";
        state.devices = resp.devices;
        state.disabled = false;
    },
    [DEVICE_ERROR]: (state: Devices, err: string) => {
        state.status = "error";
        state.message = err;
        state.disabled = false;
    },
    [DEVICE_SELECT]: (state: Devices, selected: number) => {
        state.status = "selected changed";
        state.selected = selected;
    }
}