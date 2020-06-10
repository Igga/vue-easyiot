export const DEVICE_REQUEST  = "DEVICE_REQUEST";
export const DEVICE_SUCCESS  = "DEVICE_SUCCESS";
export const DEVICE_ERROR    = "DEVICE_ERROR";
export const DEVICE_SELECT   = "DEVICE_SELECT";

export type Function = string;

export interface Pin {
    id: number,
    mode: string,
    state: number,
    desc: string,
    type: string
}

export interface Variable {
    name: string,
    lastResponse: number,
    responseTime: Date
}

export interface Event {
    name: string,
    data: string,
    time: Date
}

export interface Device {
    id: string,
    name: string,
    connected: boolean,
    message: string,
    lastOnline: Date,
    pins: Pin[],
    variables: Variable[],
    functions: Function[],
    events: Event[]
}

export interface DeviceResp {
    devices: Device[],
    success: boolean,
    message?: string
}

export interface Devices {
    devices: Device[],
    selected: number,
    disabled: boolean,
    status: string
}