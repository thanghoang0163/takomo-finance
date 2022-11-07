export const randomNumber = () => {
  var random = Math.floor(Math.random() * 1000000).toString();
  var unit = Math.floor(Math.random() * 10).toString();
  if (random.length === 5) {
    random += unit;
  }
  return random;
};

export const countDate = () => {
  var targetDate = getDate();

  var dd = targetDate.getDate() + 7;
  var mm = targetDate.getMonth() + 1; // 0 is January, so we must add 1
  var yyyy = targetDate.getFullYear();

  var dateString = dd + "/" + mm + "/" + yyyy;

  return dateString;
};
