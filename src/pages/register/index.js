import { decode } from "html-entities";
import parse from "@tiki.vn/mini-html-parser2";

Page({
  data: {
    text: "Takomo ",
    label: "Nhập số điện thoại để đăng ký:",
    placeHolder: "Số điện thoại",
    btnText: "Đăng ký",
    htmlNodes: [],
    htmlNodesText: "",
    modal: {
      isShow: false,
      text: [
        "ĐỂ ĐĂNG NHẬP QUẢN TRỊ TÀI KHOẢN HOẶC VAY THÊM. QUÝ KHÁCH VUI LÒNG TRUY CẬP <text style='background:#7209B7'>ỨNG DỤNG DI ĐỘNG<text> HOẶC <text style='background:#7209B7'>WEBSITE<text> CỦA <text style='background:#7209B7'>TAKOMO.VN<text> ĐỂ TIẾP TỤC",
      ],
    },
    isFirst: true,
    inputsArray: 1,
  },

  onTap() {
    this.data.modal = {
      ...this.data.modal,
      isShow: true,
    };
    this.setData({
      modal: this.data.modal,
    });
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
    });
    parse(
      decode(this.data.modal.text ? this.data.modal.text : ""),
      (err, htmlNodes) => {
        if (!err) {
          this.setData({
            htmlNodes,
            htmlNodesText: JSON.stringify(htmlNodes, null, 2),
          });
        }
      }
    );
    console.log(this.data.htmlNodes);
  },
});
