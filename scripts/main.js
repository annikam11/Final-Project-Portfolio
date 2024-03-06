var mainheading = document.querySelector('#main-heading')
const imagecontent = document.getElementById('imagecontent')


fetch('https://api.quotable.io/quotes/random').then(response =>{
    response.json().then(data => {
        mainheading.textContent = data[0]["content"];
        console.log(data)
    })
})

let images = [
    "./images/diesel.jpg",
    "./images/laughingPic.jpg",
    "./images/wrangler.jpg",
    "./images/picOfMeForWeb.jpg"];
    let imageIndex = 0;

imagecontent.src = images[imageIndex];

function slideShow() {
imageIndex++;

if(imageIndex >= images.length){
    imageIndex = 0;
}

console.log('changed the image', imageIndex);
imagecontent.src = images[imageIndex];
}

setInterval(slideShow, 2000);




