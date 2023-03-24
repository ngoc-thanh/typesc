//union type
//type of
function printInfo(info) {
    if (typeof info === "string") {
        return info.charAt(0).toUpperCase() + info.slice();
    }
    return info;
}
console.log(printInfo("Thanh"));
//
function check(sinhvien) {
    if (!!sinhvien) {
        return sinhvien.name;
    }
}
function login(user) {
    if ("is_admin" in user && user.is_admin === true) {
        return console.log("Welcome to admin");
    }
    else {
        return console.log("Welcome to back");
    }
}
