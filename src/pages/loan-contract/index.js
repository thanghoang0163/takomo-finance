Page({
  data: {
    titleHeader: "Ký hợp đồng vay",
    loanTime: 7,
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
        amount: 40000,
      },
      {
        id: 3,
        text: "Phí thuế tài sản: ",
        amount: 10000,
      },
    ],
  },

  onConfirm() {
    my.navigateTo({ url: "pages/thank-you/index" });
  },

  onLoad() {
    my.hideBackHome({ hide: true });
  },
});
