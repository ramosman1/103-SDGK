// product name, price and quantity
// save information in variables
let productName = prompt("Please enter product");
let price = parseFloat(prompt("Price"));
let  quantity = Number(prompt("Quantity"));

// display in console: sub-total, final price
let subTotal = quantity * price;
let finalPrice = subTotal * .05 + subTotal;
let tax = .05;
subTotal = parseFloat(subTotal).toFixed(2);
finalPrice = p(finalPrice).toFixed(2)

// functions: price calculation, tax cal and display info
document.writeln('
    <div>
     <p> Product: $ {productName} </p>
     <p> subTotal: $ {subTotal} </p>
     <p> Tax: ${tax}% </p>
     <p> finalPrice: ${finalPrice} </p>
    </div>

')

console.log(productName + "Subtotal:" + subTotal + "  Tax:" + tax + " FinalPrice: " + finalPrice);



// display results in HTML


