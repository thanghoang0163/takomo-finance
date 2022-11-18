export const isHasValue = (value) =>
  value !== null && typeof value !== "undefined";

export const isNotEmpty = (value) =>
  isHasValue(value) && (value + "").trim().length > 0;

export const moneyFormatter = (number, suffix = "") => {
  if (!isNotEmpty(number)) return "";
  return parseInt(number).toLocaleString("vi-VN") + suffix;
};

export const isValidPhoneNumber = (phoneNumber) => {
  var regex = ["09", "03", "07", "08", "05"];
  return regex.includes(phoneNumber.toString());
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
  if (street[0] === "") {
    return false;
  } else {
    return true;
  }
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

export const hasSpecialCharater = (string) => {
  var regExp = /[~`!@#$%^&()_={}[\]:;,.<>+\?-]/;

  return string.match(regExp);
};
