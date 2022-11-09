import { checkWhiteSpace } from "../../utils/common.sjs";

Page({
  data: {
    titleHeader: "Thông tin khách hàng",
    labelName: "Họ và tên:",
    placeHolderName: "Nhập họ và tên",
    typeName: "text",
    maxLengthName: 100,
    errorTextName: "",
    inputName: "",
    isErrorName: false,
    labelIdCard: "CMND/CCCD:",
    placeHolderIdCard: "Nhập CMND/CCCD",
    typeIdCard: "number",
    maxLengthIdCard: 12,
    errorTextIdCard: "",
    inputIdCard: "",
    isErrorIdCard: false,
    labelBirthDay: "Ngày sinh:",
    placeHolderBirthDay: "Chọn ngày sinh",
    errorTextBirthDay: "",
    selectedDate: "",
    isErrorBirthDay: false,
    labelMaritalStatus: "Tình trạng hôn nhân:",
    placeHolderMaritalStatus: "Chọn tình trạng hôn nhân",
    titleMaritalStatus: "Tình trạng hôn nhân",
    errorTextMaritalStatus: "",
    selectedMaritalStatus: "",
    isErrorMaritalStatus: false,
    gender: "male",
    btnText: "Tiếp tục bước 2/7",
    items: [
      { name: "male", value: "Nam", checked: true },
      { name: "female", value: "Nữ" },
    ],
    listMaritalStatus: [
      {
        id: 1,
        name: "Kết hôn",
      },
      {
        id: 2,
        name: "Đã ly hôn",
      },
      {
        id: 3,
        name: "Độc thân",
      },
      {
        id: 4,
        name: "Góa vợ hoặc chồng",
      },
    ],
  },

  onInputName(value) {
    this.setData({
      inputName: value,
    });
    if (this.data.isErrorName) {
      this.setData({
        isErrorName: false,
      });
    }
  },

  onInputIdCard(value) {
    this.setData({
      inputIdCard: value,
    });
    if (this.data.isErrorIdCard) {
      this.setData({
        isErrorIdCard: false,
      });
    }
  },

  onSelectMaritalStatus(value) {
    this.setData({
      selectedMaritalStatus: value.name,
    });
    if (this.data.isErrorMaritalStatus) {
      this.setData({
        isErrorMaritalStatus: false,
      });
    }
  },

  onChange(e) {
    this.setData({
      gender: e.detail.value,
    });
  },

  onSelectDate() {
    my.hideKeyboard();
    my.datePicker({
      title: "Ngày sinh",
      confirmBackgroundColor: "#F82486",
      success: (res) => {
        this.setData({
          selectedDate: res.date,
        });
      },
    });
    if (this.data.isErrorBirthDay) {
      this.setData({
        isErrorBirthDay: false,
      });
    }
  },

  onInputMaritalStatus(value) {
    this.setData({
      inputBirthDay: value,
    });
  },

  onContinue() {
    const {
      isErrorIdCard,
      inputIdCard,
      isErrorName,
      inputName,
      isErrorBirthDay,
      isErrorMaritalStatus,
      selectedMaritalStatus,
      selectedDate,
      gender,
    } = this.data;
    const inputIdCardLength = inputIdCard.length;
    const inputNameLength = inputName.length;
    const inputNameArray = inputName.split(" ");

    if (inputNameLength === 0) {
      this.setData({
        isErrorName: true,
        errorTextName: "Vui lòng nhập họ và tên!",
      });
    } else if (inputNameArray.length < 2 || !checkWhiteSpace(inputNameArray)) {
      this.setData({
        isErrorName: true,
        errorTextName: "Định dạng họ và tên không đúng!",
      });
    } else {
      if (inputNameArray.includes(" ")) {
        this.setData({
          isErrorName: true,
          errorTextName: "Định dạng họ và tên không đúng!",
        });
      }
    }

    if (inputIdCardLength === 0) {
      this.setData({
        isErrorIdCard: true,
        errorTextIdCard: "Vui lòng nhập CMND hoặc CCCD!",
      });
    } else if (inputIdCardLength !== 9) {
      if (inputIdCardLength !== 12) {
        this.setData({
          isErrorIdCard: true,
          errorTextIdCard: "Định dạng số CMND hoặc CCCD không đúng!",
        });
      }
    }

    if (selectedDate === "") {
      this.setData({
        isErrorBirthDay: true,
        errorTextBirthDay: "Vui lòng chọn ngày sinh!",
      });
    }

    if (selectedMaritalStatus === "") {
      this.setData({
        isErrorMaritalStatus: true,
        errorTextMaritalStatus: "Vui lòng chọn tình trạng hôn nhân!",
      });
    }

    if (
      !this.data.isErrorIdCard &&
      !this.data.isErrorName &&
      !this.data.isErrorBirthDay &&
      !this.data.isErrorMaritalStatus &&
      inputIdCard !== "" &&
      inputName !== ""
    ) {
      my.setStorage({
        key: "customerInfo",
        data: {
          name: inputName,
          idCard: inputIdCard,
          birthday: selectedDate,
          gender: gender,
          maritalStatus: selectedMaritalStatus,
        },
      });
      my.navigateTo({ url: "pages/address/index" });
    }
  },

  onLoad() {
    my.hideBackHome({ hide: true });
  },
});
