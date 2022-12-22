import request from "../index";

export const checkExistence = async (payload) => {
  const res = await request({
    path: "/client/register",
    data: payload,
  });
  return res;
};

export const register = async (payload, apiKey) => {
  const res = await request({
    path: "/registration",
    data: payload,
    method: "PUT",
    headers: {
      Cookie: `${apiKey}`,
    },
  });
  return res;
};
