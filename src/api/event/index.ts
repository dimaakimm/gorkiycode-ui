import {AxiosPromise} from "axios";
import {IPlaygroundFull} from "../playground/types.ts";
import {axiosInstance} from "../instance.ts";
import {EventsEndpoints, PlaygroundEndpoints} from "../endpoints.ts";

export const putICome = (id:number, time:Date): AxiosPromise =>
    axiosInstance.post(EventsEndpoints.COME_TO_EVENT, {playgroundId: id, startTime: time, isGeneralCollection: false});