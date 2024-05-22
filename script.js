//cart Items Object
function CartItems(productID, price, quantity, shipping) {
    this.productID = productID,
    this.price = price,
    this.quantity = quantity,
    this.shipping = shipping
}

//product object
function Products(productID, productName, price, quantity,shippingCost,reviews, max, category, image,description) {
    this.productID = productID,
    this.productName = productName,
    this.price = price,
    this.quantity = quantity,
    this.max = max,
    this.shippingCost = shippingCost,
    this.reviews = reviews,
    this.category = category,
    this.image = image,
    this.description = description
}
//reviews object
function Reviews(review,rating) {
    this.review = review;
    this.rating = rating;
}

let product1 = new Products("PID01","Nike Air Max 90", 125.99, 20,12.99,[], 3, "trainers", "sportshoe1.png","The Nike Air Max 90 combines retro style with modern comfort. Featuring a durable upper and visible Air cushioning, these trainers provide all-day support and cushioning for your feet.");
let product2 = new Products("PID02","Adidas Ultraboost", 149.99, 15,9.99,[], 4, "trainers", "sportshoe2.png","Experience unparalleled energy return with the Adidas Ultraboost. Its responsive Boost midsole technology offers a plush ride, while the Primeknit upper ensures a snug and adaptive fit.");
let product3 = new Products("PID03","Puma Future Rider", 99.99, 25,14.99,[], 5, "trainers", "sportshoe3.png","Make a statement with the Puma Future Rider. These trainers boast a retro-inspired design with modern comfort features, including a lightweight construction and cushioned midsole for all-day wear.");
let product4 = new Products("PID04","New Balance 1080", 159.99, 10,11.99,[], 4, "trainers", "sportshoe4.png","Elevate your running experience with the New Balance Fresh Foam 1080. Designed with plush Fresh Foam cushioning, these trainers deliver unmatched comfort and support mile after mile.");
let product5 = new Products("PID05","Asics Gel-Kayano", 179.99, 8,10.99,[], 4, "trainers", "sportshoe5.png","Stay supported and comfortable on your runs with the Asics Gel-Kayano 27. Engineered for stability and cushioning, these trainers feature Gel technology to absorb shock and reduce the risk of injury.");
let product6 = new Products("PID06","Reebok Nano X", 129.99, 18,13.99,[], 4, "trainers", "sportshoe6.png","Take your training to the next level with the Reebok Nano X. These trainers are engineered for high-intensity workouts, offering durability, responsive cushioning, and a secure fit to support dynamic movements and exercises.");
let product7 = new Products("PID07","Under Armour ", 139.99, 22,12.49,[], 4, "trainers", "balenciaga.png","Experience unparalleled comfort and performance with the Under Armour HOVR Phantom 2. Featuring UA's HOVR cushioning technology, these trainers provide a responsive ride and optimal energy return for both running and everyday activities.");
let officeShoe1 = new Products("PID08","Cole Haan", 149.99, 30,10.99,[], 4, "officeShoe", "officeShoe1.png","Elevate your office attire with the Cole Haan Original Grand Wingtip. Crafted with premium leather and featuring classic brogue detailing, these shoes offer sophistication and comfort with a lightweight, cushioned sole.");
let officeShoe2 = new Products("PID09","Allen Edmonds ", 395.00, 12,15.99,[], 5, "officeShoe", "officeShoe2.png","Make a lasting impression with the Allen Edmonds Park Avenue. Handcrafted in the USA, these shoes exude timeless elegance and quality craftsmanship, perfect for formal meetings or special occasions.");
let officeShoe3 = new Products("PID10","Clarks Tilden ", 79.99, 25,9.99,[], 4, "officeShoe", "officeShoeBlue.png","Stay comfortable all day in the Clarks Tilden Cap Oxford. Featuring a sleek, polished design and OrthoLite footbed, these shoes provide support and cushioning for long hours at the office.");
let officeShoe4 = new Products("PID11","ECCO Melbourne", 169.95, 18,11.49,[], 4, "officeShoe", "officeShoeGreen.png","Experience Scandinavian design and comfort with the ECCO Melbourne Oxford. Crafted from premium leather and featuring ECCO's Fluidform technology, these shoes offer a perfect blend of style and functionality for the modern workplace.");
let crocsShoe1 = new Products("PID12","Crocs Classic Clog", 49.99, 40,7.99,[], 4, "crocs", "crocs1.png","Experience iconic comfort with the Crocs Classic Clog. Featuring a lightweight, durable design and signature Croslite foam cushioning, these clogs are perfect for all-day wear, whether at home or on the go.");
let crocsShoe2 = new Products("PID13","Crocs Swiftwater Sandal", 39.99, 35,6.99,[], 4, "crocs", "crocs2.png","Stay cool and comfortable in the Crocs Swiftwater Sandal. Designed for water activities and outdoor adventures, these sandals feature adjustable straps and Croslite foam cushioning for a secure fit and supportive feel.");
let crocsShoe3 = new Products("PID14","Crocs Baya Flip", 29.99, 50,5.99,[], 4, "crocs", "crocs3.png","Enjoy easygoing style with the Crocs Baya Flip. With its lightweight construction and Croslite foam cushioning, these flip flops offer all-day comfort and support, whether you're lounging by the pool or running errands.");
let crocsShoe4 = new Products("PID15","Crocs Literide Clog", 54.99, 25,8.49,[], 4, "crocs", "crocs4.png","Experience next-level comfort with the Crocs Literide Clog. Featuring revolutionary LiteRide foam technology, these clogs offer superior cushioning and bounce-back with every step, making them perfect for active lifestyles.");
let crocsShoe5 = new Products("PID16","Crocs Bae Clog", 59.99, 20,9.99,[], 4, "crocs", "crcocsChild.png","Step up your style game with the Crocs Classic Bae Platform Clog. With its elevated platform sole and classic clog design, these shoes combine fashion and comfort for a bold statement look.");







const usdExchangeRate = 1.00;
const cadExchangeRate = 1.36;
const ngrExchangeRate = 1416.13;

let productsArray = [];
let cartArray = [];



//default selected currency
let selectedcurr ="canada";
//default category all
let selectedCategory = "All";

//function to get current date
function getCurrentDateTime() {
    const options = {
      weekday: 'short',
      month: 'short',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'long'
    };
    const now = new Date();
    return now.toLocaleString('en-US', options);
  }
  getCurrentDateTime()
  
  document.getElementById('dateTime').textContent = getCurrentDateTime();

  //adding the products ro the products array
  productsArray.push(product1,officeShoe1,crocsShoe5,product2,product3,officeShoe2,crocsShoe4,product4,product5,crocsShoe3,product6,officeShoe4,crocsShoe2,product7,officeShoe3,crocsShoe1)
 
//display product function
//displays the products to the webpage
function displayProducts(theProductArray) {
    let productCard = document.getElementById("cardID")
    productCard.innerHTML = ""

    //loops through the the array assigned to display the products in the array passed as parameter
    for (let index = 0; index < theProductArray.length; index++) {
        let product = theProductArray[index];
        

        productCard.innerHTML += `<div class="card"><div class="card-ID" >
        <h3 id="productID">#${product.productID}</h3>
        </div>
        <div class="card-img" id="productIMG">
            <img src="./images/${product.image}" alt="" width="100%" id="cart-image">
        </div>
        <div class="card-details">
                <div>
                    <h3 id="productName">${product.productName}</h3>
                    <h4 id="productCategory">${product.category}</h4>
                    <h4 style="padding-top: 10px;" id="productQuantity">Quantity : ${product.quantity}</h4>
                </div>
                <div>
                    <h3 id="productPrice">${globalCurrencyConvert(product.price)}</h3>
                    <h4 id="productMax">Max:${product.max}</h4>
                </div>
        </div></div>`

        
    }

}
//calls the "displayproducts function onload with the products array as parameter"
displayProducts(productsArray)


//function to convert currency when the currency is chosen from the currency selection 
//also assigns a new value based on the currency selected to the global currency variable
function currencyConverter() {
    let selectedCurrency = document.getElementById("currency").value;
    let productPrice = document.getElementById("productPrice");
        

    if (selectedCurrency === "canada") {
        selectedcurr = "canada";
        displayProducts(categorySorter());
    }
    else if (selectedCurrency === "america") {
        selectedcurr = "america";
        displayProducts(categorySorter());
    }
    else if (selectedCurrency === "nigeria") {
        selectedcurr = "nigeria";
        displayProducts(categorySorter());
    }
}// end of function 

//helper function that converts the price passed as parameter
//based on the currency previously selected in the currency selection
function globalCurrencyConvert(price) {
    let newPrice = price;
    let displaynewprice;
    
    //format the price passed into the function as parameter based on what the selectedCurr is 
    if (selectedcurr == "nigeria") {
        newPrice = (price * ngrExchangeRate).toFixed(2);
        displaynewprice = `#${newPrice}`
    }
    else if (selectedcurr == "canada") {
        newPrice = (price * cadExchangeRate).toFixed(2);
        displaynewprice = `$${newPrice}(CAD)`
    }else if (selectedcurr == "america") {
        newPrice = (price * usdExchangeRate).toFixed(2);
        displaynewprice = `$${newPrice}(USD)`
    }else{
        newPrice = (price * usdExchangeRate).toFixed(2);
        displaynewprice = `$${newPrice}(USD)`
    }

    return displaynewprice;
}//end of function 



//displays the products in the category chosen in the selection
//returns an an array containing the categoory that was selected
function categorySorter() {
    let categorySorts = document.getElementById("category").value;
    if (categorySorts == "all") {
        displayProducts(productsArray)
        return productsArray
    }
    else if (categorySorts == "trainers") {
        let trainersArray = [];
        for (let index = 0; index < productsArray.length; index++) {
            if (productsArray[index].category == "trainers") {
                trainersArray.push(productsArray[index])
            }
            
        }
        displayProducts(trainersArray)
        return trainersArray
    }
    else if (categorySorts == "officeShoe") {
        let officeShoesArray = [];
        for (let index = 0; index < productsArray.length; index++) {
            if (productsArray[index].category == "officeShoe") {
                officeShoesArray.push(productsArray[index])
            }
            
        }
        displayProducts(officeShoesArray)
        return officeShoesArray
        
    }
    else if (categorySorts == "crocs") {
        let crocsArray = [];
        for (let index = 0; index < productsArray.length; index++) {
            if (productsArray[index].category == "crocs") {
                crocsArray.push(productsArray[index])
            }
            
        }
        displayProducts(crocsArray)
        return crocsArray;
        
    }
}//end of function


// let counter = 0;
//displays the products in the cart array function to the webpage
function cartDisplay() {
    
    let cartParent = document.getElementById("cartDetails");
    let summaryText = document.getElementById("summary")

    //clears the cart array div when there is no product in the cart array
    //alerts there is no item in the cart array
    if (cartArray.length == 0) {  
        cartParent.innerHTML = "";
        alert("no item in cart")
    }else{
        cartParent.innerHTML  = "";
            for (let index = 0; index < cartArray.length; index++) {
            //calculates the subtotal of the product
            let itemSubtotal = (cartArray[index].price * cartArray[index].quantity).toFixed(2);
            cartParent.innerHTML += `<div class="cart-details" style="margin-bottom:10px"><h3><span style="font-weight: bold;">${index+1} ${cartArray[index].productID}</span></h3>
            <div class="right-cart-content">
                <div>
                    <h3 ><span style="font-weight: bold;">price:</span> ${globalCurrencyConvert(cartArray[index].price)}</h3>
                    <h3><span style="font-weight: bold;">subtotal:</span> ${globalCurrencyConvert(itemSubtotal)}</h3>
                </div>
                <div>
                    <h3 id="customerQuantity"><span style="font-weight: bold;" >Quantity:</span> ${cartArray[index].quantity}</h3>
                </div>
                </div>
            </div>`
            }  
        
    }
    // counter++
}//end of function
// counter = 0;

//calculates and displays the total amount of price in the cart
//using the reduce method for arrays.
function cartTotal() {
    let SUBTOTAL = 0;
    let ESTSHIPPING = 0;
    let OVERALLSUBTOTAL = 0;
    let TAX = 0;
    let SUBTOTALTOTAL = 0;

    //calculating the subtotal of the price in the cart by using the reduce method
    //for each item in the array multiply its quantity by its price and sum the total
    SUBTOTAL = cartArray.reduce((acc, item) => {
            return acc + (item.quantity * item.price);
    }, 0);
    //sum all the shipping price for each item
    ESTSHIPPING = cartArray.reduce((acc, item) => {
        return acc + parseFloat(item.shipping);
    }, 0);

    OVERALLSUBTOTAL = SUBTOTAL + ESTSHIPPING;

    TAX = 0.13 * OVERALLSUBTOTAL;

    SUBTOTALTOTAL = TAX + OVERALLSUBTOTAL;

    //display the results to their selected divs
    document.getElementById("subtotalSM").innerHTML =  `<span style="font-weight: bold;">Item Subtotal:</span> ${globalCurrencyConvert(SUBTOTAL.toFixed(2))}`;
    document.getElementById("shippingSM").innerHTML = `<span style="font-weight: bold;">Estimated Shipping:</span> ${globalCurrencyConvert(ESTSHIPPING.toFixed(2))}`;
    document.getElementById("overallSubtotal").innerHTML = `<span style="font-weight: bold;">Subtotal: </span>${globalCurrencyConvert(OVERALLSUBTOTAL.toFixed(2))}`;
    document.getElementById("taxSM").innerHTML = `<span style="font-weight: bold;">Estimated Tax:</span> ${globalCurrencyConvert(TAX.toFixed(2))}`;
    document.getElementById("subTotalTotal").innerHTML = `<span style="font-weight: bold; font-size: 23px;">Order Tool: ${globalCurrencyConvert(SUBTOTALTOTAL.toFixed(2))}</span>`
   
}
//adds to product to cart 
//using the find method for arrays; it finds the product using the porduct Id inputed by the user 
//checks if the product is in both the product array and carts array
function addToCart() {
    let customerQty = parseInt(document.getElementById("cartQuantity").value);
    let chosenProductId = document.getElementById("cartProductID").value;

    let existingCartItem = cartArray.find(item => item.productID === chosenProductId);
    let selectedProduct = productsArray.find(product => product.productID === chosenProductId);

    if (document.getElementById("cartProductID").value == "") {
        document.getElementById("IdValidate").innerHTML = "input a product ID";
        document.getElementById("cartProductID").style.backgroundColor= "red"

    }
    else if (document.getElementById("cartQuantity").value == "") {
        document.getElementById("quantityValidate").innerHTML = "Quantity must be greater than zero";
        document.getElementById("cartQuantity").style.backgroundColor = "red";
    }
    else if (!selectedProduct) {
        alert("Product not found!");
        document.getElementById("cartQuantity").style.backgroundColor = "red";
        document.getElementById("IdValidate").innerHTML = "product ID not found"
        document.getElementById("cartProductID").style.backgroundColor= "red"
        return;
    }
    //if product already in the cart array don't create a new object just increase the quantity
    //if quantity is greater than the max quantity don't increase any further
    if (existingCartItem) {
        existingCartItem.quantity += customerQty;
        if (existingCartItem.quantity > selectedProduct.max) {
            existingCartItem.quantity = selectedProduct.max;
            document.getElementById("quantityValidate").innerHTML = `you can only add ${selectedProduct.max} of this item`
        }
    } else {
        let newCartItem = new CartItems(selectedProduct.productID, selectedProduct.price, customerQty, selectedProduct.shippingCost);
        cartArray.push(newCartItem);
        document.getElementById("cartQuantity").style.backgroundColor = "white";
        document.getElementById("IdValidate").innerHTML = "";
        document.getElementById("cartProductID").style.backgroundColor= "white";
        document.getElementById("quantityValidate").innerHTML = "";
    }
    //call updateQuantity function parsing the selected product ID has parameter
    updateProductQuantity(selectedProduct.productID);
    cartDisplay();
    cartTotal()
}//end of function

function updateProductQuantity(productId) {
    //using the reduce method if the product already exists in the cart 
    //get the sum of all the item quantity and assign it to a varaible "updatedQuantity";
    //find the product fro the products array and update the new quantity value;
    let updatedQuantity = cartArray.reduce((acc, item) => {
        if (item.productID === productId) {
            return acc + item.quantity;
        }
        return acc;
    }, 0);

    let productToUpdate = productsArray.find(product => product.productID === productId);
    if (productToUpdate) {
        productToUpdate.quantity -= updatedQuantity;
    }
}//end of function

//function to remove items
//check if them item in the proudct ID input is in the products array
//remove the item from the array and subtract its quantity
function removeItems() {
    let customerQty = parseInt(document.getElementById("cartQuantity").value);
    let chosenProductId = document.getElementById("cartProductID").value;

    let existingCartItem = cartArray.find(item => item.productID === chosenProductId);

    if (!existingCartItem) {
        document.getElementById("IdValidate").innerHTML = "input a product ID";
        document.getElementById("cartProductID").style.backgroundColor= "red";
    }else{
        existingCartItem.quantity -= customerQty;
    }
    //get the index of the item and pop it from the array
    if (existingCartItem.quantity === 0) {
        cartArray.splice(cartArray.indexOf(existingCartItem),1);
    }
    cartDisplay();
    cartTotal();

}//end of function


//function to show the details of the product as a modal
function showDetails() {
    document.getElementById("cartProductID").style.backgroundColor= "white"
    let cartModal = document.getElementById("class-Modal")
    


    let chosenProductId = document.getElementById("cartProductID").value;

    let existingCartItem = productsArray.find(item => item.productID === chosenProductId);
    //validation if the item iputed is not found in the producst array
    if (!existingCartItem) {
        document.getElementById("IdValidate").innerHTML = "product ID not found"
        document.getElementById("cartProductID").style.backgroundColor= "red"
        
    }else{
        //do not show modal if the item does not exist in the array
        cartModal.style.display = "block";
    }

    //update the price, product name and the product description of the selected item to the webpage
    document.getElementById("ModalproductName").innerHTML = `${existingCartItem.productName}`;
    document.getElementById("priceTag").innerHTML = `${globalCurrencyConvert(existingCartItem.price)}`;
    document.querySelector(".product-description").innerHTML = `${existingCartItem.description}`;

    //to display the reviews
    let reviewss = existingCartItem.reviews;
    document.querySelector(".commentHouse").innerHTML = "";
    //update each review to the modal
    reviewss.forEach(review => {    
        document.querySelector(".commentHouse").innerHTML += `<div class="display-comment"><div class="profile"><i class="fa-solid fa-user" style="text-align: center; margin: auto;"></i></div>
        <div id="reviewDescription"><p>${review.review}</p></div></div>`;
    });
    console.log(reviewss)
    
    //take the rating number stored in the review object and 
    //calculate the average of the rating
    let sumRating = (existingCartItem.reviews).reduce((acc, item) => {
            return acc + parseInt(item.rating);
        }, 0)
    
    let averageRating = Math.ceil(sumRating / (existingCartItem.reviews).length);

    //using a for loop display the stars according to the average rating calculated previously
    index = 0;
    let stars = document.querySelectorAll(".fa-star")
    do {
        stars[index].style.color = `rgb(226, 180, 30,1)`
        index++
    } while (index < averageRating);
    
    
}//end of function


//pushes the values gotten from the review section as an object instance to the products array
function reviewDetails() {
    let reviewProductID = document.getElementById("productIDD").value;
    let reviewProductDescription = document.getElementById("productDescription").value;
    let reviewRateNum = document.getElementById("rateNUM").value;

    let newReview = new Reviews(reviewProductDescription,reviewRateNum)

    let ReviewProductItem = productsArray.find(item => item.productID === reviewProductID);

    if (!ReviewProductItem) {
        alert("product not in array")
        document.getElementById("reviewIdValidate").innerHTML = "product not in cart"
        document.getElementById("productIDD").style.backgroundColor = "red";
    }else{
        (ReviewProductItem.reviews).push(newReview);
        document.getElementById("productDescription").value = "";
        document.getElementById("productIDD").value = "";
        document.getElementById("rateNUM").value = "";
        alert("review submitted")

    }
    
}//end of function


//function to close modal 
function closeModal() {
    let cartModal = document.getElementById("class-Modal");
    cartModal.style.display = "none";
}





