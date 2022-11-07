Page({
  data: {
    btnText: "Về trang chủ",
  },

  onGoHome() {
    my.navigateTo({ url: "pages/login/index" });
  },

  onLoad() {
    my.hideBackHome({ hide: true });
  },
});
