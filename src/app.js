App({
  onLoad() {
    my.setCanPullDown({
      canPullDown: false,
    });
  },

  onLaunch(options) {
    console.log("App onLaunch");
  },
  onShow(options) {},
});
