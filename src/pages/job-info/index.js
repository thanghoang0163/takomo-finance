import { checkWhiteSpace, hasSpecialCharater } from "../../utils/common.sjs";

Page({
  data: {
    titleHeader: "Thông tin công việc",
    labelJobType: "Hình thức công việc:",
    placeHolderJobType: "Hình thức công việc",
    titleJobType: "Hình thức công việc",
    errorTextJobType: "",
    isErrorJobType: false,
    selectedJobType: "",
    labelJobField: "Lĩnh vực công việc:",
    placeHolderJobField: "Lĩnh vực công việc",
    titleJobField: "Lĩnh vực công việc",
    errorTextJobField: "",
    isErrorJobField: false,
    selectedJobField: "",
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
    labelLastWorkPlace: "Kinh nghiệm tại nơi làm việc cuối cùng:",
    placeHolderLastWorkPlace: "Kinh nghiệm tại nơi làm việc cuối cùng",
    titleLastWorkPlace: "Kinh nghiệm tại nơi làm việc cuối cùng",
    errorTextLastWorkPlace: "",
    isErrorLastWorkPlace: false,
    selectedLastWorkPlace: "",
    labelIncome: "Thu nhập hàng tháng:",
    placeHolderIncome: "Thu nhập hàng tháng",
    titleIncome: "Thu nhập hàng tháng",
    errorTextIncome: "",
    isErrorIncome: false,
    selectedIncome: "",
    isDisabled: false,
    isNext: false,
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

  onSelectJobType(value) {
    this.setData({
      selectedJobType: value,
    });
    if (this.data.isErrorJobType) {
      this.setData({
        isErrorJobType: false,
      });
    }
    if (value.name === "Thất nghiệp") {
      this.setData({
        isDisabled: true,
        inputCompanyName: "",
        inputPosition: "",
        selectedIncome: "",
        selectedLastWorkPlace: "",
        selectedJobField: "",
        isErrorLastWorkPlace: false,
        isErrorJobField: false,
        isErrorCompanyName: false,
        isErrorPosition: false,
        isErrorIncome: false,
        isNext: true,
      });
    } else {
      this.setData({
        isDisabled: false,
      });
    }
  },

  onSelectJobField(value) {
    this.setData({
      selectedJobField: value,
    });
    if (this.data.isErrorJobField) {
      this.setData({
        isErrorJobField: false,
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
      selectedJobType,
      selectedJobField,
      selectedIncome,
      selectedLastWorkPlace,
      inputCompanyName,
      inputPosition,
      isNext,
    } = this.data;

    const companyNameArray = inputCompanyName.split(" ");
    const positionArray = inputPosition.split(" ");
    if (selectedJobType.length === 0) {
      this.setData({
        isErrorJobType: true,
        errorTextJobType: "Vui lòng chọn hình thức công việc!",
        isNext: false,
      });
    }

    if (selectedJobField.length === 0) {
      this.setData({
        isErrorJobField: true,
        errorTextJobField: "Vui lòng chọn lĩnh vực công việc!",
        isNext: false,
      });
    }

    if (selectedLastWorkPlace.length === 0) {
      this.setData({
        isErrorLastWorkPlace: true,
        errorTextLastWorkPlace: "Vui lòng chọn kinh nghiệm làm việc!",
        isNext: false,
      });
    }

    if (selectedIncome.length === 0) {
      this.setData({
        isErrorIncome: true,
        errorTextIncome: "Vui lòng chọn thu nhập hằng tháng!",
        isNext: false,
      });
    }

    if (inputCompanyName.length === 0) {
      this.setData({
        isErrorCompanyName: true,
        errorTextCompanyName: "Vui lòng nhập tên công ty đang làm việc!",
        isNext: false,
      });
    } else if (
      !checkWhiteSpace(companyNameArray) ||
      hasSpecialCharater(inputCompanyName)
    ) {
      this.setData({
        isErrorCompanyName: true,
        errorTextCompanyName: "Định dạng tên công ty không đúng!",
        isNext: false,
      });
    }

    if (inputPosition.length === 0) {
      this.setData({
        isErrorPosition: true,
        errorTextPosition: "Vui lòng nhập chức vụ tại công ty!",
        isNext: false,
      });
    } else if (
      !checkWhiteSpace(positionArray) ||
      hasSpecialCharater(inputPosition)
    ) {
      this.setData({
        isErrorPosition: true,
        errorTextPosition: "Định dạng chức vụ không đúng!",
        isNext: false,
      });
    }

    if (!isNext) {
      if (
        !this.data.isErrorCompanyName &&
        !this.data.isErrorIncome &&
        !this.data.isErrorLastWorkPlace &&
        !this.data.isErrorJobField &&
        !this.data.isErrorJobType &&
        !this.data.isErrorPosition &&
        selectedLastWorkPlace !== "" &&
        selectedJobField !== "" &&
        selectedJobType !== "" &&
        selectedIncome !== "" &&
        inputCompanyName !== "" &&
        inputPosition !== ""
      ) {
        my.setStorage({
          key: "jobInfo",
          data: {
            JobType: selectedJobType,
            JobField: selectedJobField,
            lastWorkPlace: selectedLastWorkPlace,
            income: selectedIncome,
            companyName: inputCompanyName,
            position: inputPosition,
          },
        });
        my.navigateTo({ url: "pages/acquaintance-info/index" });
      }
    } else {
      this.setData({
        isErrorLastWorkPlace: false,
        isErrorJobField: false,
        isErrorCompanyName: false,
        isErrorPosition: false,
        isErrorIncome: false,
        isNext: true,
      });
      my.navigateTo({ url: "pages/acquaintance-info/index" });
    }
  },

  onLoad() {
    my.hideBackHome({ hide: true });
  },
});
