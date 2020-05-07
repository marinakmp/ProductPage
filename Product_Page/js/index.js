let adder = document.getElementById("text").value;
const increase = () => {    //it increases the amount of products by 1
    if(adder<0){
        adder=0;
    }
    adder++;
    document.getElementById("text").value = adder;
};

const decrease = () => { //it decreases the amount of products by 1
    adder--;
    let x = document.getElementById("text").value;
    if(adder < 0){
        x = 0;
    }else {
        x = adder;
    }
};

document.getElementById("min").addEventListener("click",decrease);
document.getElementById("add").addEventListener("click",increase);

document.getElementById("heart").value = "ADD TO WISHLIST";
const Wish = () => { // changes color to the heart and alerts a message (add/remove from wishlist)
    let x = document.getElementById("heart");
    let y = document.getElementById("wishlist");
    console.log(x.value);
    if(x.value === "ADD TO WISHLIST"){
        x.value = "REMOVE FROM WISHLIST";
        y.innerText = "REMOVE FROM WISHLIST";
    }else{
        x.value = "ADD TO WISHLIST";
        y.innerText = "ADD TO WISHLIST";
    }
};

document.getElementById("heart").addEventListener("click", Wish);

const Shop = () => { //it alerts a message if the product has been added to cart but only if it has a right size
    let x = document.getElementById("size");
    if(x.value === "0"){
        document.getElementById("add-size").classList.remove("d-none");
    }else{
        document.getElementById("cart").innerHTML= "Add to Cart <i class=\"fa fa-exclamation-circle\"></i>";
        document.getElementById("added-to-cart").classList.remove("d-none");
    }
};


document.getElementById("cart").addEventListener("click",Shop);


