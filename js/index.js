// it increases the amount of products by 1
const increase = () => {
    let adder = document.getElementById("text").value;
    if(adder<0){
        adder=0;
    }
    adder++;
    document.getElementById("text").value = adder;
};

//it decreases the amount of products by 1
const decrease = () => {
    let adder = document.getElementById("text").value;
    adder--;
    if(adder < 0){
        adder = 0;
    }else {
        document.getElementById("text").value = adder;
    }
};

document.getElementById("min").addEventListener("click",decrease);
document.getElementById("add").addEventListener("click",increase);

// Wishlist
const wishlist_btn = document.getElementById("wishlistBtn");
const wishlist_label = wishlist_btn.querySelector("#wishlistLabel");

// changes color to the heart and alerts a message (add/remove from wishlist)
// TODO Differentiate text labels and values for logic
const Wish = () => {
    if (wishlist_btn.value === "ADD TO WISHLIST"){ // e.g. add
        wishlist_btn.value = "REMOVE FROM WISHLIST"; // e.g. remove
        wishlist_label.innerText = "REMOVE FROM WISHLIST";
    } else {
        wishlist_btn.value = "ADD TO WISHLIST";
        wishlist_label.innerText = "ADD TO WISHLIST";
    }
};

wishlist_btn.addEventListener("click", Wish);

const Shop = (event) => { //it alerts a message if the product has been added to cart but only if it has a right size
    let x = document.getElementById("size");
    if(x.value === "0"){
        document.getElementById("add-size").classList.remove("d-none");
    }else{
        document.getElementById("cart").innerHTML= "Add to Cart <i class=\"fa fa-exclamation-circle\"></i>";
        document.getElementById("added-to-cart").classList.remove("d-none");
    }
    event.preventDefault();
};

document.getElementById("cart").addEventListener("click",Shop);