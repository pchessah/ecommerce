function addTogether() {
  let checkNum = function (num) {
    if (typeof num !== "number") {
      return undefined;
    } else return num;
  };

  if (arguments.length < 2 && typeof arguments[0] == "number") {
    let x = arguments[0];
    if (checkNum(x)) {
      return function sum(a) {
        if (x === undefined || checkNum(a) === undefined) {
          return undefined;
        } else {
          return a + x;
        }
      };
    }
  } else if (
    arguments.length < 2 &&
    (typeof arguments[0] != "number" || typeof arguments[1] != "number")
  ) {
    return undefined;
  } else if (
    typeof arguments[0] != "number" ||
    typeof arguments[1] != "number"
  ) {
    return undefined;
  } else {
    return arguments[0] + arguments[1];
  }
}

addTogether(2)(3);
