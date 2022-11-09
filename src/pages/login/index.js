import { decode } from "html-entities";
import parse from "@tiki.vn/mini-html-parser2";
import { isValidPhoneNumber } from "../../utils/common.sjs";

Page({
  data: {
    text: "Takomo ",
    btnText: "Đăng ký",
    htmlNodes: [],
    htmlNodesText: "",
    isFirst: true,
    isError: false,
    errorText: "",
    input: "",
    label: "Số điện thoại để đăng ký:",
    placeHolder: "Nhập số điện thoại",
    type: "number",
    maxlength: 10,
    modal: {
      isShow: false,
      text: [],
    },
  },

  onInputPhone(value) {
    this.setData({
      input: value,
    });
    if (this.data.isError) {
      this.setData({
        isError: false,
      });
    }
  },

  onLogin() {
    // this.data.modal = {
    //   ...this.data.modal,
    //   isShow: true,
    //    text:["ĐỂ ĐĂNG NHẬP QUẢN TRỊ TÀI KHOẢN HOẶC VAY THÊM. QUÝ KHÁCH VUI LÒNG TRUY CẬP <text style='background:#7209B7'>ỨNG DỤNG DI ĐỘNG<text> HOẶC <text style='background:#7209B7'>WEBSITE<text> CỦA <text style='background:#7209B7'>TAKOMO.VN<text> ĐỂ TIẾP TỤC",]
    // };
    // this.setData({
    //   modal: this.data.modal,
    // });

    const { input } = this.data;
    const itemInput = input.slice(0, 1);
    const formatNumberinput = input.slice(0, 2);
    const inputLength = input.length;
    if (inputLength === 0) {
      this.setData({
        isError: true,
        errorText: "Vui lòng nhập số điện thoại để đăng ký!",
      });
    } else if (inputLength < 10 && inputLength > 0) {
      this.setData({
        isError: true,
        errorText: "Số điện thoại nhập không đủ!",
      });
    } else if (
      (itemInput !== "0" && itemInput.length !== 0) ||
      !isValidPhoneNumber(formatNumberinput)
    ) {
      this.setData({
        isError: true,
        errorText: "Định dạng của số điện thoại không đúng!",
      });
    } else {
      my.setStorage({
        key: "login",
        data: {
          phone: input,
        },
      });
      my.navigateTo({ url: "pages/register/index" });
    }
  },

  onHide() {
    this.data.modal = {
      ...this.data.modal,
      isShow: false,
    };
    this.setData({
      modal: this.data.modal,
    });
  },

  onLoad() {
    my.hideBackHome({
      hide: true,
    });
    my.getStorage({
      key: "isFirst",
      success: (res) => {
        this.setData({
          isFirst: res.data.title,
        });
      },
      failed: (err) => {
        console.log(err);
      },
    });
    // parse(
    //   decode(this.data.modal.text ? this.data.modal.text : ""),
    //   (err, htmlNodes) => {
    //     if (!err) {
    //       this.setData({
    //         htmlNodes,
    //         htmlNodesText: JSON.stringify(htmlNodes, null, 2),
    //       });
    //     }
    //   }
    // );
    // console.log(this.data.htmlNodes);
  },
});
