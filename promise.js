const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    if (0) {
       resolve([1,2,3,4]);}
    // 
     else {
      reject("error");
    }
  });
  
  myPromise.then(result => {
   console.log(result);
  }).catch(error => {
    console.log(error);
  });
   const func =async()=>{
    try{
    var a = await myPromise
    console.log(a);}
    catch{
        console.log("again a erro");
    }
   }
   func()
  