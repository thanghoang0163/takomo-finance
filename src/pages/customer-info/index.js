Page({
  data: {
    labelName: "Họ và tên:",
    placeHolderName: "Họ và tên",
    typeName: "text",
    maxLengthName: 100,
    errorTextName: "",
    inputName: "",
    isErrorName: false,
    labelIdCard: "CMND / CCCD:",
    placeHolderIdCard: "CMND / CCCD",
    typeIdCard: "number",
    maxLengthIdCard: 12,
    errorTextIdCard: "",
    inputIdCard: "",
    isErrorIdCard: false,
    labelBirthDay: "Ngày sinh:",
    placeHolderBirthDay: "Ngày sinh",
    errorTextBirthDay: "",
    selectedDate: "",
    isErrorBirthDay: false,
    labelMaritalStatus: "Tình trạng hôn nhân:",
    placeHolderMaritalStatus: "Tình trạng hôn nhân",
    titleMaritalStatus: "Tình trạng hôn nhân",
    errorTextMaritalStatus: "",
    selectedMaritalStatus: "",
    isErrorMaritalStatus: false,
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
  },

  onChange(e) {
    console.log(e.detail.value);
  },

  onSelectDate() {
    my.datePicker({
      title: "Ngày sinh",
      confirmBackgroundColor: "#F82486",
      success: (res) => {
        this.setData({
          selectedDate: res.date,
        });
      },
    });
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
    } = this.data;
    const inputIdCardLength = inputIdCard.length;
    const inputNameLength = inputName.length;
    const inputNameArray = inputName.split(" ");

    if (inputNameLength === 0) {
      this.setData({
        isErrorName: true,
        errorTextName: "Thông tin không được bỏ trống!",
      });
    } else if (inputNameArray.length < 2) {
      this.setData({
        isErrorName: true,
        errorTextName: "Tên ít nhất bao gồm họ và tên!",
      });
    }

    if (inputIdCardLength === 0) {
      this.setData({
        isErrorIdCard: true,
        errorTextIdCard: "Thông tin không được bỏ trống!",
      });
    } else if (inputIdCardLength !== 9) {
      if (inputIdCardLength !== 12) {
        this.setData({
          isErrorIdCard: true,
          errorTextIdCard: "Định dạng không đúng!",
        });
      }
    }

    if (selectedDate === "") {
      this.setData({
        isErrorBirthDay: true,
        errorTextBirthDay: "Thông tin không được bỏ trống!",
      });
    }

    if (selectedMaritalStatus === "") {
      this.setData({
        isErrorMaritalStatus: true,
        errorTextMaritalStatus: "Thông tin không được bỏ trống!",
      });
    }

    if (
      !isErrorIdCard &&
      !isErrorName &&
      !isErrorBirthDay &&
      !isErrorMaritalStatus &&
      inputIdCard !== "" &&
      inputName !== ""
    ) {
      my.navigateTo({ url: "pages/address/index" });
    }
  },

  onLoad() {
    my.hideBackHome({ hide: true });
  },
});
