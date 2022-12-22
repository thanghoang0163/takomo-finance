import request from "../index";

export const application = async (payload) => {
  const res = await request({
    path: "/utils/directories",
    data: payload,
    method: "PUT",
  });
  return res;
};
