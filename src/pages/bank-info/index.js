Page({
  data: {
    titleHeader: "Thông tin tài khoản nhận tiền",
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
    selectedLoan: "",
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
