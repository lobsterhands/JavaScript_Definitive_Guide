function factorial(n) {
  var product = 1;
  while (n > 1) {
    product *= n;
    n--;
  }
  console.log(product)
}
factorial(4)
