//union type
//type of
function printInfo(info:number|string) {
    if (typeof info === "string") {
        return info.charAt(0).toUpperCase() + info.slice();
    }
    return info
}
console.log(printInfo("Thanh"));
//
function check(sinhvien?:{name:string,grade:number}) {
    if (!!sinhvien) {
        return sinhvien.name
    }
}

// Union type (in)
interface User {
    // union type
    id: string | number,
    username: string,
    password: string,
    email: string,
}

interface Admin extends User {
    id: string,
    is_admin: boolean,
    level: LEVEL.MANAGER | LEVEL.STAFF
}

function login(user:User|Admin) {
    if ("is_admin" in user && user.is_admin === true) {
        return console.log("Welcome to admin");
    }else{
        return console.log("Welcome to back");
        
    }
}