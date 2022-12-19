Page({
  data: {
    filePathsFace: "",
    filePathsFrontIdCard: "",
    filePathsRearIdCard: "",
    imgFace: [],
    imgFrontIdCard: [],
    imgRearIdCard: [],
    dataset: "",
    isErrorFace: false,
    errorTextFace: "",
    isErrorFrontIdCard: false,
    errorTextFrontIdCard: "",
    isErrorRearIdCard: false,
    errorTextRearIdCard: "",
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
    if (this.data.isErrorFace) {
      this.setData({
        isErrorFace: false,
      });
    }
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
    if (this.data.isErrorFrontIdCard) {
      this.setData({
        isErrorFrontIdCard: false,
      });
    }
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
    if (this.data.isErrorRearIdCard) {
      this.setData({
        isErrorRearIdCard: false,
      });
    }
  },

  onContinue() {
    const { filePathsFace, filePathsFrontIdCard, filePathsRearIdCard } =
      this.data;

    if (filePathsFace === "") {
      this.setData({
        isErrorFace: true,
        errorTextFace: "Vui lòng chụp khuôn mặt!",
      });
    }

    if (filePathsFrontIdCard === "") {
      this.setData({
        isErrorFrontIdCard: true,
        errorTextFrontIdCard: "Vui lòng chụp mặt trước CMND / CCCD!",
      });
    }

    if (filePathsRearIdCard === "") {
      this.setData({
        isErrorRearIdCard: true,
        errorTextRearIdCard: "Vui lòng chụp mặt sau CMND / CCCD!",
      });
    }

    if (
      filePathsFace !== "" &&
      filePathsFrontIdCard !== "" &&
      filePathsRearIdCard !== "" &&
      !this.data.isErrorFace &&
      !this.data.isErrorFrontIdCard &&
      !this.data.isErrorRearIdCard
    ) {
      my.navigateTo({ url: "pages/loan-contract/index" });
    }
  },
});
