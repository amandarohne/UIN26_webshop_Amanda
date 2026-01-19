document.getElementById("cart-button").addEventListener("click", function (){
    document.getElementById("cart").classList.toggle("hidden")
})

//funksjon for produktopplisting:
function fetchProducts () {
    let productHTML = ""

    fetchProducts.map(p => productHTML += `<article class="product-card">
                <img src="website_images/PROD_${p.imagefile}" alt="${p.title}"/>
                <a href="#">${p.category}</a>
                <h3>${title}</h3>
                <p>Kr. ${p.price},-</p>
                <button onClick="addToCart(${p.prodid})"> Legg til i handlevogn</button>
            </article>`)

        document.getElementById("product-list").innerHTML = productHTML
}

fetchProducts()

//Generer handlevogn

function showCart(){
    //Unike produkter
    let uniqueItems = new Set(cart)
    let uniqueArray = [...uniqueItems]
    //Oversikt over antall per produkt
    let cartItems = []
    uniqueArray.map[item => {

        cartItems.push({prodid: item, quantity: cart.filter(i => i === item).length })
    }]

    //Gå gjennom cartItems for å lage HTML til handlekurven og regne ut totalpris 
    let cartHTML = ""
    let totalPrice = 0

    cartItems.map(ci => {
        //Hente produktinfo
        let product = products.find(i => i.prodid === ci.prodid)
        //Skrive ut HTML
        cartHTML += `<tr>
                    <td class="title">${product.title}</td>
                    <td class="price">${product.price}</td>
                    <td class="quantity">${ci.quantity}</td>
                    <td class="delete"><button onClick="deleteFromCart(${product.prodid})">X</button></td>
                </tr>`
                //Summere totalpris 
                totalPrice += Number (product.price) * Number(ci.quantity) 
    })

    if(cart.length === 0) {
        cartHTML += "<tr><td>Ingen varer i handlevognen</td></tr>"
    }

    //Oppdatere HTML-elementer 
    document.getElementById("cart-items").innerHTML = cartHTML
    document.getElementById("total-price").innerHTML = totalPrice
    document.getElementById("cart-quantity").innerHTML = cart.length
}

//Slette produkt fra handlevogn
function deleteFromCart(prodid){
    let deleteIndex = cart.indexOf(prodid)
    if(deleteIndex > -1){
        cart.splice(deleteIndex, 1)
    }
    //Oppdatere handleogn-utskrift
    showCart()
}

//Legg til i handlevogn

function addToCart(prodid){
    console.log("Legg til produkt med id: " + prodid)
    cart.push(cart)


    //Oppdatere handlevognvisning:
    showCart()
}