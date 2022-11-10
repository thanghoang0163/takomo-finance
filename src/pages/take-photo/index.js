Page({
  data: {
    titleHeader: "Chụp ảnh đối chiếu",
    filePathsFace: "",
    filePathsFrontIdCard: "",
    filePathsRearIdCard: "",
    imgFace: [],
    imgFrontIdCard: [],
    imgRearIdCard: [],
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

  getImageInfo(path) {
    my.getImageInfo({
      src: path,
      success: (res) => {
        console.log(res);
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },

  onChooseFace() {
    my.chooseImage({
      count: 1,
      success: (res) => {
        this.setData({
          imgFace: res.filePaths,
        });
        my.compressImage({
          filePaths: res.filePaths,
          compressLevel: 0,
          success: (res) => {
            this.setData({
              filePathsFace: res.filePaths[0],
            });
            this.getImageInfo(res.filePaths[0]);
          },
          fail: (e) => {
            console.log(e);
          },
        });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },

  onChooseFrontIdCard() {
    my.chooseImage({
      count: 1,
      success: (res) => {
        this.setData({
          imgFrontIdCard: res.filePaths,
        });
        my.compressImage({
          filePaths: res.filePaths,
          compressLevel: 0,
          success: (res) => {
            this.setData({
              filePathsFrontIdCard: res.filePaths[0],
            });
            this.getImageInfo(res.filePaths[0]);
          },
          fail: (e) => {
            console.log(e);
          },
        });
      },
      fail: (e) => {
        console.log(e);
      },
    });
  },

  onChooseRearIdCard() {
    my.chooseImage({
      count: 1,
      success: (res) => {
        this.setData({
          imgRearIdCard: res.filePaths,
        });
        my.compressImage({
          filePaths: res.filePaths,
          compressLevel: 0,
          success: (res) => {
            this.setData({
              filePathsRearIdCard: res.filePaths[0],
            });
            this.getImageInfo(res.filePaths[0]);
          },
          fail: (e) => {
            console.log(e);
          },
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
