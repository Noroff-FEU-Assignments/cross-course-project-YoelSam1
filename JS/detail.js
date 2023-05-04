const detailContainer = document.querySelector(".product-details");

const querystring = document.location.search;

const params = new URLSearchParams (querystring);

const id= params.get ("id")

console.log(id);

const url = "https://api.noroff.dev/api/v1/rainy-days/" + id;

async function fetchGame() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);
      
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
    
}

fetchGame();

function createHtml(details) {
    detailContainer.innerHTML = `<div class="product">
            

    <a href="Jacketspecificpage.html?id=${products.id}" class="img"><img src="${response[i].image}" alt="" class="product-img" /></a>
    
    <div class="product-content">
    <h2 class="product-title">${
      title.lenght > 18 ? title.substring(0, 18).concat("  ...") : title
    }</h2>
    <p class="product-sizes">Size - ${response[i].sizes}</p>
    <div class="product-price-container">
        <h3 class="product-price">$ ${response[i].price}</h3>
        <a href="#!" data-productId="${
          response[i].id
        }" class="add-to-cart"><ion-icon name="cart-outline"></ion-icon></a>
    </div>
    </div>
</div>`;