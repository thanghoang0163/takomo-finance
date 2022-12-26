import { isValidPhoneNumber, isNumber } from "../../utils/common.sjs";
import {
  directoryApis,
  applicationApis,
  financeApis,
} from "../../services/apis/index";

Page({
  data: {
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
    isEmpty: false,
    listLoanPurpose: [],
    listBank: [],
    valueSearch: "",
    btnText: "Tiếp tục bước 6/7",
    bankId: "",
    bankType: "",
    bankProvider: "",
    MomoType: "",
    MomoProvider: "",
    loanPurposeId: 0,
    financialInstrumentId: 0,
    modal: {
      isShowModal: false,
      desc: [],
      header: [],
      btnTextModal: "",
    },
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
      loanPurposeId: value.id,
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
      loanPurposeId: value.id,
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

  onSearchBank(value) {
    let filterBank = this.data.listBank.filter(
      (bank) => bank.title.toLowerCase().indexOf(value.toLowerCase()) > -1
    );

    if (value === "") {
      this.setData({
        listBank: listBank,
      });
    } else {
      if (filterBank.length !== 0) {
        this.setData({
          listBank: filterBank,
          isEmpty: false,
        });
      } else {
        this.setData({
          isEmpty: true,
        });
      }
    }
  },

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
      selectedBank: value.name,
      bankId: value.id,
      isShow: false,
    });
    if (this.data.isErrorBank) {
      this.setData({
        isErrorBank: false,
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
      !isValidPhoneNumber(formatNumberinput) ||
      !isNumber(inputPhoneMomo)
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
          errorTextBankAcc: "Định dạng số tài khoản không đúng!",
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
      if (this.data.isBank) {
        const res = await financeApis.postFinancialInstrument({
          data: {
            fin_instrument_type: this.data.bankType,
            bank_id: this.data.bankId,
            bank_account_number: this.data.inputBankAcc,
            provider_id: this.data.bankProvider,
          },
        });
        this.setData({
          financialInstrumentId: res.data.data.fin_instrument_id,
        });
        this.postToApplication();
      } else {
        const res = await financeApis.postFinancialInstrument({
          data: {
            fin_instrument_type: this.data.MomoType,
            phone_number: this.data.inputPhoneMomo,
            provider_id: this.data.MomoProvider,
          },
        });
        // if (res.data.success) {
        //   this.setData({
        //     financialInstrumentId: res.data.data.fin_instrument_id,
        //   });
        // } else if (res.data.error.code === 127 || res.data.error.code === 126) {
        //   this.data.modal = {
        //     ...this.data.modal,
        //     isShowModal: true,
        //     desc: ["Số điện thoại đã tồn tại"],
        //     header: ["Lỗi"],
        //     btnTextModal: "Đã hiểu",
        //   };
        //   this.setData({
        //     modal: this.data.modal,
        //   });
        this.setData({
          financialInstrumentId: res.data.data.fin_instrument_id,
        });
        this.postToApplication();
      }
    }
  },

  async postToApplication() {
    const resFinance = await applicationApis.applicationInfo({
      data: {
        credit_target_id: this.data.loanPurposeId,
        fin_instrument_id: this.data.financialInstrumentId,
        step: 5,
      },
    });
    if (resFinance.data.success) {
      my.navigateTo({ url: "pages/take-photo/index" });
    }
  },

  async onLoad() {
    const res = await directoryApis.directory();
    const data = res.data.data;
    const listBank = data.FinInstrumentBank.items.map((item) => {
      return { ...item, bigTitle: item.title.split("-")[0] };
    });
    if (res.data.success) {
      const resFinance = await financeApis.getFinancialInstrumentType();
      const dataItem = resFinance.data.data.items;
      if (resFinance.data.success) {
        this.setData({
          listLoanPurpose: data.CreditTarget.items,
          listBank: listBank,
          bankType: dataItem[0].id,
          bankProvider: dataItem[0].provider_id,
          MomoType: dataItem[1].id,
          MomoProvider: dataItem[1].provider_id,
        });
      }
    }
  },
});
