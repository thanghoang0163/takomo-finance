Page({
  data: {
    imgs: [],
    dataset: "",
    btnText: "Tiếp tục",
    list: [
      {
        id: 1,
        label: "Chụp khuôn mặt:",
        img: "/assets/images/capture-face-photo.png",
      },
      {
        id: 2,
        label: "Chụp mặt trước CMND / CCCD:",
        img: "/assets/images/capture-front-photo.png",
      },
      {
        id: 3,
        label: "Chụp mặt sau CMND / CCCD:",
        img: "/assets/images/capture-rear-photo.png",
      },
    ],
  },

  onChooseImg(value) {
    this.setData({
      dataset: value.target.dataset.label,
    });
    my.chooseImage({
      count: 1,
      success: (res) => {
        console.log(res);
        this.setData({
          imgs: res.filePaths,
        });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },

  onContinue() {
    my.navigateTo({ url: "pages/loan-contract/index" });
  },

  onLoad() {
    my.hideBackHome({ hide: true });
  },
});
