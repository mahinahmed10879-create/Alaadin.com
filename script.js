const buttons = document.querySelectorAll(".product-card button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Product Added To Cart!");
    });
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");

    if(window.scrollY > 100){
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";
    }else{
        nav.style.boxShadow = "none";
    }
});
