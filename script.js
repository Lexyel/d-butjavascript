const products = [
  {
    product: "chaise",
    price: 120.50
  },
  {
    product: "table",
    price: 1200.99
  },
  {
    product: "vase",
    price: 420.01
  },
  {
    product: "canape",
    price: 12585.55
  }
]

for(let i= 0; i < products.length; i++){
let product= products[i]
let reduction= function(price,taux){
return (Math.round((products[i].price -(products[i].price*taux/ 100))*100))/100
}
let text = parseFloat(reduction(products[i].price, 25)) + "€"

let element= document.getElementById(products[i].product);
console.log(element)
element.innerText= text.replace(".",",")

}