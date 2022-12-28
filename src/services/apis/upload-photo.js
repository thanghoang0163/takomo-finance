import request from "../index";

const app = getApp();

export const postPhoto = async (payload) => {
  const res = await request({
    path: `/apps/${app.data.applicationId}/documents`,
    data: payload,
    headers: {
      Cookie: `${app.data.apiKey}`,
    },
  });
  return res;
};

export const receiptPhoto = async () => {
  const res = await request({
    path: `/apps/${app.data.applicationId}/documents`,
    method: "GET",
    headers: {
      Cookie: `${app.data.apiKey}`,
    },
  });
  return res;
};
