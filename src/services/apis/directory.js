import request from "../index";

export const directory = async (payload) => {
  const res = await request({
    path: "/utils/directories",
    data: payload,
    method: "GET",
  });
  return res;
};
