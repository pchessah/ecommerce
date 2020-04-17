function spinalCase(str) {
  let arr = str.split(" ");
  let b = arr.map((item) => item.toLowerCase());
  let ans = b.join("-")
console.log(ans);
 
}

spinalCase("thisIsSpinalTap")
