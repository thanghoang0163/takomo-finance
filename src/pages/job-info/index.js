import { checkWhiteSpace } from "../../utils/common.sjs";

Page({
  data: {
    titleHeader: "Thông tin công việc",
    labelWorkForm: "Hình thức công việc:",
    placeHolderWorkForm: "Hình thức công việc",
    titleWorkForm: "Hình thức công việc",
    errorTextWorkForm: "",
    isErrorWorkForm: false,
    selectedWorkForm: "",
    labelWorkField: "Lĩnh vực công việc:",
    placeHolderWorkField: "Lĩnh vực công việc",
    titleWorkField: "Lĩnh vực công việc",
    errorTextWorkField: "",
    isErrorWorkField: false,
    selectedWorkField: "",
    labelCompanyName: "Tên công ty:",
    placeHolderCompanyName: "Tên công ty",
    typeCompanyName: "text",
    maxLengthCompanyName: 100,
    errorTextCompanyName: "",
    inputCompanyName: "",
    isErrorCompanyName: false,
    labelPosition: "Chức vụ:",
    placeHolderPosition: "Chức vụ",
    typePosition: "text",
    maxLengthPosition: 100,
    errorTextPosition: "",
    inputPosition: "",
    isErrorPosition: false,
    labelLastWorkPlace: "Thời gian làm việc tại nơi làm việc cuối cùng:",
    placeHolderLastWorkPlace: "Thời gian làm việc tại nơi làm việc cuối cùng",
    titleLastWorkPlace: "Thời gian làm việc tại nơi làm việc cuối cùng",
    errorTextLastWorkPlace: "",
    isErrorLastWorkPlace: false,
    selectedLastWorkPlace: "",
    labelIncome: "Thu nhập hàng tháng:",
    placeHolderIncome: "Thu nhập hàng tháng",
    titleIncome: "Thu nhập hàng tháng",
    errorTextIncome: "",
    isErrorIncome: false,
    selectedIncome: "",
    btnText: "Tiếp tục bước 4/7",
  },

  onInputCompanyName(value) {
    this.setData({
      inputCompanyName: value,
    });
    if (this.data.isErrorCompanyName) {
      this.setData({
        isErrorCompanyName: false,
      });
    }
  },

  onInputPosition(value) {
    this.setData({
      inputPosition: value,
    });
    if (this.data.isErrorPosition) {
      this.setData({
        isErrorPosition: false,
      });
    }
  },

  onSelectWorkForm(value) {
    this.setData({
      selectedWorkForm: value,
    });
    if (this.data.isErrorWorkForm) {
      this.setData({
        isErrorWorkForm: false,
      });
    }
  },

  onSelectWorkField(value) {
    this.setData({
      selectedWorkField: value,
    });
    if (this.data.isErrorWorkField) {
      this.setData({
        isErrorWorkField: false,
      });
    }
  },

  onSelectLastWorkPlace(value) {
    this.setData({
      selectedLastWorkPlace: value,
    });
    if (this.data.isErrorLastWorkPlace) {
      this.setData({
        isErrorLastWorkPlace: false,
      });
    }
  },

  onSelectIncome(value) {
    this.setData({
      selectedIncome: value,
    });
    if (this.data.isErrorIncome) {
      this.setData({
        isErrorIncome: false,
      });
    }
  },

  onContinue() {
    const {
      selectedWorkForm,
      selectedWorkField,
      selectedIncome,
      selectedLastWorkPlace,
      inputCompanyName,
      inputPosition,
    } = this.data;

    const companyNameArray = inputCompanyName.split(" ");
    const positionArray = inputPosition.split(" ");
    if (selectedWorkForm.length === 0) {
      this.setData({
        isErrorWorkForm: true,
        errorTextWorkForm: "Vui lòng chọn hình thức công việc!",
      });
    }

    if (selectedWorkField.length === 0) {
      this.setData({
        isErrorWorkField: true,
        errorTextWorkField: "Vui lòng chọn lĩnh vực công việc!",
      });
    }

    if (selectedLastWorkPlace.length === 0) {
      this.setData({
        isErrorLastWorkPlace: true,
        errorTextLastWorkPlace: "Vui lòng chọn kinh nghiệm làm việc!",
      });
    }

    if (selectedIncome.length === 0) {
      this.setData({
        isErrorIncome: true,
        errorTextIncome: "Vui lòng chọn thu nhập hằng tháng!",
      });
    }

    if (inputCompanyName.length === 0) {
      this.setData({
        isErrorCompanyName: true,
        errorTextCompanyName: "Vui lòng nhập tên công ty đang làm việc!",
      });
    } else if (!checkWhiteSpace(companyNameArray)) {
      this.setData({
        isErrorCompanyName: true,
        errorTextCompanyName: "Định dạng tên công ty không đúng!",
      });
    }

    if (inputPosition.length === 0) {
      this.setData({
        isErrorPosition: true,
        errorTextPosition: "Vui lòng nhập chức vụ tại công ty!",
      });
    } else if (!checkWhiteSpace(positionArray)) {
      this.setData({
        isErrorPosition: true,
        errorTextPosition: "Định dạng chức vụ không đúng!",
      });
    }

    if (
      !this.data.isErrorCompanyName &&
      !this.data.isErrorIncome &&
      !this.data.isErrorLastWorkPlace &&
      !this.data.isErrorWorkField &&
      !this.data.isErrorWorkForm &&
      !this.data.isErrorPosition &&
      selectedLastWorkPlace !== "" &&
      selectedWorkField !== "" &&
      selectedWorkForm !== "" &&
      selectedIncome !== "" &&
      inputCompanyName !== "" &&
      inputPosition !== ""
    ) {
      my.setStorage({
        key: "jobInfo",
        data: {
          workForm: selectedWorkForm,
          workField: selectedWorkField,
          lastWorkPlace: selectedLastWorkPlace,
          income: selectedIncome,
          companyName: inputCompanyName,
          position: inputPosition,
        },
      });
      my.navigateTo({ url: "pages/acquaintance-info/index" });
    }
  },

  onLoad() {
    my.hideBackHome({ hide: true });
  },
});
