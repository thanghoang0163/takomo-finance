Page({
  data: {
    btnText: "Về trang chủ",
  },

  onGoHome() {
    my.navigateTo({ url: "pages/login/index" });
  },

  onShow() {
    my.hideBackHome({ hide: true });
  },
});
