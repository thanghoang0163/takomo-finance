import { photoApis, applicationApis } from "../../services/apis/index";

Page({
  data: {
    filePathsFace: "",
    filePathsFrontIdCard: "",
    filePathsRearIdCard: "",
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
        label: "Chụp khuôn mặt",
        img: "/assets/images/capture-face-photo.png",
      },
      {
        id: 2,
        label: "Chụp mặt trước CMND / CCCD",
        img: "/assets/images/capture-front-photo.png",
      },
      {
        id: 3,
        label: "Chụp mặt sau CMND / CCCD",
        img: "/assets/images/capture-rear-photo.png",
      },
    ],
  },

  onChooseFace() {
    my.chooseImage({
      count: 1,
      success: (res) => {
        this.setData({
          filePathsFace: res.filePaths[0],
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
          filePathsFrontIdCard: res.filePaths[0],
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
          filePathsRearIdCard: res.filePaths[0],
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

  async onContinue() {
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
      my.uploadFile({
        url: "https://httpbin.org/post",
        fileType: `image/${this.getTypeFile(this.data.filePathsFace)}`,
        fileName: "file",
        filePath: this.data.filePathsFace,
        success: async (resUpload) => {
          // my.alert({ title: JSON.parse(resUpload).files.file });
          const resPhoto = await photoApis.receiptPhoto();
          if (resPhoto.data.success) {
            this.onSubmit([
              {
                doc_type_id: 2,
                stored_file: this.getNameFile(this.data.filePathsFace),
              },
            ]);
          }
        },
        fail: (res) => {
          console.log(res);
        },
      });
      // const res = await photoApis.receiptPhoto();
      // if (res.data.success) {
      //   this.onSubmit([
      //     {
      //       doc_type_id: 2,
      //       stored_file: this.data.filePathsFace,
      //     },
      //     {
      //       doc_type_id: 3,
      //       stored_file: this.data.filePathsFrontIdCard,
      //     },
      //     {
      //       doc_type_id: 10,
      //       stored_file: this.data.filePathsRearIdCard,
      //     },
      //   ]);
      // }
    }
  },

  async onSubmit(photoData) {
    const data = photoData;
    const boundary = "------WebKitFormBoundaryITHQGXzJbQ33YTQo";
    let body = "";

    // data.map((item, index) => {
    //   body += `${boundary}\r\n`;
    //   body += `Content-Disposition: form-data; name="${
    //     item.stored_file
    //   }"; filename="${this.getNameFile(
    //     item.stored_file
    //   )}"\nContent-Type: image/${this.getTypeFile(
    //     item.stored_file
    //   )}\r\n\r\nContent-Disposition: form-data; name="${
    //     item.doc_type_id
    //   }"\r\n\r\n${item.doc_type_id}\r\n`;
    //   return body;
    // });
    // body += `${boundary}--\r\n`;

    const res = await photoApis.postPhoto(data);
    console.log("data ", data);
    my.alert("response: ", res);
    // if (res.data.success) {
    //   const resApp = await applicationApis.applicationInfo({
    //     data: {
    //       step: 6,
    //     },
    //   });
    //   if (resApp.data.success) {
    //     my.navigateTo({ url: "pages/loan-contract/index" });
    //   }
    // }
  },

  getTypeFile(filePath) {
    return filePath.substring(filePath.lastIndexOf(".") + 1);
  },

  getNameFile(filePath) {
    return filePath.substring(filePath.lastIndexOf("\\") + 1);
  },
});
