App({
  data: {
    phone: "",
    apiKey: "",
  },

  getData() {
    my.getStorage({
      key: "login",
      success: (res) => {
        this.data.phone = res.data.phone;
        this.data.apiKey = res.data.apiKey;
      },
      fail: (err) => {
        console.log(err);
      },
    });
    console.log(this.data.phone, this.data.apiKey);
  },

  onLaunch(options) {
    console.log("App onLaunch");
  },
  onShow(options) {},
});
