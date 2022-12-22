import {
  checkWhiteSpace,
  isValidName,
  getAge,
  hasSpecialCharater,
} from "../../utils/common.sjs";
import { directoryApis } from "../../services/apis/index";

Page({
  data: {
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
    gender: "",
    btnText: "Tiếp tục bước 2/7",
    errorTextGender: "",
    isErrorGender: false,
    isFocusName: true,
    isFocusIdCard: false,
    genders: [],
    phone: "",
    apiKey: "",
  },

  onConfirmName() {
    this.setData({
      isFocusName: false,
      isFocusIdCard: true,
    });
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
      selectedMaritalStatus: value,
    });
    if (this.data.isErrorMaritalStatus) {
      this.setData({
        isErrorMaritalStatus: false,
      });
    }
  },

  onChangeGender(value) {
    this.setData({
      gender: value,
    });
    if (this.data.isErrorGender) {
      this.setData({
        isErrorGender: false,
      });
    }
  },

  onSelectDate() {
    my.datePicker({
      title: "Ngày sinh",
      confirmBackgroundColor: "#F82486",
      startDate: "01-01-1960",
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

  async onContinue() {
    const {
      inputIdCard,
      inputName,
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
      if (
        inputNameArray.includes(" ") ||
        isValidName(inputName) ||
        hasSpecialCharater(inputName)
      ) {
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
    } else {
      if (getAge(selectedDate) < 22 || getAge(selectedDate) > 60) {
        this.setData({
          isErrorBirthDay: true,
          errorTextBirthDay: "Độ tuổi vừa nhập không phù hợp (từ 22-60 tuổi)!",
        });
      }
    }

    if (selectedMaritalStatus === "") {
      this.setData({
        isErrorMaritalStatus: true,
        errorTextMaritalStatus: "Vui lòng chọn tình trạng hôn nhân!",
      });
    }

    if (gender === "") {
      this.setData({
        isErrorGender: true,
        errorTextGender: "Vui lòng chọn giới tính!",
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
      const res = await registerApis.register(
        {
          data: {
            phone: this.data.phone,
            full_name: this.data.inputName,
          },
        },
        this.data.apiKey
      );
      // if (res.data.success) {
      //   my.navigateTo({ url: "pages/address/index" });
      // }
      console.log(res.data);
    }
  },

  async onLoad() {
    const res = await directoryApis.directory();
    const data = res.data.data;
    if (res.data.success) {
      this.setData({
        genders: data.Gender.items,
        listMaritalStatus: data.MaritalStatus.items.map((item) => item.title),
      });
    }

    my.getStorage({
      key: "login",
      success: (res) => {
        this.setData({
          apiKey: res.data.apiKey,
        });
      },
      fail: (err) => {
        console.log(err);
      },
    });
  },
});
