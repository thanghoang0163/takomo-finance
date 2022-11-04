export const isValidPhoneNumber = (phoneNumber) => {
  var regex = ["09", "03", "07", "08", "05"];
  return regex.includes(phoneNumber.toString());
};
