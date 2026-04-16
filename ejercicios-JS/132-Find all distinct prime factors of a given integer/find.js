function prime_factors(num) {
  function is_prime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++)
    {
      if (num % i === 0) return false;
    }
    return true;
  }
  var result = [];
  for (var i = 2; i <= num; i++)
  {
    while (is_prime(i) && num % i === 0) 
    {
      if (result.indexOf(i) == -1) result.push(i);
      num /= i;
    }
  }
  return result;
}
console.log(prime_factors(100));
console.log(prime_factors(101));
console.log(prime_factors(103));
console.log(prime_factors(104));
console.log(prime_factors(105));