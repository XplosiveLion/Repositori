function is_permutation(input_arr, n) {
    for (var i = 0; i < n; i++) {
        if (input_arr.indexOf(i + 1) < 0) 
          return false;
    }
    return true;
}
console.log(is_permutation([1, 2, 3, 4, 5], 5));
console.log(is_permutation([1, 2, 3, 5], 5));