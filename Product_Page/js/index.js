if(screen.width>992){ //depends on the screen it displays another structure of the images
    document.getElementById("carouselExampleIndicators").style.display = "none";
    document.getElementById("seq").style.display = "block";
    document.getElementById("fixed-to-top").style.position = "fixed";
    document.getElementById("fixed-to-top").style.top = "2%";
    document.getElementById("fixed-to-top").style.right = "0";
    document.getElementById("fixed-to-top").style.zIndex = "1";


}else{
    document.getElementById("carouselExampleIndicators").style.display = "block";
    document.getElementById("seq").style.display = "none";
}

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
    if(adder < 0){
        document.getElementById("text").value = 0;
    }else {
        document.getElementById("text").value = adder;
    }

};

document.getElementById("min").addEventListener("click",decrease);
document.getElementById("add").addEventListener("click",increase);

const ProductDescription = () => { // it makes visible/hidden the paragraph of the description
    let x = document.getElementById("p-desc");
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.marginTop = "3%";
        document.getElementById("desc").innerHTML = "- Description";
    } else {
        x.style.display = "none";
        document.getElementById("desc").innerHTML = "+ Description";
    }

};

document.getElementById("desc").addEventListener("click", ProductDescription);

const ProductFeatures = () => { // it makes visible/hidden the paragraph of Features
    let x = document.getElementById("p-fa");
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.marginTop = "3%";
        document.getElementById("fa").innerHTML = "- Features";
    } else {
        x.style.display = "none";
        document.getElementById("fa").innerHTML = "+ Features";
    }

};

document.getElementById("fa").addEventListener("click", ProductFeatures);

const ProductShipping = () => { // it makes visible/hidden the paragraph of shipping
    let x = document.getElementById("p-ship");
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.marginTop = "3%";
        document.getElementById("shipping").innerHTML = "- Shipping and Returns";
    } else {
        x.style.display = "none";
        document.getElementById("shipping").innerHTML = "+ Shipping and Returns";
    }

};

document.getElementById("shipping").addEventListener("click", ProductShipping);

document.getElementById("heart").style.color = "rgb(0, 123, 255)";
const Wish = () => { // changes color to the heart and alerts a message (add/remove from wishlist)
    let x = document.getElementById("heart");
    console.log(x.style.color);
    if(x.style.color === "rgb(0, 123, 255)"){
        x.style.color = "rgb(0, 39, 82)";
        alert("You have successfully added the product to your wishlist!");
    }else{
        x.style.color = "#007bff";
        alert("You have successfully removed the product from your wishlist!")
    }
};

document.getElementById("heart").addEventListener("click", Wish);

const Shop = () => { //it alerts a message if the product has been added to cart but only if it has a right size
    let x = document.getElementById("size");
    if(x.value === "select_size"){
        alert("Please select a size!");
    }else{
        document.getElementById("cart").innerHTML= "Add to Cart <i class=\"fa fa-exclamation-circle\"></i>";
        alert("The product have been added to your Cart!");

    }
};

document.getElementById("cart").addEventListener("click",Shop);

document.getElementById("fixed").scrollTop = 0 ;


