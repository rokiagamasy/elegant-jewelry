const changeTextBtn = document.getElementById('changeTextBtn');
const aboutText = document.getElementById('aboutText');

changeTextBtn.addEventListener('click', function() {
    aboutText.innerText = 'Elegant Jewelry offers timeless pieces that blend modern design with classical elegance. Perfect for any occasion!';
});

function popup1(){
    Swal.fire("Thanks for your booking ❤️");

}



function bookNow(){
    alert("Thank You For Booking");
}

const toggleProductsBtn = document.getElementById('toggleProductsBtn');
const productsSection = document.getElementById('products');

toggleProductsBtn.addEventListener('click', function() {
    if (productsSection.style.display === 'none') {
        productsSection.style.display = 'block';
    } else {
        productsSection.style.display = 'none';
    }
});

const greetingMessage = document.getElementById('greetingMessage');

const currentHour = new Date().getHours();
if (currentHour < 12) {
    greetingMessage.innerText = 'Good Morning, welcome to Elegant Jewelry!';
} else if (currentHour < 18) {
    greetingMessage.innerText = 'Good Afternoon, explore our timeless pieces!';
} else {
    greetingMessage.innerText = 'Good Evening, take a look at our latest collection!';
}