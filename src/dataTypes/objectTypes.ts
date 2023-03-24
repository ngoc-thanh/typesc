//Array
const arr:Array<number>=[1,2,3]
const arr2:Array<string>=["a","b"]
const arr3:Array<Array<string>>=[["a"],["b"]]
//Tuples
const tuple: [string,string,number]=["a","b",10]
//enum
enum ROLE{ADMIN,USER}
const role:ROLE=ROLE.ADMIN
enum STATUS_CODE{SUCCESS=200,CILENT_ERROR=400,SERVER_ERROR}
const code=STATUS_CODE.SUCCESS

const showInfor =(name:string|number,age:string|number)=>{
    if (typeof name == "string") {
        console.log(name.toUpperCase());
        
    }
}
showInfor("Thanh","20");