import { AxiosPromise } from "axios";
import { axiosInstance } from "../instance.ts";
import { EventsEndpoints } from "../endpoints.ts";

export interface IEventData {
  level: string;
  playgroundEventInfoDto: {
    playgroundEventId: number;
    playgroundId: number;
    startTime: string;
    street: string;
    town: string;
    type: string;
  };
  userCount: 1;
  userMaxCount: number;
}

export const getEventData = (): AxiosPromise<IEventData[]> =>
  axiosInstance.get(EventsEndpoints.GET_EVENT);
