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
    listWorkForm: [
      {
        id: 1,
        name: "Toàn thời gian",
      },
      {
        id: 2,
        name: "Bán thời gian",
      },
      {
        id: 3,
        name: "Thất nghiệp",
      },
      {
        id: 4,
        name: "Sinh viên",
      },
      {
        id: 5,
        name: "Về hưu",
      },
      {
        id: 6,
        name: "Nội trợ",
      },
    ],
    listWorkField: [
      {
        id: 1,
        name: "Cảnh sát",
      },
      {
        id: 2,
        name: "Quân đội",
      },
      {
        id: 3,
        name: "Tín dụng / Bảo hiểm",
      },
      {
        id: 4,
        name: "Tài chính / Bất động sản",
      },
      {
        id: 5,
        name: "Xây dựng",
      },
      {
        id: 6,
        name: "Công nghệ thông tin",
      },
      {
        id: 7,
        name: "Giáo dục",
      },
      {
        id: 8,
        name: "Chăm sóc sức khỏe",
      },
      {
        id: 9,
        name: "Dịch vụ khách sạn",
      },
      {
        id: 10,
        name: "Chế tạo",
      },
      {
        id: 11,
        name: "bán hàng và marketing",
      },
      {
        id: 12,
        name: "Dịch vụ ăn uống",
      },
      {
        id: 13,
        name: "Dịch vụ vận tải",
      },
      {
        id: 14,
        name: "Bán lẻ",
      },
      {
        id: 15,
        name: "Khác",
      },
    ],
    listLastWorkPlace: [
      {
        id: 1,
        name: "Dưới 1 năm",
      },
      {
        id: 2,
        name: "1 năm",
      },
      {
        id: 3,
        name: "2 năm",
      },
      {
        id: 4,
        name: "3 năm",
      },
      {
        id: 5,
        name: "4 năm",
      },
      {
        id: 6,
        name: "5 năm",
      },
      {
        id: 7,
        name: "6 năm",
      },
      {
        id: 8,
        name: "7 năm",
      },
      {
        id: 9,
        name: "8 năm",
      },
      {
        id: 10,
        name: "9 năm",
      },
      {
        id: 11,
        name: "10 năm",
      },
      {
        id: 12,
        name: "Hơn 10 năm",
      },
    ],
    listIncome: [
      {
        id: 1,
        name: "Không có thu nhập",
      },
      {
        id: 2,
        name: "1,5 - 3 triệu đồng",
      },
      {
        id: 3,
        name: "3 - 5 triệu đồng",
      },
      {
        id: 4,
        name: "5 - 7 triệu đồng",
      },
      {
        id: 5,
        name: "7 -9 triệu đồng",
      },
      {
        id: 6,
        name: "9 - 11 triệu đồng",
      },
      {
        id: 7,
        name: "11 - 15 triệu đồng",
      },
      {
        id: 8,
        name: "15 - 20 triệu đồng",
      },
      {
        id: 9,
        name: "Trên 20 triệu đồng",
      },
    ],
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

    if (selectedWorkForm.length === 0) {
      this.setData({
        isErrorWorkForm: true,
        errorTextWorkForm: "Thông tin không được bỏ trống!",
      });
    }

    if (selectedWorkField.length === 0) {
      this.setData({
        isErrorWorkField: true,
        errorTextWorkField: "Thông tin không được bỏ trống!",
      });
    }

    if (selectedLastWorkPlace.length === 0) {
      this.setData({
        isErrorLastWorkPlace: true,
        errorTextLastWorkPlace: "Thông tin không được bỏ trống!",
      });
    }

    if (selectedIncome.length === 0) {
      this.setData({
        isErrorIncome: true,
        errorTextIncome: "Thông tin không được bỏ trống!",
      });
    }

    if (inputCompanyName.length === 0) {
      this.setData({
        isErrorCompanyName: true,
        errorTextCompanyName: "Thông tin không được bỏ trống!",
      });
    }

    if (inputPosition.length === 0) {
      this.setData({
        isErrorPosition: true,
        errorTextPosition: "Thông tin không được bỏ trống!",
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
