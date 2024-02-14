const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    if (1) {
       resolve([1,2,3,4]);}
    // 
     else {
      reject("error");
    }
  });
  
  // myPromise.then(result => {
  //  console.log(result);
  // }).catch(error => {
  //   console.log(error);
  // });
   const func =async()=>{
    try{
    var a = await myPromise
    console.log(a);}
    catch{
        console.log("again a erro");
    }
   }
  //  func()

 const TryCatch = (func) => (req, res, next) => {
    return func(req, res, next).catch(next);
};
const fun1 = async(req, res, next)=>{
    //  myPromise.then((res)=>console.log(res)).catch((error)=>console.log(error))
    try{ 
    var a=await myPromise
  console.log(a);
  }
    catch{
      next("error")
    }
     next()
}
// fun1(5,6,()=>{
//   console.log("next is called");
// })

TryCatch(fun1(5, 6, ()=>{
  console.log("next is called");
}))
  