// it increases the amount of products by 1
const increase = () => {
    let adder = document.getElementById("text").value;
    if(adder<1){
        adder=1;
    }
    adder++;
    document.getElementById("text").value = adder;
};

//it decreases the amount of products by 1
const decrease = () => {
    let adder = document.getElementById("text").value;
    adder--;
    if(adder < 1){
        adder = 1;
    }else {
        document.getElementById("text").value = adder;
    }
};

document.getElementById("min").addEventListener("click",decrease);
document.getElementById("add").addEventListener("click",increase);

// Wishlist
const wishlist_btn = document.getElementById("wishlistBtn");

// changes color to the heart and alerts a message (add/remove from wishlist)
// TODO Differentiate text labels and values for logic
const Wish = (qualifiedName, value) => {
    if (wishlist_btn.value === "ADD TO WISHLIST"){ // e.g. add
        wishlist_btn.value = "REMOVE FROM WISHLIST"; // e.g. remove
        wishlist_btn.innerText = wishlist_btn.value;
        wishlist_btn.setAttribute("data-wishlist", true);
    } else {
        wishlist_btn.value = "ADD TO WISHLIST";
        wishlist_btn.innerText = wishlist_btn.value;
        wishlist_btn.setAttribute("data-wishlist", false);
    }
};

wishlist_btn.addEventListener("click", Wish);

const Shop = (event) => { //it alerts a message if the product has been added to cart but only if it has a right size
    let value = document.getElementById("size").value;
    if ('content' in document.createElement('template')) {
        let template = document.querySelector('#alert');
        let temp = document.querySelector('#temp');
        if(value === "0"){
            let clone = template.content.cloneNode(true);
            let p = clone.querySelectorAll("#paragraph");
            p[0].textContent = "Please select a size!";
            temp.appendChild(clone);
        } else {
            let clone2 = template.content.cloneNode(true);
            let p = clone2.querySelectorAll("#paragraph");
            p[0].textContent = "The product added successfully to your cart!";
            temp.appendChild(clone2);
        }
    }
    event.preventDefault();
};

document.getElementById("cart").addEventListener("click",Shop);