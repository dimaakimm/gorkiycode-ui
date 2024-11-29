import { AxiosPromise } from "axios";
import { axiosInstance } from "../instance";
import { UserEndpoints } from "../endpoints.ts";

interface IUserData {
  owner: {
    name: string;
    img: null;
  };
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  participantsNumber: number;
  maxParticipantsNumber: number;
  sportType: string;
  level: string;
}
export const getUserData = (props: { id: number }): AxiosPromise<IUserData[]> =>
  axiosInstance.get(UserEndpoints.GET_USER_PROFILE + props.id.toString());
