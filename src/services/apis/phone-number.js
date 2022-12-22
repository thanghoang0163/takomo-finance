import request from "../index";

export const prefixPhoneNumber = async () => {
  const res = await request({
    path: "/utils/settings",
    method: "GET",
  });
  return res;
};
