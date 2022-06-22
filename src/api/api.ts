import axios from "axios";
export const getUserInfoApi = (
  userId: string
): Promise<{ id: string; name: string; level: number }> => {
  return axios.get("/user", { params: userId });
};
