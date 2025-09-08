for (let i = 0; i < 3; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) row += String.fromCharCode(65 + j);
  for (let j = i - 1; j >= 0; j--) row += String.fromCharCode(65 + j);
  console.log(" ".repeat(2 - i) + row);
}