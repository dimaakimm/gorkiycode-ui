import { AxiosPromise } from "axios";
import { axiosInstance } from "../instance.ts";
import { EventsEndpoints } from "../endpoints.ts";

export interface IEventData {
  userCount: number;
  level: string;
  playgroundEventInfoDto: {
    playgroundId: number;
    playgroundEventId: number;
    type: string;
    startTime: string;
  };
}

export const getEventData = (): AxiosPromise<IEventData[]> =>
  axiosInstance.get(EventsEndpoints.GET_EVENT);
