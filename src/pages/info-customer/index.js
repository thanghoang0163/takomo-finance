Page({
  data: {
    labelName: "Họ và tên:",
    placeHolderName: "Họ và tên",
    typeName: "text",
    maxLengthName: 100,
    errorTextName: "",
    inputName: "",
    labelIdCard: "CMND / CCCD:",
    placeHolderIdCard: "CMND / CCCD",
    typeIdCard: "text",
    maxLengthIdCard: 100,
    errorTextIdCard: "",
    inputIdCard: "",
    labelBirthDay: "Ngày sinh:",
    placeHolderBirthDay: "Ngày sinh",
    typeBirthDay: "text",
    maxLengthBirthDay: 100,
    errorTextBirthDay: "",
    inputBirthDay: "",
    labelMaritalStatus: "Tình trạng hôn nhân:",
    placeHolderMaritalStatus: "Tình trạng hôn nhân",
    typeMaritalStatus: "text",
    maxLengthMaritalStatus: 100,
    errorTextMaritalStatus: "",
    inputMaritalStatus: "",
    btnText: "Tiếp tục",
    items: [
      { name: "male", value: "Nam", checked: true },
      { name: "female", value: "Nữ" },
    ],
    isShowCalendar: false,
    date: 0,
    month: 0,
    year: 0,
  },

  onChange(e) {
    console.log(e.detail.value);
  },

  onOpenCalendar() {
    if (!this.data.isShowCalendar) {
      this.setData({
        isShowCalendar: true,
      });
    } else {
      this.setData({
        isShowCalendar: false,
      });
    }
  },

  onSelect(data) {
    let date = getDate(data.dates[0]);
    console.log(date)
  },

  onLoad() {
    my.hideBackHome({ hide: true });
  },
});
