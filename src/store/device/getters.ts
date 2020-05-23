import { GetterTree } from 'vuex';
import { Devices } from './types';
import { RootState } from '../types';

export const getters: GetterTree<Devices, RootState> = {
    devices: (state: Devices) => state.devices,
    selectedDevice: (state: Devices) => state.devices[state.selected]
}