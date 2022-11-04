Page({
  data: {
    cityPlaceLabel: "Tỉnh / Thành phố:",
    cityPlaceholder: "Tỉnh / Thành phố",
    districtPlaceLabel: "Quận / Huyện:",
    districtPlaceholder: "Quận / Huyện",
    wardPlaceLabel: "Phường / Xã / Thị trấn:",
    wardPlaceholder: "Phường / Xã / Thị trấn",
    labelApartment: "Số căn hộ:",
    placeHolderApartment: "Số căn hộ",
    typeApartment: "text",
    maxLengthApartment: 100,
    errorTextApartment: "",
    inputApartment: "",
    isErrorApartment: false,
    labelResidence: "Thời gian cư chú ( Năm ):",
    placeHolderResidence: "Thời gian cư chú ( Năm )",
    titleResidence: "Thời gian cư chú ( Năm )",
    errorTextResidence: "",
    isErrorResidence: false,
    selectedItem: "",
    btnText: "Tiếp tục bước 3/7",
    street: "",
    city: {},
    district: {},
    ward: {},
    streetErrorMsg: "",
    cityErrorMsg: "",
    districtErrorMsg: "",
    wardErrorMsg: "",
    address: {},
    listResidence: [
      {
        id: 1,
        name: "Dưới 1 năm",
      },
      {
        id: 2,
        name: "1 năm",
      },
      {
        id: 3,
        name: "2 năm",
      },
      {
        id: 4,
        name: "3 năm",
      },
      {
        id: 5,
        name: "4 năm",
      },
      {
        id: 6,
        name: "5 năm",
      },
      {
        id: 7,
        name: "6 năm",
      },
      {
        id: 8,
        name: "7 năm",
      },
      {
        id: 9,
        name: "8 năm",
      },
      {
        id: 10,
        name: "9 năm",
      },
      {
        id: 11,
        name: "10 năm",
      },
      {
        id: 12,
        name: "Hơn 10 năm",
      },
    ],
  },

  onChangeAddress(value) {
    if (value.city !== null && value.district !== null && value.ward !== null) {
      this.setData({
        street: value.street,
        city: value.city.name,
        district: value.district.name,
        ward: value.ward.name,
        address: value,
      });
    }
  },

  onSelect(value) {
    this.setData({
      selectedItem: value,
    });
  },

  onTapNextStep() {
    const {
      street,
      streetErrorMsg,
      district,
      districtErrorMsg,
      city,
      cityErrorMsg,
      ward,
      wardErrorMsg,
      selectedItem,
      address,
    } = this.data;
    if (street === "") {
      this.setData({
        streetErrorMsg: "Thông tin chưa được điền!",
      });
    }

    if (city === null) {
      this.setData({
        cityErrorMsg: "Thông tin chưa được chọn!",
      });
    }
    if (district === null) {
      this.setData({
        districtErrorMsg: "Thông tin chưa được chọn!",
      });
    }
    if (ward === null) {
      this.setData({
        wardErrorMsg: "Thông tin chưa được chọn!",
      });
    }

    if (selectedItem.length === 0) {
      this.setData({
        isErrorResidence: true,
        errorTextResidence: "Thông tin chưa được chọn!",
      });
    }

    if (address !== {} && selectedItem !== "" && street !== "") {
      my.navigateTo({ url: "pages/job-info/index" });
    }
  },

  onLoad() {
    my.hideBackHome({ hide: true });
  },
});
