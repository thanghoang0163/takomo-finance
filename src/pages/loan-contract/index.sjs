export const randomNumber = () => {
  var random = Math.floor(Math.random() * 1000000).toString();
  var unit = Math.floor(Math.random() * 10).toString();
  if (random.length === 5) {
    random += unit;
  }
  return random;
};

// export const countDate = () => {
//   var targetDate = getDate();

//   var futureDay = getDate(targetDate);
//   futureDay.setDate(targetDate.getDate() + 7);

//   var dd = futureDay.getDate();
//   var mm = futureDay.getMonth() + 1; // 0 is January, so we must add 1
//   var yyyy = futureDay.getFullYear();

//   var dateString =
//     (dd < 10 ? "0" + dd : dd) + "/" + (mm < 10 ? "0" + mm : mm) + "/" + yyyy;

//   return dateString;
// };
