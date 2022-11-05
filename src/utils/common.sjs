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