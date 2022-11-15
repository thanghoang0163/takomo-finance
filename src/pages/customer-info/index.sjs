export const isValidName = (name) => {
  let regExp = /^[a-zA-Z]+ [a-zA-Z]+$/;
  return name.match(regExp);
};
