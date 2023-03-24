//Array
const arr = [1, 2, 3];
const arr2 = ["a", "b"];
const arr3 = [["a"], ["b"]];
//Tuples
const tuple = ["a", "b", 10];
//enum
var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["USER"] = 1] = "USER";
})(ROLE || (ROLE = {}));
const role = ROLE.ADMIN;
var STATUS_CODE;
(function (STATUS_CODE) {
    STATUS_CODE[STATUS_CODE["SUCCESS"] = 200] = "SUCCESS";
    STATUS_CODE[STATUS_CODE["CILENT_ERROR"] = 400] = "CILENT_ERROR";
    STATUS_CODE[STATUS_CODE["SERVER_ERROR"] = 401] = "SERVER_ERROR";
})(STATUS_CODE || (STATUS_CODE = {}));
const code = STATUS_CODE.SUCCESS;
const showInfor = (name, age) => {
    if (typeof name == "string") {
        console.log(name.toUpperCase());
    }
};
showInfor("Thanh", "20");
