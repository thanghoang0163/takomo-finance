import { isValidStreet, hasSpecialCharater } from "../../utils/common.sjs";
import { directoryApis, applicationApis } from "../../services/apis/index";

const app = getApp();

Page({
  data: {
    streetPlaceholder: "Nhập địa chỉ",
    cityPlaceLabel: "Tỉnh / Thành phố:",
    cityPlaceholder: "Chọn tỉnh / Thành phố",
    districtPlaceLabel: "Quận / Huyện:",
    districtPlaceholder: "Chọn quận / Huyện",
    wardPlaceLabel: "Phường / Xã / Thị trấn:",
    wardPlaceholder: "Chọn phường / Xã / Thị trấn",
    labelApartment: "Số căn hộ:",
    placeHolderApartment: "Nhập số căn hộ",
    typeApartment: "number",
    maxLengthApartment: 10,
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
    address: {},
    listResidence: [],
    residenceId: 0,
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
      residenceId: value.id,
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
        this.setData({
          address: res,
        });
      },
      fail: (res) => {
        console.log(res.errorMessage);
      },
    });
  },

  onInputApartment(value) {
    this.setData({
      inputApartment: value,
    });
    if (this.data.isErrorApartment) {
      this.setData({
        isErrorApartment: false,
      });
    }
  },

  async onTapNextStep() {
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

    if (inputApartment !== "") {
      if (
        hasSpecialCharater(inputApartment) ||
        !isValidStreet(inputApartment.split(" "))
      ) {
        this.setData({
          isErrorApartment: true,
          errorTextApartment: "Định dạng số căn hộ chưa đúng!",
        });
      }
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
      const res = await applicationApis.applicationInfo({
        data: {
          residential_address_VN: {
            additional_territory: this.data.district,
            address_type_id: 1,
            apartment: this.data.inputApartment,
            city: this.data.city,
            house: this.data.street.split(' ')[0],
            region_code: "00",
            street: this.data.street,
            years_period_id: this.data.residenceId,
          },
          step: 2,
        },
      });
      if (res.data.success) {
        my.navigateTo({ url: "pages/job-info/index" });
      }
    }
  },

  async onLoad() {
    const res = await directoryApis.directory();
    const data = res.data.data;
    if (res.data.success) {
      this.setData({
        listResidence: data.StagePeriod.items,
      });
    }
  },
});
