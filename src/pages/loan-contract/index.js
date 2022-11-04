Page({
  data: {
    loanTime: 7,
    loanDate: "14/10/2022",
    approvedMoney: 500000,
    paidMoney: 570000,
    btnText: "Xác nhận",
    feeList: [
      {
        id: 1,
        text: "Phí thông báo điện tử: ",
        amount: 20000,
      },
      {
        id: 2,
        text: "Phí quản lý: ",
        amount: 20000,
      },
      {
        id: 3,
        text: "Phí thuế tài sản: ",
        amount: 20000,
      },
    ],
  },

  onConfirm() {
    my.navigateTo({ url: "pages/success-loan/index" });
  },

  onLoad() {
    my.hideBackHome({ hide: true });
  },
});
