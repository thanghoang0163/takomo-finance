import { isValidStreet, hasSpecialCharater } from "../../utils/common.sjs";

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
    city: "",
    district: "",
    ward: "",
    streetErrorMsg: "",
    cityErrorMsg: "",
    districtErrorMsg: "",
    wardErrorMsg: "",
  },

  onChangeAddress(value) {
    this.setData({
      street: value.street,
    });
    if (value.city !== null) {
      this.setData({
        city: value.city.name,
      });
    }
    if (value.district !== null) {
      this.setData({
        district: value.district.name,
      });
    }
    if (value.ward !== null) {
      this.setData({
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
    const { street, district, city, ward, selectedResidence, inputApartment } =
      this.data;

    if (street === "" || !isValidStreet(street.split(" "))) {
      this.setData({
        streetErrorMsg: "Vui lòng nhập địa chỉ cư trú!",
      });
    } else {
      if (hasSpecialCharater(street)) {
        this.setData({
          streetErrorMsg: "Định dạng địa chỉ không đúng!",
        });
      }
    }

    if (city === "") {
      this.setData({
        cityErrorMsg: "Vui lòng chọn tỉnh / thành phố cư trú!",
      });
    }

    if (district === "") {
      this.setData({
        districtErrorMsg: "Vui lòng chọn quận / huyện cư trú!",
      });
    }

    if (ward === "") {
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
