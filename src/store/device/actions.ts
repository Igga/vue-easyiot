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
    [DEVICE_REQUEST]: ({ commit }): Promise<DeviceResp> => {
        return new Promise<DeviceResp>(resolve => {
            commit(DEVICE_REQUEST);
            const payload: DeviceResp = {
                devices: [
                    {
                        id: "asdasd",
                        name: "TEst1",
                        connected: true,
                        message: "test",
                        lastOnline: new Date(),
                        pins: [
                            {
                                id: 5,
                                mode: "o",
                                desc: "RED",
                                state: 0,
                                type: "digital"
                            },
                            {
                                id: 10,
                                mode: "i",
                                desc: "RED",
                                state: 0,
                                type: "digital"
                            },
                            {
                                id: 11,
                                mode: "i",
                                desc: "RED",
                                state: 1,
                                type: "digital"
                            },
                            {
                                id: 1,
                                mode: "o",
                                desc: "GREEN",
                                state: 200,
                                type: "analog"
                            },
                            {
                                id: 2,
                                mode: "i",
                                desc: "BLUE",
                                state: 30,
                                type: "analog"
                            }
                        ],
                        variables: [
                            {
                                name: "humidity",
                                lastResponse: 12,
                                responseTime: new Date()
                            },
                            {
                                name: "temperature",
                                lastResponse: 23,
                                responseTime: new Date()
                            }
                        ],
                        functions: ["servo", "lcd"]
                    },
                    {
                        id: "ASdsad",
                        name: "TEST2",
                        connected: false,
                        message: "test2",
                        lastOnline: new Date(),
                        pins: [
                            {
                                id: 12,
                                mode: "o",
                                desc: "YELLOW",
                                state: 0,
                                type: "digital"
                            },
                            {
                                id: 3,
                                mode: "i",
                                desc: "GREEN",
                                state: 1,
                                type: "digital"
                            }
                        ],
                        variables: [
                            {
                                name: "humidity2",
                                lastResponse: 122,
                                responseTime: new Date()
                            },
                            {
                                name: "temperature2",
                                lastResponse: 232,
                                responseTime: new Date()
                            }
                        ],
                        functions: ["servo2", "lcd2"]
                    }
                ],
                success: true
            }
            commit(DEVICE_SUCCESS, payload);
            resolve(payload);
        });
    }
}