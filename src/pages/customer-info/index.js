import parse from "@tiki.vn/mini-html-parser2";
import {
  checkWhiteSpace,
  isValidName,
  getAge,
  hasSpecialCharater,
  formatBirthDay,
} from "../../utils/common.sjs";
import { directoryApis, applicationApis } from "../../services/apis/index";

const app = getApp();

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
    btnText: "Tiếp tục bước 2/7",
    errorTextGender: "",
    isErrorGender: false,
    isFocusName: true,
    isFocusIdCard: false,
    genderId: 0,
    maritalId: 0,
    htmlNodes: [],
    modal: {
      isShowModal: false,
      desc: [],
      header: [],
      btnTextModal: "",
    },
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
      maritalId: value.id,
    });
    if (this.data.isErrorMaritalStatus) {
      this.setData({
        isErrorMaritalStatus: false,
      });
    }
  },

  onChangeGender(value) {
    this.setData({
      genderId: value,
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

  onCloseModal() {
    this.data.modal = {
      ...this.data.modal,
      isShowModal: false,
    };
    this.setData({
      modal: this.data.modal,
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
      const res = await applicationApis.applicationInfo({
        data: {
          step: 1,
          full_name: this.data.inputName,
          identity_card_number: this.data.inputIdCard,
          birthdate: formatBirthDay(selectedDate),
          gender_id: this.data.genderId,
          marital_status_id: this.data.maritalId,
          email: app.data.email,
        },
      });
      if (res.data.success) {
        my.navigateTo({ url: "pages/address/index" });
      } else if (res.data.error.code === 125) {
        this.data.modal = {
          ...this.data.modal,
          isShowModal: true,
          desc: this.data.htmlNodes,
          header: ["Lỗi"],
          btnTextModal: "Đã hiểu",
        };
        this.setData({
          modal: this.data.modal,
        });
      }
    }
  },

  async onLoad() {
    const html = `Số CMND/CCCD đã tồn tại`;
    parse(html, (err, htmlNodes) => {
      if (!err) {
        this.setData({
          htmlNodes,
        });
      }
    });
    const res = await directoryApis.directory();
    const data = res.data.data;
    if (res.data.success) {
      this.setData({
        genders: data.Gender.items,
        listMaritalStatus: data.MaritalStatus.items,
      });
    }
  },
});
