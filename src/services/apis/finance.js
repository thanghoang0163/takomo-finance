import request from "../index";

const app = getApp();

export const postFinancialInstrument = async (payload) => {
  const res = await request({
    path: "/instruments",
    data: payload,
    method: "POST",
    headers: {
      Cookie: `${app.data.apiKey}`,
    },
  });
  return res;
};

export const getFinancialInstrumentType = async () => {
  const res = await request({
    path: "/instruments/avail-types/obtain",
    method: "GET",
    headers: {
      Cookie: `${app.data.apiKey}`,
    },
  });
  return res;
};
