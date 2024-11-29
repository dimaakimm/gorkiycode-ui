import {AxiosPromise} from "axios";
import {axiosInstance} from "../instance.ts";
import {PlaygroundEndpoints} from "../endpoints.ts";
import {IPlayground, IPlaygroundFull} from "./types.ts";


export const getAllPlaygrounds = (): AxiosPromise<IPlayground[]> =>
    axiosInstance.get(PlaygroundEndpoints.GET_PLAYGROUNDS);

export const getFullPlayground = (id:number): AxiosPromise<IPlaygroundFull> =>
    axiosInstance.get(PlaygroundEndpoints.GET_PLAYGROUND+id.toString());