import { AxiosPromise } from "axios";
import { axiosInstance } from "../instance";
import { UserEndpoints, UserProfileEndpoints } from "../endpoints.ts";
import { IPlaygroundFull } from "../playground/types.ts";

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

export interface UpdateSportProps {
  sportName: string;
  level: number;
}
export interface SportProps {
  newSportName: string;
}
export interface DeleteSportProps {
  sportName: string;
}
export const getUserData = (): AxiosPromise<IUserData> =>
  axiosInstance.get(UserEndpoints.GET_USER_PROFILE);
export const addSportData = (props: SportProps): AxiosPromise =>
  axiosInstance.put(
    UserProfileEndpoints.ADD_SPORT + "?newSportName=" + props.newSportName,
  );
export const deleteSportData = (props: DeleteSportProps): AxiosPromise =>
  axiosInstance.put(
    UserProfileEndpoints.DELETE_SPORT_LEVEL + "?sportName=" + props.sportName,
  );
export const updateSportData = (props: UpdateSportProps): AxiosPromise =>
  axiosInstance.put(UserProfileEndpoints.UPDATE_SPORT_LEVEL, props);
