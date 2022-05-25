module.exports = (list) =>
  list.sort((valueA, valueB) => {
    return valueA.last.date - valueB.last.date;
  });
