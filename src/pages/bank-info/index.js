Page({
  data: {
    labelBank: "Ngân hàng:",
    placeHolderBank: "Ngân hàng",
    titleBank: "Ngân hàng",
    errorTextBank: "",
    selectedBank: "",
    isErrorBank: false,
    labelBankAcc: "Số tài khoản:",
    placeHolderBankAcc: "Số tài khoản",
    typeBankAcc: "number",
    maxLengthBankAcc: 100,
    errorTextBankAcc: "",
    inputBankAcc: "",
    isErrorBankAcc: false,
    labelLoanPurpose: "Mục đích vay:",
    placeHolderLoanPurpose: "Mục đích vay",
    titleLoanPurpose: "Mục đích vay",
    errorTextLoanPurpose: "",
    selectedLoan: "",
    isErrorLoanPurpose: false,
    btnText: "Tiếp tục bước 6/7",
    listLoanPurpose: [
      {
        id: 1,
        name: "Kinh doanh",
      },
      {
        id: 2,
        name: "Sửa xe máy",
      },
      {
        id: 3,
        name: "Du lịch",
      },
      {
        id: 4,
        name: "Cần gấp",
      },
      {
        id: 5,
        name: "Sự kiện quan trọng",
      },
      {
        id: 6,
        name: "Chăm sóc sức khỏe",
      },
      {
        id: 7,
        name: "Khác",
      },
    ],
  },

  onSelectLoan(value) {
    this.setData({
      selectedLoan: value,
    });
  },

  onLoad() {
    my.hideBackHome({ hide: true });
  },
});
