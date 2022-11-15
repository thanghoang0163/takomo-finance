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

export const isValidName = (name) => {
  let regExp = /^[a-zA-Z]+ [a-zA-Z]+$/;
  return name.match(regExp);
};

