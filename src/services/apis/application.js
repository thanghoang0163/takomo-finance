import request from "../index";

const app = getApp();

export const getApplicationId = async (payload) => {
  const res = await request({
    path: "/auth/login",
    data: payload,
    method: "POST",
  });
  return res;
};

export const applicationInfo = async () => {
  const res = await request({
    path: `/apps/${app.data.applicationId}`,
    method: "PUT",
    headers: {
      Cookie: `${app.data.apiKey}`,
    },
  });
  return res;
};

export const currentCusInfo = async () => {
  const res = await request({
    path: `/apps/current`,
    method: "GET",
    headers: {
      Cookie: `${app.data.apiKey}`,
    },
  });
  return res;
};
