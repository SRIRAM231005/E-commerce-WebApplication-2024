// product data array
const products = [
    { id: 1, name: "TCL 80.04 cm (32 inches) Bezel-Less S Series HD Ready Smart Android LED TV 32S5400A (Black)",
     price: '35,599', rating: 45, image: 'Images/tlctv1.jpg' },
    { id: 2, name: "Oneplus Nord CE 3 5G (Grey Shimmer, 8GB RAM, 128GB Storage)",
     price: '20,990', rating: 4, image:'Images/onephone.jpg' },
    { id: 3, name: "Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart LED Google TV KD-65X74L (Black)", 
     price: '57,695', rating: 5, image:'Images/sonytv1.jpg' },
    { id: 4, name: "EvoFox Blaze Programmable Gaming Mouse with 500Hz Polling Rate |Gaming Grade Sensitive DPI Upto 12800 | RGBlights |",
     price: '1,599', rating: 45, image:'Images/id-4_pro.jpg' },
    { id: 5, name: "LG 108 cm (43 inches) 4K Ultra HD Smart LED TV 43UR7500PSC (Dark Iron Gray)",
     price: '47,899', rating: 35, image:'Images/id-5_LGTV.jpg' },
    { id: 6, name: "ZEBRONICS Zeb-Thunder PRO On-Ear Wireless Headphone Up to 60 Hours Playback, Wired Mode, USB-C Type Charging(Black)",
     price: '2,959', rating: 45, image:'Images/headphone.jpg' },
    { id: 7, name: "Lava Blaze 2 5G (Glass Lavender, 6GB RAM, 128GB Storage mobile)| 50 MP AI Phone |5000 mAh Battery| Upto 12 GB Expandable RAM",
     price: '17,699', rating: 5, image:'Images/id-7_Lava.jpg' },
    { id: 8, name: "Canon Powershot SX70 20.3MP Digital Camera 65x Optical Zoom Lens 4K Video 3-inch (7.62cm) LCD Tilt Screen (Black)",
     price: '22,569', rating: 4, image:'Images/id-8_Canon.jpg' },
    { id: 9, name: "GoPro HERO12 UltraHDVideo with AutoBoostWaterproof Sports and Action Camera  (Black, 27 MP)",
     price: '8,499', rating: 45, image:'Images/id-9_Gopro.jpg' },
    { id: 10, name: "boAt Nirvana 751 Active Noise Cancelling Bluetooth Wireless Over Ear Headphones with Up to 65H Playtime, Ambient Sound Mode,(Silver Sterling)",
     price: '1,479', rating: 4, image:'Images/id-10_boat.jpg' },
    { id: 11, name: "Sony MHC-V13 High-Power Party Speaker with Bluetooth connectivity (Jet bass Booster,Mic/Guitar, USB, CD, Music Center app)",
     price: '10,299', rating: 35, image:'Images/id-11_sonyspe.jpg' },
    { id: 12, name: "Zebronics BT4440RUCF 4.1 Channel Multimedia Speakers",
     price: '20,699', rating: 5, image:'Images/id-12_boatspe.jpg' },
    { id: 13, name: "Apple iPhone 15 Pro (256 GB) - Blue Titanium mobile phone",
     price: '1,37,699', rating: 5, image:'Images/id-13_pro.jpg' },
    { id: 14, name: "Samsung Galaxy F54 5G (Stardust Silver, 256 GB mobile phone) (8 GB RAM)",
     price: '34,799', rating: 45, image:'Images/id-14_pro.jpg' },
    { id: 15, name: "HP Laptop 15s, 12th Gen Intel Core i7-1255U, 15.6-inch (39.6 cm), FHD, 16GB DDR4, 512GB SSD, Intel Iris Xe graphics, Backlit KB, Thin & light",
     price: '80,900', rating: 4, image:'Images/id-15_pro.jpg' },
    { id: 16, name: "ASUS [Smartchoice] ROG Strix 13th Gen Intel Core i7-13650HX, Gaming Laptop (16GB DDR5/1TB SSD/NVIDIA GeForce RTX 4060 /Win 11/2.50 Kg)",
     price: '1,39,990', rating: 5, image:'Images/id-16_pro.jpg' },
    { id: 17, name: "Astra One : Gaming controller for your Tablet, Console or PC (White); Compatible with Android, iPhone, Windows, Mac, PS3, PS4",
     price: '2,699', rating: 35, image:'Images/id-17_pro.jpg' },
    { id: 18, name: "Sony PlayStation®5 Gaming Console (slim)",
     price: '54,299', rating: 5, image:'Images/id-18_pro.jpg' },
    { id: 19, name: "Noise Origin Smart Watch Smoothest UI Experience (New Nebula UI) & EN 1 Processor, 1.46” ApexVision AMOLED Display, Fitness Age, Fast Charging",
     price: '6,499', rating: 45, image:'Images/id-19_pro.jpg' },
    { id: 20, name: "Noise Newly Launched ColorFit Pro 5 Max AMOLED Display Smart Watch, BT Calling, Post Training Workout Analysis, Rapid Health, Elite Black",
     price: '4,899', rating: 4, image:'Images/id-20_pro.jpg' },
    { id: 21, name: "JYX Party Pop Speakers with 2 Wireless Microphones, Portable Bluetooth Box Speaker for Adults & Kids, Big Karaoke Speaker Set with Mic System",
     price: '13,690', rating: 45, image:'Images/id-21_pro.jpg' },
    { id: 22, name: "Corsair K57 RGB WIRELESS Gaming Keyboard with SLIPSTREAM WIRELESS Technology, Backlit RGB LED, Black",
     price: '4,699', rating: 5, image:'Images/id-22_pro.jpg' },
    { id: 23, name: "MageGee Portable 60% Mechanical Gaming Keyboard, Compact 68 Keys Mini Wired Office Keyboard with Blue Switch for Windows Laptop PC Mac",
     price: '2,679', rating: 45, image:'Images/id-23_pro.jpg' },
    { id: 24, name: "Gesto 5 Meter LED Strip RGB Strip Light |Remote Controlled|Multicolor LED Lights for Home Decoration, Bedroom,Diwali Decoration",
     price: '1,539', rating: 4, image:'Images/id-24_pro.jpg' },
    { id: 25, name: "PESCA 25 Led Crystal Bubble Ball String Fairy Lights For Decortaion Diwali Christmas Xmas Light For Diwali Home Decorations Lighting",
     price: '1,099', rating: 4, image:'Images/id-25_pro.jpg' },
    { id: 26, name: "iClever Mouse Wireless Dual Mode(Bluetooth+USB),Ergonomic Mouse with 5 Adjustable DPI and 7 Buttons,for Laptop/iPad/MacBook/Tablet/PC",
     price: '2,199', rating: 5, image:'Images/id-26_pro.jpg' }      
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
    Count = localStorage.getItem("cartCount");
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
                        <div><img src="Images/rate-${product.rating}.png" class="rateimg"></div>
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
                cartCount = Cart.length;
                localStorage.setItem("cartCount", JSON.stringify(cartCount));
                CartCount(); // function to count total nume of Products Added to Cart
                quty = 1;
            }
            console.log('Cart after adding product:', Cart); // Log Cart after adding product
        });
    });
    
}



