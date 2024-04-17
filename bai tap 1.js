function tinhPhuongTrinhBacNhat (a,b) {

    if (a == 0 && b != 0) {
        return "phương trình vô nghiệm"
    }
    else if (a == 0 && b == 0) {
        return "phương trình có vô số nghiệm"
    }
    else {
        return "phương trình có nghiệm x là " + -b/a
    }
}
let result = tinhPhuongTrinhBacNhat(5, 3)
console.log(result);
