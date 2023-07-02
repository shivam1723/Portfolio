let stock={
    Fruits:["strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
  holder:["cone","cup","stick"],
  toppings:["chocolate","peanuts"]
  };
  
  let is_shop_open=true;
  
  let order= (time,work)=>{
    return new Promise((resolve,reject)=>{
      if(is_shop_open){
        setTimeout(()=>{},time);
        resolve(work());
      }
      else{
        reject(console.log("our shop is closed"));
      }
    })
  }
  
  
  order(2000,()=>console.log(`${stock.Fruits[0]} was selected`))
  
  .then(()=>{
    return order(0000,()=>{
      console.log("production has started")
    })
  })
  
  .then(()=>{
    return order(2000,()=>console.log("the fruit was chopped"));
  })
  
  .then(()=>{
    return order(1000,()=>console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added`))
  })
  
  .then(()=>{
    return order(1000,()=>console.log("start the machine"))
  })
  
  .then(()=>{
    return order(2000,()=>console.log(`ice cream was placed on ${stock.holder[0]}`))
  })
  
  .then(()=>{
    return order(3000,()=>console.log(`${stock.toppings[0]} was added as toppings`))
  })
  .then(()=>{
    return order(1000,()=>console.log("serve the icecream"))
  })
  
  