import { ActionTree } from 'vuex';
import axios from 'axios';

import { RootState } from '../types';
import { Devices,
         DeviceResp,
         DEVICE_REQUEST,
         DEVICE_SUCCESS,
         DEVICE_ERROR,
         DEVICE_SELECT } from './types';
         
export const actions: ActionTree<Devices, RootState> = {
    [DEVICE_SELECT]: ({ commit }, selected: number): Promise<number> => {
        return new Promise<number>(resolve => {
            commit(DEVICE_SELECT, selected);
            resolve(1);
        })
    },
    [DEVICE_REQUEST]: ({ commit }, url: string): Promise<number> => {
        return new Promise<number>((resolve, reject) => {
            commit(DEVICE_REQUEST, url);
                        
            axios({
                url: process.env.VUE_APP_DOMAIN + url,
                method: 'GET'
            }).then(resp => {
                const payload: DeviceResp = resp.data;
                
                if(process.env.NODE_ENV === 'development')
                    console.log(payload);
                
                if(payload.success)
                    commit(DEVICE_SUCCESS, payload);
                else
                    commit(DEVICE_ERROR, payload.message);

                resolve(1);
            }).catch(err => {
                commit(DEVICE_ERROR, err);
                reject(0);
            });
        });
    }
}