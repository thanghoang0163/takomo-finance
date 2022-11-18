import { isValidPhoneNumber, isNumber } from "../../utils/common.sjs";

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
    isErrorLoanPurposeBank: false,
    isErrorLoanPurposeMomo: false,
    labelPhoneMomo: "Số điện thoại:",
    placeHolderPhoneMomo: "Nhập số điện thoại",
    typePhoneMomo: "number",
    maxLengthPhoneMomo: 10,
    errorTextPhoneMomo: "",
    inputPhoneMomo: "",
    isErrorPhoneMomo: false,
    isBank: true,
    isShow: false,
    btnText: "Tiếp tục bước 6/7",
  },

  onTapBank() {
    this.setData({
      isBank: true,
    });
  },

  onTapMomo() {
    this.setData({
      isBank: false,
    });
  },

  onSelectLoanPurposeBank(value) {
    this.setData({
      selectedLoanPurposeBank: value,
    });
    if (this.data.isErrorLoanPurposeBank) {
      this.setData({
        isErrorLoanPurposeBank: false,
      });
    }
  },

  onSelectLoanPurposeMomo(value) {
    this.setData({
      selectedLoanPurposeMomo: value,
    });
    if (this.data.isErrorLoanPurposeMomo) {
      this.setData({
        isErrorLoanPurposeMomo: false,
      });
    }
  },

  onInputBankAcc(value) {
    this.setData({
      inputBankAcc: value,
    });
    if (this.data.isErrorBankAcc) {
      this.setData({
        isErrorBankAcc: false,
      });
    }
  },

  onInputPhoneMomo(value) {
    this.setData({
      inputPhoneMomo: value,
    });
    if (this.data.isErrorPhoneMomo) {
      this.setData({
        isErrorPhoneMomo: false,
      });
    }
  },

  onSelectLoanPurposeMomo(value) {
    this.setData({
      selectedLoanPurposeMomo: value,
    });
    if (this.data.isErrorLoanPurposeMomo) {
      this.setData({
        isErrorLoanPurposeMomo: false,
      });
    }
  },

  onSearchBank() {},

  onOpenBottomSheet() {
    this.setData({
      isShow: true,
    });
  },

  onCloseBottomSheet() {
    this.setData({
      isShow: false,
    });
  },

  onSelectBank(value) {
    this.setData({
      selectedBank: value,
      isShow: false,
    });
    if (this.data.isErrorBank) {
      this.setData({
        isErrorBank: false,
      });
    }
  },

  onContinue() {
    const {
      inputPhoneMomo,
      inputBankAcc,
      selectedLoanPurposeBank,
      selectedLoanPurposeMomo,
      selectedBank,
    } = this.data;
    const itemInput = inputPhoneMomo.slice(0, 1);
    const formatNumberinput = inputPhoneMomo.slice(0, 2);
    const inputLength = inputPhoneMomo.length;

    if (selectedBank === "") {
      this.setData({
        isErrorBank: true,
        errorTextBank: "Vui lòng chọn ngân hàng để nhận tiền!",
      });
    }

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
    }

    if (inputBankAcc === "") {
      this.setData({
        isErrorBankAcc: true,
        errorTextBankAcc: "Vui lòng nhập số tài khoản ngân hàng nhận tiền!",
      });
    } else {
      if (!isNumber(inputBankAcc)) {
        this.setData({
          isErrorBankAcc: true,
          errorTextBankAcc: "Định dạng số điện thoại không đúng!",
        });
      }
    }

    if (selectedLoanPurposeBank === "") {
      this.setData({
        isErrorLoanPurposeBank: true,
        errorTextLoanPurposeBank: "Vui lòng chọn mục đích khi vay!",
      });
    }

    if (selectedLoanPurposeMomo === "") {
      this.setData({
        isErrorLoanPurposeMomo: true,
        errorTextLoanPurposeMomo: "Vui lòng chọn mục đích khi vay!",
      });
    }

    if (
      (selectedBank !== "" &&
        inputBankAcc !== "" &&
        selectedLoanPurposeBank !== "" &&
        !this.data.isErrorBank &&
        !this.data.isErrorBankAcc &&
        !this.data.isErrorLoanPurposeBank) ||
      (inputPhoneMomo !== "" &&
        selectedLoanPurposeMomo !== "" &&
        !this.data.isErrorPhoneMomo &&
        !this.data.isErrorLoanPurposeMomo)
    ) {
      my.navigateTo({ url: "pages/take-photo/index" });
    }
  },

  onLoad() {
    my.hideBackHome({ hide: true });
  },
});
