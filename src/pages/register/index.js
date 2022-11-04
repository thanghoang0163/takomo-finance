import { isValidEmail } from "./index.sjs";

Page({
  data: {
    labelPassword: "Mật khẩu:",
    placeHolderPassword: "Mật khẩu",
    typePassword: "number",
    maxLengthPassword: 6,
    errorTextPassword: "",
    inputPassword: "",
    labelPasswordAgain: "Nhập lại mật khẩu:",
    placeHolderPasswordAgain: "Nhập lại mật khẩu",
    typePasswordAgain: "number",
    maxLengthPasswordAgain: 6,
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
  },

  handleIsError() {
    if (this.data.isError) {
      this.setData({
        isError: false,
      });
    }
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

  onRegister() {
    const {
      isErrorEmail,
      isErrorPassword,
      isErrorPasswordAgain,
      inputPassword,
      inputPasswordAgain,
      inputEmail,
    } = this.data;
    const inputPasswordLength = inputPassword.length;
    const inputPasswordAgainLength = inputPasswordAgain.length;
    const inputEmailLength = inputEmail.length;

    if (inputPasswordLength === 0) {
      this.setData({
        isErrorPassword: true,
        errorTextPassword: "Thông tin chưa được điền!",
      });
    } else if (inputPasswordLength < 4 && inputPasswordLength > 0) {
      this.setData({
        isErrorPassword: true,
        errorTextPassword: "Mật khẩu từ 4-6 số!",
      });
    }

    if (inputPasswordAgainLength === 0) {
      this.setData({
        isErrorPasswordAgain: true,
        errorTextPasswordAgain: "Thông tin chưa được điền!",
      });
    } else if (inputPasswordAgainLength < 4 && inputPasswordAgainLength > 0) {
      this.setData({
        isErrorPasswordAgain: true,
        errorTextPasswordAgain: "Mật khẩu từ 4-6 số!",
      });
    } else if (inputPasswordAgainLength !== 0 && inputPasswordLength !== 0) {
      if (this.data.inputPasswordAgain !== this.data.inputPassword) {
        this.setData({
          isErrorPasswordAgain: true,
          errorTextPasswordAgain: "Không khớp với mật khẩu!",
        });
      }
    }

    if (inputEmailLength === 0) {
      this.setData({
        isErrorEmail: true,
        errorTextEmail: "Thông tin chưa được điền!",
      });
    } else if (!isValidEmail(inputEmail)) {
      this.setData({
        isErrorEmail: true,
        errorTextEmail: "Định dạng email không đúng",
      });
    }

    if (
      isErrorEmail &&
      isErrorPassword &&
      isErrorPasswordAgain &&
      inputEmail !== "" &&
      inputPassword !== "" &&
      inputPasswordAgain !== ""
    ) {
      my.navigateTo({ url: "pages/info-customer/index" });
    }
  },

  onLoad() {
    my.hideBackHome({
      hide: true,
    });
  },
});
