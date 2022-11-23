export const BASE_URL = "https://gaspa.vn/wp-json/wp/v2";

export const request = async ({ method = "GET", headers = {}, data }) => {
  return new Promise((resolve, reject) => {
    my.request({
      url: BASE_URL,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
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
