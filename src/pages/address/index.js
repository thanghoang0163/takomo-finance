Page({
  data: {
    titleHeader: "Thông tin địa chỉ",
    streetPlaceholder: "Nhập địa chỉ",
    cityPlaceLabel: "Tỉnh / Thành phố:",
    cityPlaceholder: "Chọn tỉnh / Thành phố",
    districtPlaceLabel: "Quận / Huyện:",
    districtPlaceholder: "Chọn quận / Huyện",
    wardPlaceLabel: "Phường / Xã / Thị trấn:",
    wardPlaceholder: "Chọn phường / Xã / Thị trấn",
    labelApartment: "Số căn hộ:",
    placeHolderApartment: "Nhập số căn hộ",
    typeApartment: "text",
    maxLengthApartment: 100,
    errorTextApartment: "",
    inputApartment: "",
    isErrorApartment: false,
    labelResidence: "Thời gian cư chú ( Năm ):",
    placeHolderResidence: "Chọn thời gian cư chú ( Năm )",
    titleResidence: "Thời gian cư chú ( Năm )",
    errorTextResidence: "",
    isErrorResidence: false,
    selectedResidence: "",
    btnText: "Tiếp tục bước 3/7",
    street: "",
    city: {},
    district: {},
    ward: {},
    streetErrorMsg: "",
    cityErrorMsg: "",
    districtErrorMsg: "",
    wardErrorMsg: "",
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
      });
    }
    if (this.data.streetErrorMsg) {
      this.setData({
        streetErrorMsg: "",
      });
    }
    if (this.data.cityErrorMsg) {
      this.setData({
        cityErrorMsg: "",
      });
    }
    if (this.data.districtErrorMsg) {
      this.setData({
        districtErrorMsg: "",
      });
    }
    if (this.data.wardErrorMsg) {
      this.setData({
        wardErrorMsg: "",
      });
    }
  },

  onSelectResidence(value) {
    this.setData({
      selectedResidence: value,
    });
    if (this.data.isErrorResidence) {
      this.setData({
        isErrorResidence: false,
      });
    }
  },

  onSelectAddress() {
    my.getAddress({
      success: (res) => {
        console.log("address: ", res);
      },
      fail: (res) => {
        console.log(res.errorMessage);
      },
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
      selectedResidence,
      inputApartment,
    } = this.data;

    if (street === "") {
      this.setData({
        streetErrorMsg: "Vui lòng nhập địa chỉ cư trú!",
      });
    }

    if (city === null) {
      this.setData({
        cityErrorMsg: "Vui lòng chọn tỉnh / thành phố cư trú!",
      });
    }
    if (district === null) {
      this.setData({
        districtErrorMsg: "Vui lòng chọn quận / huyện cư trú!",
      });
    }
    if (ward === null) {
      this.setData({
        wardErrorMsg: "Vui lòng chọn phường / xã / thị trấn cư trú!",
      });
    }

    if (selectedResidence.length === 0) {
      this.setData({
        isErrorResidence: true,
        errorTextResidence: "Vui lòng chọn thời gian cư trú!",
      });
    }

    if (
      !this.data.isErrorApartment &&
      !this.data.isErrorResidence &&
      city !== "" &&
      selectedResidence !== "" &&
      street !== "" &&
      district !== "" &&
      ward !== ""
    ) {
      my.setStorage({
        key: "address",
        data: {
          street,
          city,
          district,
          ward,
          apartment: inputApartment,
          residenceTime: selectedResidence,
        },
      });
      my.navigateTo({ url: "pages/job-info/index" });
    }
  },

  onLoad() {
    my.hideBackHome({ hide: true });
  },
});
