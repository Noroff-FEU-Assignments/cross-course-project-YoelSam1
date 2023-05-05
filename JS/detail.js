const detailContainer = document.querySelector(".product-details");

const querystring = document.location.search;

const params = new URLSearchParams (querystring);

const id= params.get ("id")


const url = "https://api.noroff.dev/api/v1/rainy-days/" + id;

async function fetchproducts() {

    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log("details",details);

        createHtml(details);
      
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
    
}

fetchproducts();

function createHtml(details) {
    detailContainer.innerHTML = `

        <div class="product">
            <div class="img-container">
             <img src="${details.image}" alt="" class="product-img" /></a>
            </div>
            
            <div class="product-content">
                <h2 class="product-title">${details.title }</h2>
                <p class="product-sizes">Size - ${details.sizes.join()}</p>
                <p>Description - ${details.description}</p>
                <div class="product-price-container">
                    <h3 class="product-price">$ ${details.price}</h3>
                    <a href="Checkoutpage.html" data-productId="${
                    details.id
                    }" class="add-to-cart"><ion-icon name="cart-outline"></ion-icon></a>
                </div>
            </div>
      </div>
    `

 }