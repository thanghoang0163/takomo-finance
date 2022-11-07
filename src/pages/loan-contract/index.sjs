export const randomNumber = () => {
  return Math.floor(Math.random() * 1000000);
};

export const countDate = () => {
  var targetDate = getDate();

  var dd = targetDate.getDate() + 7;
  var mm = targetDate.getMonth() + 1; // 0 is January, so we must add 1
  var yyyy = targetDate.getFullYear();

  var dateString = dd + "/" + mm + "/" + yyyy;

  return dateString;
};
