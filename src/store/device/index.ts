import { Module } from 'vuex';
import { state } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { Devices } from './types';
import { RootState } from '../types';

export const devices: Module<Devices, RootState> = {
    state,
    getters,
    actions,
    mutations
}