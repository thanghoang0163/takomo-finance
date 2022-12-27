import request from "../index";

const app = getApp();

export const getApplicationId = async (payload) => {
  const res = await request({
    path: "/auth/login",
    data: payload,
    headers: {
      Cookie: `${app.data.apiKey}`,
    },
  });
  return res;
};

export const applicationInfo = async (payload) => {
  const res = await request({
    path: `/apps/${app.data.applicationId}`,
    method: "PUT",
    data: payload,
    headers: {
      Cookie: `${app.data.apiKey}`,
    },
  });
  return res;
};

export const currentApplicationInfo = async () => {
  const res = await request({
    path: `/apps/current`,
    method: "GET",
    headers: {
      Cookie: `${app.data.apiKey}`,
    },
  });
  return res;
};
