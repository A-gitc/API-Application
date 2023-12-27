//import product from "products.json"
// console.log(product)
console.log("123");
 fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>console.log(json))


 async function GetAllMovies(){
    console.log("hello")
   const response = await fetch('https://fakestoreapi.com/products');
    console.log("hello")
   const data = await response.json(); //errors
   
   
   console.log(data);
   for(let i=0; i<data.length ; i++){
       console.log(data[i])
   }


 }
 GetAllMovies();
