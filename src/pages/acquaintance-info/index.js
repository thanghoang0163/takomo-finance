import { isValidPhoneNumber } from "../../utils/common.sjs";

Page({
  data: {
    labelNameRelative: "Họ và tên:",
    placeHolderNameRelative: "Họ và tên",
    typeNameRelative: "text",
    maxLengthNameRelative: 100,
    errorTextNameRelative: "",
    inputNameRelative: "",
    isErrorNameRelative: false,
    labelPhoneRelative: "Số điện thoại:",
    placeHolderPhoneRelative: "Số điện thoại",
    typePhoneRelative: "number",
    maxLengthPhoneRelative: 10,
    errorTextPhoneRelative: "",
    inputPhoneRelative: "",
    isErrorPhoneRelative: false,
    labelRelationship: "Mối quan hệ:",
    placeHolderRelationship: "Mối quan hệ",
    titleRelationship: "Mối quan hệ",
    errorTextRelationship: "",
    selectedItem: "",
    isErrorRelationship: false,
    labelNameColleague: "Họ và tên:",
    placeHolderNameColleague: "Họ và tên",
    typeNameColleague: "text",
    maxLengthNameColleague: 100,
    errorTextNameColleague: "",
    inputNameColleague: "",
    isErrorNameColleague: false,
    labelPhoneColleague: "Số điện thoại:",
    placeHolderPhoneColleague: "Số điện thoại",
    typePhoneColleague: "number",
    maxLengthPhoneColleague: 10,
    errorTextPhoneColleague: "",
    inputPhoneColleague: "",
    isErrorPhoneColleague: false,
    labelNamePlusContact: "Họ và tên:",
    placeHolderNamePlusContact: "Họ và tên",
    typeNamePlusContact: "text",
    maxLengthNamePlusContact: 100,
    errorTextNamePlusContact: "",
    inputNamePlusContact: "",
    isErrorNamePlusContact: false,
    labelPhonePlusContact: "Số điện thoại:",
    placeHolderPhonePlusContact: "Số điện thoại",
    typePhonePlusContact: "number",
    maxLengthPhonePlusContact: 10,
    errorTextPhonePlusContact: "",
    inputPhonePlusContact: "",
    isErrorPhonePlusContact: false,
    btnText: "Tiếp tục bước 5/7",
    listRelationship: [
      {
        id: 1,
        name: "Vợ",
      },
      {
        id: 2,
        name: "Mẹ",
      },
      {
        id: 3,
        name: "Bố",
      },
      {
        id: 4,
        name: "Anh trai",
      },
      {
        id: 5,
        name: "Khác",
      },
    ],
  },

  onSelectRelationship(value){
    this.setData({
      selectedItem: value
    })
  },

  onContinue() {},

  onLoad() {
    my.hideBackHome({ hide: true });
  },
});
