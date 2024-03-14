const dateFormat = function (date) {
  if (date === null || date === undefined) {
    throw new Error("Cannot format a null or undefined date");
  }
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
  });
};

const dateFormatDotNotation = function (date) {
  if (date === null || date === undefined) {
    throw new Error("Cannot format a null or undefined date");
  }
  const d = new Date(date);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [month, day, year].join(".");
};
