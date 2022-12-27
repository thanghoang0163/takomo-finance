import { applicationApis } from "../../services/apis/index";

Page({
  data: {
    loanTime: 0,
    approvedMoney: 0,
    paidMoney: 0,
    dueDate: "",
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

  async onConfirm() {
    const res = await applicationApis.applicationInfo({
      data: {
        step: 999,
      },
    });
    if (res.data.success) {
      my.navigateTo({ url: "pages/thank-you/index" });
    }
  },

  async onLoad() {
    const res = await applicationApis.currentApplicationInfo();
    const data = res.data.data;
    this.setData({
      paidMoney: data.loan_summary.total_amount,
      approvedMoney: data.amount,
      dueDate: data.loan_summary.due_date,
      loanTime: data.term.term,
    });
  },
});
