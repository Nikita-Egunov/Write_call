let x = 0;

while (true) {
  let a = 2 * x + 1;
  let b = x - 3;
  
  if (b === 0) {
    console.log("Деление на ноль невозможно");
    break;
  }
  
  let c = a / b;
  
  if (c === 4) {
    console.log(`x = ${x}`);
    break;
  }
  
  x++;
}


