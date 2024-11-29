import { AxiosPromise } from "axios";
import { axiosInstance } from "../instance";
import { UserEndpoints } from "../endpoints.ts";

export interface IUserData {
  id: number;
  name: string;
  nickname: string;
  priorityArea: string;
  sportWithLevelList: {
    sportName: string;
    level: number;
  }[];
  achievements: string[];
  playgroundEventDtoList: {
    id: number;
    type: string;
    town: string;
    street: string;
    startTime: string;
  }[];
}
export const getUserData = (): AxiosPromise<IUserData> =>
  axiosInstance.get(UserEndpoints.GET_USER_PROFILE);
