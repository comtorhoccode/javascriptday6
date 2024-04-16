function average(Toan, Van, Anh) {
    return (Toan + Van + Anh)/3
}
let result = average(9, 8, 9)
console.log(result)

if (result < 5) {
    console.log("Học sinh yếu");
}
else if (result >= 5 && result < 6.5) {
    console.log("Học sinh TB");
}
else if(result >= 6.5 && result <8) {
    console.log("Học sinh Khá");
}
else {
    console.log("Học sinh Giỏi");
}