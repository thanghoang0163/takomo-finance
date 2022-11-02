import { decode } from "html-entities";
import parse from "@tiki.vn/mini-html-parser2";

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
    label: "Nhập số điện thoại để đăng ký:",
    placeHolder: "Số điện thoại",
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

  onRegister() {
    // this.data.modal = {
    //   ...this.data.modal,
    //   isShow: true,
    //    text:["ĐỂ ĐĂNG NHẬP QUẢN TRỊ TÀI KHOẢN HOẶC VAY THÊM. QUÝ KHÁCH VUI LÒNG TRUY CẬP <text style='background:#7209B7'>ỨNG DỤNG DI ĐỘNG<text> HOẶC <text style='background:#7209B7'>WEBSITE<text> CỦA <text style='background:#7209B7'>TAKOMO.VN<text> ĐỂ TIẾP TỤC",]
    // };
    // this.setData({
    //   modal: this.data.modal,
    // });

    const itemInput = this.data.input.slice(0, 1);
    const nextIteminput = this.data.input.slice(1, 2);
    const inputLength = this.data.input.length;
    if (
      itemInput !== "0" &&
      itemInput.length !== 0 ||
      nextIteminput === itemInput
    ) {
      this.setData({
        isError: true,
        errorText: "Định dạng số điện thoại không đúng!",
      });
    } else if (inputLength < 10 && inputLength > 0) {
      this.setData({
        isError: true,
        errorText: "Số điện thoại nhập không đủ!",
      });
    } else if (inputLength === 0) {
      this.setData({
        isError: true,
        errorText: "Vui lòng không bỏ trống!",
      });
    } else {
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
