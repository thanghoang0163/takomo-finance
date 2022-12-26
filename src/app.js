App({
  data: {
    phone: "",
    password: "",
    email: "",
    apiKey: "",
    applicationId: 0,
  },

  getLogin() {
    my.getStorage({
      key: "login",
      success: (res) => {
        this.data = {
          ...this.data,
          phone: res.data.phone,
          apiKey: res.data.apiKey,
        };
      },
      fail: (err) => {
        console.log(err);
      },
    });
  },

  getRegister() {
    my.getStorage({
      key: "register",
      success: (res) => {
        this.data = {
          ...this.data,
          password: res.data.password,
          email: res.data.email,
        };
      },
      fail: (err) => {
        console.log(err);
      },
    });
  },

  getApplication() {
    my.getStorage({
      key: "application",
      success: (res) => {
        this.data = {
          ...this.data,
          applicationId: res.data.applicationId,
        };
      },
      fail: (err) => {
        console.log(err);
      },
    });
  },

  onLaunch(options) {
    console.log("App onLaunch");
  },
  onShow(options) {},
});
