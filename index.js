


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
});

function readMoreCaribbean() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if(dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function readMoreTaco() {
    var dots1 = document.getElementById("dots1");
    var moreText1 = document.getElementById("more1");
    var btnText1 = document.getElementById("myBtn1");

    if(dots1.style.display === "none") {
        dots1.style.display = "inline";
        btnText1.innerHTML = "Read more";
        moreText1.style.display = "none";
    } else {
        dots1.style.display = "none";
        btnText1.innerHTML = "Read less";
        moreText1.style.display = "inline";
    }
}

function readMoreGeneral() {
    var dots2 = document.getElementById("dots2");
    var moreText2 = document.getElementById("more2");
    var btnText2 = document.getElementById("myBtn2");

    if(dots2.style.display === "none") {
        dots2.style.display = "inline";
        btnText2.innerHTML = "Read more";
        moreText2.style.display = "none";
    } else {
        dots2.style.display = "none";
        btnText2.innerHTML = "Read less";
        moreText2.style.display = "inline";
    }
}

function readMoreRedHot() {
    var dots3 = document.getElementById("dots3");
    var moreText3 = document.getElementById("more3");
    var btnText3 = document.getElementById("myBtn3");

    if(dots3.style.display === "none") {
        dots3.style.display = "inline";
        btnText3.innerHTML = "Read more";
        moreText3.style.display = "none";
    } else {
        dots3.style.display = "none";
        btnText3.innerHTML = "Read less";
        moreText3.style.display = "inline";
    }
}





const productList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let products = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase()
    const filteredProducts = products.filter(db =>{
        return db.name.toLowerCase().includes(searchString)
});
    displayProducts(filteredProducts);
});



const loadProducts = () =>{
    products = db;
    displayProducts(products);
    console.log(displayProducts);
}


const displayProducts = (products) => {
    const htmlString = products.map((db) => {
    
    return `
        <div class="grid-item"> 
            <img src = "${db.img}">
            <h1>${db.name}</h1>
            <p>${db.info}</p>
            ${db.button}

        </div>
    `;
    })
    .join('');
    productList.innerHTML = htmlString;
}
loadProducts();


























/* 
let products = pl;

const displayProducts = (products) => {
    const products = pl[i];
    const htmlString = products.map((products) => {
        return `
        <li class>
        </li>
        `;
    })
}
let gridPrintOut = document.querySelector(".grid-container");

getGridOutput();
function getGridOutput() {
let productList = ``;
  for (let i = 0; i < pl.length; i++) {
    const product = pl[i];

    productList += `
        <div class = "grid-item">
        <img src="${product.img}">
        <h1>${product.name}</h1>
        <a href="demo" " class="btn btn-primary" data-bs-toggle="collapse">More Info</a>
        <div id="demo" class="collapse">${product.info}</div>
        </div>

        `;
  }
  gridPrintOut.innerHTML = productList;
    console.log(productList);
} */
