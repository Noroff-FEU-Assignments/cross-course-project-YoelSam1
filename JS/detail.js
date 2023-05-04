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
    detailContainer.innerHTML = `<h1>${details.name}</h1>
                                <div class="details-image" 
                                    style="background-image: url('${details.background_image}')"></div>
                                <div class="details-description">${details.description}</div>
                                <time class="details-date">Released: ${details.released}</time>`;