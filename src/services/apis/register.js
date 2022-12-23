import request from "../index";

const app = getApp();

export const checkExistence = async (payload) => {
  const res = await request({
    path: "/client/register",
    data: payload,
  });
  return res;
};

export const register = async (payload) => {
  const res = await request({
    path: "/registration",
    data: payload,
    method: "PUT",
    headers: {
      Cookie: `${app.data.apiKey}`,
    },
  });
  return res;
};
