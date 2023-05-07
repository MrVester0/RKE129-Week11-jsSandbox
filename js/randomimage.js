const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["pic7.jpeg", "img9.webp", "img8.webp", "pic5.jpeg", "pic8.jpeg"];

myButton.addEventListener('click', changeImage);

function changeImage() {
    let randomIndex = Math.floor(Math.random() *  images.length);
    image.style.backgroundImage = images[randomIndex];
    image.src = "images/" + images[randomIndex];
}