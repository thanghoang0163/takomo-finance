import {
  isValidPhoneNumber,
  checkWhiteSpace,
  isValidName,
  hasSpecialCharater,
  isNumber,
} from "../../utils/common.sjs";

Page({
  data: {
    titleHeader: "Thông tin người liên hệ",
    labelNameRelative: "Họ và tên:",
    placeHolderNameRelative: "Nhập họ và tên",
    typeNameRelative: "text",
    maxLengthNameRelative: 100,
    errorTextNameRelative: "",
    inputNameRelative: "",
    isErrorNameRelative: false,
    labelPhoneRelative: "Số điện thoại:",
    placeHolderPhoneRelative: "Nhập số điện thoại",
    typePhoneRelative: "number",
    maxLengthPhoneRelative: 10,
    errorTextPhoneRelative: "",
    inputPhoneRelative: "",
    isErrorPhoneRelative: false,
    labelRelationship: "Mối quan hệ:",
    placeHolderRelationship: "Chọn mối quan hệ",
    titleRelationship: "Mối quan hệ",
    errorTextRelationship: "",
    selectedRelationship: "",
    isErrorRelationship: false,
    labelNameColleague: "Họ và tên:",
    placeHolderNameColleague: "Nhập họ và tên",
    typeNameColleague: "text",
    maxLengthNameColleague: 100,
    errorTextNameColleague: "",
    inputNameColleague: "",
    isErrorNameColleague: false,
    labelPhoneColleague: "Số điện thoại:",
    placeHolderPhoneColleague: "Nhập số điện thoại",
    typePhoneColleague: "number",
    maxLengthPhoneColleague: 10,
    errorTextPhoneColleague: "",
    inputPhoneColleague: "",
    isErrorPhoneColleague: false,
    labelNamePlusContact: "Họ và tên:",
    placeHolderNamePlusContact: "Nhập họ và tên",
    typeNamePlusContact: "text",
    maxLengthNamePlusContact: 100,
    errorTextNamePlusContact: "",
    inputNamePlusContact: "",
    isErrorNamePlusContact: false,
    labelPhonePlusContact: "Số điện thoại:",
    placeHolderPhonePlusContact: "Nhập số điện thoại",
    typePhonePlusContact: "number",
    maxLengthPhonePlusContact: 10,
    errorTextPhonePlusContact: "",
    inputPhonePlusContact: "",
    isErrorPhonePlusContact: false,
    btnText: "Tiếp tục bước 5/7",
  },

  itemInput(input) {
    const itemInput = input.slice(0, 1);
    return itemInput;
  },

  formatNumberinput(input) {
    const formatNumberinput = input.slice(0, 2);
    return formatNumberinput;
  },

  onInputNameRelative(value) {
    this.setData({
      inputNameRelative: value,
    });
    if (this.data.isErrorNameRelative) {
      this.setData({
        isErrorNameRelative: false,
      });
    }
  },

  onInputPhoneRelative(value) {
    this.setData({
      inputPhoneRelative: value,
    });
    if (this.data.isErrorPhoneRelative) {
      this.setData({
        isErrorPhoneRelative: false,
      });
    }
    if (this.data.inputPhoneRelative === this.data.inputPhoneColleague) {
      this.setData({
        isErrorPhoneRelative: true,
        errorTextPhoneRelative: "Số điện thoại bị trùng với đồng nghiệp!",
      });
    }
    if (
      this.data.inputPhoneRelative === "" &&
      this.data.inputPhoneColleague === ""
    ) {
      this.setData({
        isErrorPhoneRelative: false,
      });
    }
  },

  onInputNameColleague(value) {
    this.setData({
      inputNameColleague: value,
    });
    if (this.data.isErrorNameColleague) {
      this.setData({
        isErrorNameColleague: false,
      });
    }
  },

  onInputPhoneColleague(value) {
    this.setData({
      inputPhoneColleague: value,
    });
    if (this.data.isErrorPhoneColleague) {
      this.setData({
        isErrorPhoneColleague: false,
      });
    }

    if (this.data.inputPhoneColleague === this.data.inputPhoneRelative) {
      this.setData({
        isErrorPhoneColleague: true,
        errorTextPhoneColleague: "Số điện thoại bị trùng với người thân!",
      });
    }
    if (
      this.data.inputPhoneColleague === "" &&
      this.data.inputPhoneRelative === ""
    ) {
      this.setData({
        isErrorPhoneColleague: false,
      });
    }
  },

  onInputNamePlusContact(value) {
    this.setData({
      inputNamePlusContact: value,
    });
    if (this.data.isErrorNamePlusContact) {
      this.setData({
        isErrorNamePlusContact: false,
      });
    }
  },

  onInputPhonePlusContact(value) {
    this.setData({
      inputPhonePlusContact: value,
    });
    if (this.data.isErrorPhonePlusContact) {
      this.setData({
        isErrorPhonePlusContact: false,
      });
    }
  },

  onSelectRelationship(value) {
    this.setData({
      selectedRelationship: value,
    });
    if (this.data.isErrorRelationship) {
      this.setData({
        isErrorRelationship: false,
      });
    }
  },

  onContinue() {
    const {
      inputNameRelative,
      inputPhoneRelative,
      inputNameColleague,
      inputPhoneColleague,
      inputNamePlusContact,
      inputPhonePlusContact,
      selectedRelationship,
    } = this.data;

    const nameRelativeArray = inputNameRelative.split(" ");
    const nameColleagueArray = inputNameColleague.split(" ");
    const namePlusContactArray = inputNamePlusContact.split(" ");
    if (inputNameRelative.length === 0) {
      this.setData({
        isErrorNameRelative: true,
        errorTextNameRelative: "Vui lòng nhập họ và tên người liên hệ!",
      });
    } else if (
      nameRelativeArray.length < 2 ||
      !checkWhiteSpace(nameRelativeArray)
    ) {
      this.setData({
        isErrorNameRelative: true,
        errorTextNameRelative: "Định dạng họ và tên không đúng!",
      });
    } else {
      if (
        nameRelativeArray.includes(" ") ||
        isValidName(inputNameRelative) ||
        hasSpecialCharater(inputNameRelative)
      ) {
        this.setData({
          isErrorNameRelative: true,
          errorTextNameRelative: "Định dạng họ và tên không đúng!",
        });
      }
    }

    if (inputNameColleague.length === 0) {
      this.setData({
        isErrorNameColleague: true,
        errorTextNameColleague: "Vui lòng nhập họ và tên đồng nghiệp!",
      });
    } else if (
      nameColleagueArray.length < 2 ||
      !checkWhiteSpace(nameColleagueArray)
    ) {
      this.setData({
        isErrorNameColleague: true,
        errorTextNameColleague: "Định dạng họ và tên không đúng!",
      });
    } else {
      if (
        nameColleagueArray.includes(" ") ||
        isValidName(inputNameColleague) ||
        hasSpecialCharater(inputNameColleague)
      ) {
        this.setData({
          isErrorNameColleague: true,
          errorTextNameColleague: "Định dạng họ và tên không đúng!",
        });
      }
    }

    if (inputNamePlusContact !== "") {
      if (inputNamePlusContact.length === 0) {
        this.setData({
          isErrorNamePlusContact: true,
          errorTextNamePlusContact: "Vui lòng nhập họ và tên người bổ sung!",
        });
      } else if (
        namePlusContactArray.length < 2 ||
        !checkWhiteSpace(namePlusContactArray)
      ) {
        this.setData({
          isErrorNamePlusContact: true,
          errorTextNamePlusContact: "Định dạng họ và tên không đúng!",
        });
      }
    } else {
      if (
        namePlusContactArray.includes(" ") ||
        isValidName(inputNamePlusContact) ||
        hasSpecialCharater(inputNamePlusContact)
      ) {
        this.setData({
          isErrorNamePlusContact: true,
          errorTextNamePlusContact: "Định dạng họ và tên không đúng!",
        });
      }
    }

    if (inputPhoneRelative.length === 0) {
      this.setData({
        isErrorPhoneRelative: true,
        errorTextPhoneRelative: "Vui lòng nhập số điện thoại của người thân!",
      });
    } else if (
      inputPhoneRelative.length < 10 &&
      inputPhoneRelative.length > 0
    ) {
      this.setData({
        isError: true,
        errorText: "Số điện thoại nhập không đủ!",
      });
    } else if (
      (this.itemInput(inputPhoneRelative) !== "0" &&
        inputPhoneRelative.length !== 0) ||
      !isValidPhoneNumber(this.formatNumberinput(inputPhoneRelative)) ||
      !isNumber(inputPhoneRelative)
    ) {
      this.setData({
        isErrorPhoneRelative: true,
        errorTextPhoneRelative: "Định dạng số điện thoại không đúng!",
      });
    }

    if (inputPhoneColleague.length === 0) {
      this.setData({
        isErrorPhoneColleague: true,
        errorTextPhoneColleague: "Vui lòng nhập số điện thoại của đồng nghiệp!",
      });
    } else if (
      (this.itemInput(inputPhoneColleague) !== "0" &&
        inputPhoneColleague.length !== 0) ||
      !isValidPhoneNumber(this.formatNumberinput(inputPhoneColleague)) ||
      !isNumber(inputPhoneColleague)
    ) {
      this.setData({
        isErrorPhoneColleague: true,
        errorTextPhoneColleague: "Định dạng số điện thoại không đúng!",
      });
    } else if (
      inputPhoneColleague.length < 10 &&
      inputPhoneColleague.length > 0
    ) {
      this.setData({
        isErrorPhoneColleague: true,
        errorTextPhoneColleague: "Số điện thoại nhập không đủ!",
      });
    }

    if (inputPhonePlusContact !== "") {
      if (inputPhonePlusContact.length === 0) {
        this.setData({
          isErrorPhonePlusContact: true,
          errorTextPhonePlusContact:
            "Vui lòng nhập số điện thoại của người bổ sung!",
        });
      } else if (
        (this.itemInput(inputPhonePlusContact) !== "0" &&
          inputPhonePlusContact.length !== 0) ||
        !isValidPhoneNumber(this.formatNumberinput(inputPhonePlusContact)) ||
        !isNumber(inputPhonePlusContact)
      ) {
        this.setData({
          isErrorPhonePlusContact: true,
          errorTextPhonePlusContact: "Định dạng số điện thoại không đúng!",
        });
      } else if (
        inputPhonePlusContact.length < 10 &&
        inputPhonePlusContact.length > 0
      ) {
        this.setData({
          isErrorPhonePlusContact: true,
          errorTextPhonePlusContact: "Số điện thoại nhập không đủ!",
        });
      }
    }

    if (selectedRelationship === "") {
      this.setData({
        isErrorRelationship: true,
        errorTextRelationship: "Vui lòng xác nhận mối quan hệ!",
      });
    }

    if (
      !this.data.isErrorNameColleague &&
      !this.data.isErrorNamePlusContact &&
      !this.data.isErrorNameRelative &&
      !this.data.isErrorPhoneColleague &&
      !this.data.isErrorPhonePlusContact &&
      !this.data.isErrorPhoneRelative &&
      !this.data.isErrorRelationship &&
      inputNameRelative !== "" &&
      inputPhoneRelative !== "" &&
      inputNameColleague !== "" &&
      inputPhoneColleague !== "" &&
      selectedRelationship !== ""
    ) {
      my.setStorage({
        key: "accquaintanceInfo",
        data: {
          nameRelative: inputNameRelative,
          phoneRelative: inputPhoneRelative,
          nameColleague: inputNameColleague,
          phoneColleague: inputPhoneColleague,
          namePlusContact: inputNamePlusContact,
          phonePlusContact: inputPhonePlusContact,
          relationship: selectedRelationship,
        },
      });
      my.navigateTo({ url: "pages/bank-info/index" });
    }
  },

  onLoad() {
    my.hideBackHome({ hide: true });
  },
});
