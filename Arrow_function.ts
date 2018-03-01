var ex1 = (firstName:string,lastName:string) =>{
    return "My name is "+firstName + lastName;
}
var ex2 = fullname =>{
    return "My full name is "+fullname;
}
var ex3 = fullname =>
    "My fullname is "+ fullname;
var ex4 = () =>{
    return "This is function no parameter";
}
console.log("Ví dụ 1 : "+ ex1("Thanh","Nguyễn") + "Ví dụ 2 : "+ex2("Nguyễn Văn Thanh") +"Ví dụ 3 :"+ex3("Nguyễn Văn Thanh") +"Ví dụ 4 " + ex4())
