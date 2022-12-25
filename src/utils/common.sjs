export const isHasValue = (value) =>
  value !== null && typeof value !== "undefined";

export const isNotEmpty = (value) =>
  isHasValue(value) && (value + "").trim().length > 0;

export const moneyFormatter = (number, suffix = " đ") => {
  if (!isNotEmpty(number)) return "";
  return parseInt(number).toLocaleString("vi-VN") + suffix;
};

export const isValidPhoneNumber = async (phoneNumber) => {
  var regex = [
    "032",
    "033",
    "034",
    "035",
    "036",
    "037",
    "038",
    "039",
    "086",
    "096",
    "097",
    "098",
    "081",
    "082",
    "083",
    "084",
    "085",
    "088",
    "091",
    "094",
    "092",
    "056",
    "058",
    "099",
    "059",
    "070",
    "079",
    "077",
    "076",
    "078",
  ];
  return regex.includes(phoneNumber);
};

export const checkWhiteSpace = (text) => {
  let count = 0;
  if (text.length === 2) {
    if (text[1] === "") {
      return false;
    }
  } else {
    text.map((item) => {
      if (item === "") {
        count++;
      }
    });
  }

  if (count >= 2) {
    return false;
  } else {
    return true;
  }
};

export const isValidStreet = (street) => {
  return street[0] === "" ? false : true;
};

export const isNumber = (number) => {
  let isnum = /^\d+$/.test(number);
  return isnum;
};

export const isValidName = (name) => {
  let regExp = /\d+/g;
  return name.match(regExp);
};

export const getAge = (dateString) => {
  var today = getDate();
  var birthDate = dateString.split("-");
  var age = today.getFullYear() - birthDate[2];
  var month = today.getMonth() + 1 - birthDate[1];
  var day = today.getDate() - birthDate[0];
  if (month < 0) {
    age--;
  }

  return age;
};

export const formatBirthDay = (birthday) => {
  const birth = birthday.split("-");
  const day = birth[0];
  const month = birth[1];
  const year = birth[2];

  return year + "-" + month + "-" + day;
};

export const hasSpecialCharater = (string) => {
  var regExp = /[~`!@#$%^&()_={}[\]:;,.<>+\?-]/;

  return string.match(regExp);
};
