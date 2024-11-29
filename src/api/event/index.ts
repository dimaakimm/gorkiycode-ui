import { AxiosPromise } from "axios";
import { axiosInstance } from "../instance.ts";
import { EventsEndpoints } from "../endpoints.ts";

export const putICome = (id:number, time:Date): AxiosPromise =>
    axiosInstance.post(EventsEndpoints.COME_TO_EVENT, {playgroundId: id, startTime: time, isGeneralCollection: false});

export const putCall = (id:number, time:Date): AxiosPromise =>
    axiosInstance.post(EventsEndpoints.COME_TO_EVENT, {playgroundId: id, startTime: time, isGeneralCollection: true});
