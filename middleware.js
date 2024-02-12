const myMiddleware=(data, next)=>{
console.log("Data is: " ,data);
next(data);
}
 const func=(data)=>{
 data= data+10;
 console.log("new data is:", data);
 }
 let input = 55;
 myMiddleware(input, (res)=>{
    func(res)
 })