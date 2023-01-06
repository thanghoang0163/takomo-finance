import parse from "@tiki.vn/mini-html-parser2";
import { registerApis } from "../../services/apis/index";
import { isValidPhoneNumber, isNumber } from "../../utils/common.sjs";
import { convertHtmlNodes } from "../../utils/common.js";

const app = getApp();

Page({
  data: {
    text: "Takomo ",
    btnText: "Đăng ký",
    htmlNodes: [],
    isFirst: true,
    isError: false,
    isShow: false,
    isAboutUs: false,
    errorText: "",
    input: "",
    label: "Số điện thoại để đăng ký:",
    placeHolder: "Nhập số điện thoại",
    type: "number",
    maxlength: 10,
    modal: {
      isShowModal: false,
      desc: [],
      header: [],
      btnTextModal: "",
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

  onOpenAboutUs() {
    this.setData({
      isShow: true,
      isAboutUs: true,
    });
  },

  onOpenQuestions() {
    this.setData({
      isShow: true,
      isAboutUs: false,
    });
  },

  onClose() {
    this.setData({
      isShow: false,
    });
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

  async onLogin() {
    const { input } = this.data;
    const itemInput = input.slice(0, 1);
    const formatNumberinput = input.slice(0, 3);
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
      !isValidPhoneNumber(formatNumberinput) ||
      !isNumber(itemInput)
    ) {
      this.setData({
        isError: true,
        errorText: "Định dạng số điện thoại không đúng!",
      });
    } else {
      my.setStorage({
        key: "login",
        data: {
          phone: this.data.input,
        },
      });
      const res = await registerApis.checkExistence({
        data: {
          phone: this.data.input,
        },
      });
      if (res.data.data.client_exists) {
        this.data.modal = {
          ...this.data.modal,
          isShowModal: true,
          desc: this.data.htmlNodes,
          header: ["Tài khoản đã tồn tại"],
          btnTextModal: "Đã hiểu",
        };
        this.setData({
          modal: this.data.modal,
        });
      } else {
        my.setStorage({
          key: "login",
          data: {
            phone: this.data.input,
            apiKey: Object.values(res.headers).find((item) =>
              item.includes("_mobile_session_key")
            ),
          },
        });
        app.getLogin();
        my.navigateTo({ url: "pages/register/index" });
      }
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

  async onLoad() {
    const string = `Để đăng nhập quản trị tài khoản hoặc vay thêm, quý khách vui lòng truy cập <span style="color: #7209b7">ứng dụng di động</span> hoặc website <span style="color: #7209b7">takomo.vn</span> để tiếp tục`;

    const htmlNodes = await convertHtmlNodes(string);
    this.setData({
      htmlNodes,
    });
  },

  onShow() {
    my.hideBackHome({
      hide: true,
    });
  },
});
