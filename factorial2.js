function factorial2(n) {
  var i, product = 1;
  for (i=2; i <= n; i++) {
    product *= i;
    console.log(product)
  }
  console.log(product)
}
factorial2(5)
