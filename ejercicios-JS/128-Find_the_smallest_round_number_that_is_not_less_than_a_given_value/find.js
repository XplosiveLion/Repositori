function nearest_round_number(num) {
    while (num % 10) {
        num++;
    }
    return num;
}

console.log(nearest_round_number(56));
console.log(nearest_round_number(592));