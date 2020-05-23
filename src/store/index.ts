import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from './types';
import { devices } from './device/index';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    modules: {
        devices
    }
}

export default new Vuex.Store<RootState>(store);