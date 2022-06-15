const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
let img = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg']
for(var i = 0; i < 5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', img[i]);
    thumbBar.appendChild(newImage);
    newImage.onclick = function(e){
        displayedImage.src = e.target.src;
    }
}
/* Wiring up the Darken/Lighten button */
btn.onclick = function(){
    // const btnClass = btn.getAttribute('class');
    if(btn.className == 'dark'){ // if(btnClass === "dark")
        btn.setAttribute('class', 'light');
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else{
        btn.setAttribute('class', 'dark'); // if(btnClass === "light")
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}
