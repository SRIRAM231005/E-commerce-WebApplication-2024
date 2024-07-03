// product data array
const products = [
    { id: 1, name: "TCL 80.04 cm (32 inches) Bezel-Less S Series HD Ready Smart Android LED TV 32S5400A (Black)",
     price: '35,599', rating: 45, image: 'tlctv1.jpg' },
    { id: 2, name: "Oneplus Nord CE 3 5G (Grey Shimmer, 8GB RAM, 128GB Storage)",
     price: '20,990', rating: 4, image:'onephone.jpg' },
    { id: 3, name: "Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74L (Black)", 
     price: '57,695', rating: 5, image:'sonytv1.jpg' },
    { id: 4, name: "TCL 80.04 cm (32 inches) Bezel-Less S Series HD Ready Smart Android LED TV 32S5400A (Black)",
     price: '35,599', rating: 45, image:'tlctv1.jpg' },
    { id: 5, name: "LG 108 cm (43 inches) 4K Ultra HD Smart LED TV 43UR7500PSC (Dark Iron Gray)",
     price: '47,899', rating: 35, image:'id-5_LGTV.jpg' },
    { id: 6, name: "ZEBRONICS Zeb-Thunder PRO On-Ear Wireless Headphone Up to 60 Hours Playback, Wired Mode, USB-C Type Charging(Black)",
     price: '2,959', rating: 45, image:'headphone.jpg' },
    { id: 7, name: "Lava Blaze 2 5G (Glass Lavender, 6GB RAM, 128GB Storage)| 50 MP AI Camera |5000 mAh Battery| Upto 12 GB Expandable RAM",
     price: '17,699', rating: 5, image:'id-7_Lava.jpg' },
    { id: 8, name: "Canon Powershot SX70 20.3MP Digital Camera 65x Optical Zoom Lens 4K Video 3-inch (7.62cm) LCD Tilt Screen (Black)",
     price: '22,569', rating: 4, image:'id-8_Canon.jpg' },
    { id: 9, name: "GoPro HERO12 UltraHDVideo with AutoBoostWaterproof Sports and Action Camera  (Black, 27 MP)",
     price: '8,499', rating: 45, image:'id-9_Gopro.jpg' },
    { id: 10, name: "boAt Nirvana 751 Active Noise Cancelling Bluetooth Wireless Over Ear Headphones with Up to 65H Playtime, Ambient Sound Mode,(Silver Sterling)",
     price: '1,479', rating: 4, image:'id-10_boat.jpg' },
    { id: 11, name: "Sony MHC-V13 High-Power Party Speaker with Bluetooth connectivity (Jet bass Booster,Mic/Guitar, USB, CD, Music Center app)",
     price: '10,299', rating: 35, image:'id-11_sonyspe.jpg' },
    { id: 12, name: "Zebronics BT4440RUCF 4.1 Channel Multimedia Speakers",
     price: '20,699', rating: 5, image:'id-12_boatspe.jpg' } 
];

let quty;
let count = JSON.parse(localStorage.getItem("count")) || '0';

var popup = document.getElementById('popup');
var popupButton = document.querySelector('.see1');

 function Popup() {
    popup.classList.add('show');
    setTimeout(function() {
         popup.classList.remove('show');
    }, 3000); // Adjust the delay (in milliseconds) as per your requirement
}

function CartCount(){
    Count = localStorage.getItem("count");
    document.querySelector('.spanTag').innerHTML = `${parseInt(Count)}`;
}

// Using lunr.js to make Search Engine
// Create Lunr index
const index = lunr(function () {
    this.ref('id');
    this.field('name');
    this.field('price');
    this.field('rating');
    this.field('image');

    products.forEach(function (product) {
        this.add(product);
    }, this);
});

// Function to perform search
function search(query) {
    /*const query = document.querySelector('.search').value;*/
    document.querySelector('.category-js').innerHTML = `${query}`;
    const results = index.search(query);
    const searchResultsElement = document.getElementById('searchResults');

    searchResultsElement.innerHTML = '';

    if (results.length > 0) {
        results.forEach(function (result) {
            const product = products.find(p => p.id === parseInt(result.ref));
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <div class="pro">
                    <div class="img">
                        <img src="${product.image}" style="width: 200px; height: 170px; object-fit: contain;">
                    </div>
                    <div class="details">
                        <div class="data">${product.name}</div>
                        <div><img src="rate-${product.rating}.png" class="rateimg"></div>
                        <div class="pricedata">₹${product.price}</div>
                        <div class="quantitydata"><p style="color: black; font-size:larger;display: inline-block;">Quantity:</p><select class="id_${product.id}" onchange=" quty =  document.querySelector('.id_${product.id}').value">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select></div>
                        <div><button class="addb" data-product-name="${product.name}" data-product-price="${product.price}"  data-product-image="${product.image}">Add To Cart</button></div>
                    </div>
                </div>
            `;
            searchResultsElement.appendChild(productElement);
            quty = 1;
        });
    } else {
        searchResultsElement.innerHTML = '<p>No matching products found.</p>';
    }
    
  

    document.querySelectorAll('.addb').forEach((button) => {
        button.addEventListener('click', () => {
            count = parseInt(count) + parseInt(quty);
            localStorage.setItem("count", JSON.stringify(count));
            CartCount(); // function to count total nume of Products Added to Cart
            Popup();  // funtion to display popup of Added to Cart
            const pro = button.dataset.productName;
            const orp = button.dataset.productPrice;
            const op = button.dataset.productImage;
            let numb = 0;
            Cart.forEach((duct) => {
                if (duct.proName === pro) {
                    numb = 1;
                }
            });
            if (numb === 0) {
                Cart.push({       // Adding products to cart array
                    proName: pro,
                    proPrice: orp,
                    proImage: op,
                    proQuantity: quty 
                });
                localStorage.setItem("Cart", JSON.stringify(Cart));
                quty = 1;
            }
            console.log('Cart after adding product:', Cart); // Log Cart after adding product
        });
    });
    
}



