import axios from "axios";

export const getUserChannels = userId => {
  return axios.get(`/api/users/${userId}/channels/`);
};


