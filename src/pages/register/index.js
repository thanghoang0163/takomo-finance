import { isValidEmail } from "./index.sjs";
import { registerApis, applicationApis } from "../../services/apis/index";

const app = getApp();

Page({
  data: {
    labelPassword: "Mật khẩu:",
    placeHolderPassword: "Mật khẩu",
    typePassword: "number",
    maxLengthPassword: 8,
    errorTextPassword: "",
    inputPassword: "",
    labelPasswordAgain: "Nhập lại mật khẩu:",
    placeHolderPasswordAgain: "Nhập lại mật khẩu",
    typePasswordAgain: "number",
    maxLengthPasswordAgain: 8,
    errorTextPasswordAgain: "",
    inputPasswordAgain: "",
    labelEmail: "Email:",
    placeHolderEmail: "Email",
    typeEmail: "text",
    maxLengthEmail: 100,
    errorTextEmail: "",
    inputEmail: "",
    btnText: "Đăng ký",
    isErrorEmail: false,
    isErrorPassword: false,
    isErrorPasswordAgain: false,
    isFocusPassword: true,
    isFocusPasswordAgain: false,
    isFocusEmail: false,
  },

  onConfirmPassword() {
    this.setData({
      isFocusPassword: false,
      isFocusPasswordAgain: true,
    });
  },

  onConfirmPasswordAgain() {
    this.setData({
      isFocusPasswordAgain: false,
      isFocusEmail: true,
    });
  },

  onInputPassword(value) {
    this.setData({
      inputPassword: value,
    });
    if (this.data.isErrorPassword) {
      this.setData({
        isErrorPassword: false,
      });
    }
    if (this.data.isErrorPasswordAgain) {
      this.setData({
        isErrorPasswordAgain: false,
      });
    }
  },

  onInputPasswordAgain(value) {
    this.setData({
      inputPasswordAgain: value,
    });
    if (this.data.isErrorPasswordAgain) {
      this.setData({
        isErrorPasswordAgain: false,
      });
    }
  },

  onInputEmail(value) {
    this.setData({
      inputEmail: value,
    });
    if (this.data.isErrorEmail) {
      this.setData({
        isErrorEmail: false,
      });
    }
  },

  async onRegister() {
    const { inputPassword, inputPasswordAgain, inputEmail } = this.data;
    const inputPasswordLength = inputPassword.length;
    const inputPasswordAgainLength = inputPasswordAgain.length;
    const inputEmailLength = inputEmail.length;

    if (inputPasswordLength === 0) {
      this.setData({
        isErrorPassword: true,
        errorTextPassword: "Thông tin không được bỏ trống!",
      });
    } else if (inputPasswordLength < 4 && inputPasswordLength > 0) {
      this.setData({
        isErrorPassword: true,
        errorTextPassword: "Mật khẩu từ 4 - 8 số!",
      });
    }

    if (inputPasswordAgainLength === 0) {
      this.setData({
        isErrorPasswordAgain: true,
        errorTextPasswordAgain: "Thông tin không được bỏ trống!",
      });
    } else if (inputPasswordAgainLength < 4 && inputPasswordAgainLength > 0) {
      this.setData({
        isErrorPasswordAgain: true,
        errorTextPasswordAgain: "Mật khẩu cần tối thiểu 4 ký tự số!",
      });
    } else if (inputPasswordAgainLength !== 0 && inputPasswordLength !== 0) {
      if (this.data.inputPasswordAgain !== this.data.inputPassword) {
        this.setData({
          isErrorPasswordAgain: true,
          errorTextPasswordAgain: "Mật khẩu cung cấp không trùng khớp!",
        });
      }
    }

    if (inputEmailLength === 0) {
      this.setData({
        isErrorEmail: true,
        errorTextEmail: "Thông tin không được bỏ trống!",
      });
    } else if (!isValidEmail(inputEmail)) {
      this.setData({
        isErrorEmail: true,
        errorTextEmail: "Định dạng email không đúng!",
      });
    }

    if (
      !this.data.isErrorEmail &&
      !this.data.isErrorPassword &&
      !this.data.isErrorPasswordAgain &&
      inputEmail !== "" &&
      inputPassword !== "" &&
      inputPasswordAgain !== ""
    ) {
      const res = await registerApis.register({
        data: {
          phone: app.data.phone,
          email: this.data.inputEmail,
          password: this.data.inputPassword,
          password_confirmation: this.data.inputPasswordAgain,
        },
      });
      if (res.data.success) {
        my.setStorage({
          key: "login",
          data: {
            phone: app.data.phone,
            apiKey: Object.values(res.headers).find((item) =>
            item.includes("_mobile_session_key")
          ),
          },
        });
        my.setStorage({
          key: "register",
          data: {
            password: this.data.inputPassword,
            email: this.data.inputEmail,
          },
        });
        const resApp = await applicationApis.getApplicationId({
          data: {
            phone: app.data.phone,
            password: this.data.inputPassword,
          },
        });
        my.setStorage({
          key: "application",
          data: {
            applicationId: resApp.data.data.id,
          },
        });
        app.getLogin();
        app.getRegister();
        app.getApplication();
        if (resApp.data.success) {
          my.navigateTo({ url: "pages/take-photo/index" });
        }
      }
    }
  },
});
