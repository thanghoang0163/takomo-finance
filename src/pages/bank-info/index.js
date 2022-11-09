import { isValidPhoneNumber } from "../../utils/common.sjs";

Page({
  data: {
    titleHeader: "Tài khoản nhận tiền",
    activeTab: 0,
    errorTextBank: "",
    selectedBank: "",
    isErrorBank: false,
    labelBankAcc: "Số tài khoản:",
    placeHolderBankAcc: "Nhập số tài khoản",
    typeBankAcc: "number",
    maxLengthBankAcc: 100,
    errorTextBankAcc: "",
    inputBankAcc: "",
    isErrorBankAcc: false,
    labelLoanPurpose: "Mục đích vay:",
    placeHolderLoanPurpose: "Chọn mục đích vay",
    titleLoanPurpose: "Mục đích vay",
    errorTextLoanPurpose: "",
    selectedLoanPurposeBank: "",
    selectedLoanPurposeMono: "",
    isErrorLoanPurpose: false,
    labelPhoneMomo: "Số điện thoại:",
    placeHolderPhoneMomo: "Nhập số điện thoại",
    typePhoneMomo: "number",
    maxLengthPhoneMomo: 10,
    errorTextPhoneMomo: "",
    inputPhoneMomo: "",
    isErrorPhoneMomo: false,
    isBank: true,
    btnText: "Tiếp tục bước 6/7",
  },

  onTabClick({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
    if (index === 1) {
      this.setData({
        isBank: false,
        activeTab: 1,
      });
    } else {
      this.setData({
        isBank: true,
        activeTab: 0,
      });
    }
  },

  onChangeTab({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },

  onSelectLoanPurposeBank(value) {
    this.setData({
      selectedLoanPurposeBank: value,
    });
  },

  onInputPhoneMomo(value) {
    this.setData({
      inputPhoneMomo: value,
    });
  },

  onSelectLoanPurposeMomo(value) {
    this.setData({
      selectedLoanPurposeMomo: value,
    });
  },

  onContinue() {
    const { inputPhoneMomo } = this.data;
    const itemInput = inputPhoneMomo.slice(0, 1);
    const formatNumberinput = inputPhoneMomo.slice(0, 2);
    const inputLength = inputPhoneMomo.length;
    if (inputLength === 0) {
      this.setData({
        isErrorPhoneMomo: true,
        errorTextPhoneMomo:
          "Vui lòng nhập số điện thoại / số tài khoản ví Momo!",
      });
    } else if (inputLength < 10 && inputLength > 0) {
      this.setData({
        isErrorPhoneMomo: true,
        errorTextPhoneMomo: "Số điện thoại nhập không đủ!",
      });
    } else if (
      (itemInput !== "0" && itemInput.length !== 0) ||
      !isValidPhoneNumber(formatNumberinput)
    ) {
      this.setData({
        isErrorPhoneMomo: true,
        errorTextPhoneMomo: "Định dạng của số điện thoại không đúng!",
      });
    } else {
      my.navigateTo({ url: "pages/take-photo/index" });
    }
  },

  onLoad() {
    my.hideBackHome({ hide: true });
  },
});
