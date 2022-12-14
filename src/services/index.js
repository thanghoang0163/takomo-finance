export const BASE_URL = "https://ppmob.takomo.vn/v1/4";

export const request = async ({
  method = "POST",
  headers = {},
  data,
  path = "",
}) => {
  return new Promise((resolve, reject) => {
    my.request({
      url: `${BASE_URL}${path}`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...headers,
      },
      includeHeader: true,
      method,
      data,
      success: (res) => {
        resolve(res);
      },
      fail: (err) => {
        reject(err);
      },
    });
  });
};

export default request;
