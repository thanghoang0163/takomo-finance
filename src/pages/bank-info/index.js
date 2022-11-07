Page({
  data: {
    titleHeader: "Thông tin tài khoản nhận tiền",
    activeTab: 0,
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
    labelPhoneMomo: "Số điện thoại:",
    placeHolderPhoneMomo: "Số điện thoại",
    typePhoneMomo: "number",
    maxLengthPhoneMomo: 10,
    errorTextPhoneMomo: "",
    inputPhoneMomo: "",
    isErrorPhoneMomo: false,
    isBank: true,
    btnText: "Tiếp tục bước 6/7",
    tabsList: [
      {
        title: "Ngân hàng",
      },
      {
        title: "Momo",
      },
    ],
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

  onTabClick({ index, tabsName }) {
    this.setData({
      [tabsName]: index,
    });
  },

  onChangeTab({ index, tabsName }) {
    if (!this.data.isBank) {
      this.setData({
        [tabsName]: index,
      });
    }
  },

  onSelectLoan(value) {
    this.setData({
      selectedLoan: value,
    });
  },

  onContinue() {
    my.navigateTo({ url: "pages/take-photo/index" });
  },

  onLoad() {
    my.hideBackHome({ hide: true });
  },
});
