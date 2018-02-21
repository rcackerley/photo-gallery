var container = document.querySelector('.selections');
var images = ['images/snow.jpg', 'images/bread.jpg', 'images/snow-kristen.jpg', 'images/stranger.jpg']

var toggleActive = function(event) {
    for (i=0; i<navImages.length; i++) {
        if (navImages[i].classList.contains('active')) {
            navImages[i].classList.toggle('active');
        }
    }
    event.target.classList.toggle('active');
    heroImage.src = event.target.src;
    modal.classList.toggle('hidden');

}
var toggleHidden = function(event) {
    modal.classList.toggle('hidden');
}

var slideRight = function (event) {
    for (i = 0; i < navImages.length; i++) {
        if (heroImage.src === navImages[i].src) {
            if (i + 1 >= navImages.length) {
                heroImage.src = navImages[0].src;
                break;
            } else {
                heroImage.src = navImages[i + 1].src;
                break;
            }
        }
    }
}

var slideLeft = function (event) {
    for (i = 0; i < navImages.length; i++) {
        if (heroImage.src === navImages[i].src) {
            if (i - 1 < 0 ) {
                heroImage.src = navImages[navImages.length - 1].src;
                break;
            } else {
                heroImage.src = navImages[i - 1].src;
                break;
            }
        }
    }
}

for (i=0; i < images.length; i++) {
    var thumbnail = document.createElement('img');
    thumbnail.src = images[i];
    thumbnail.setAttribute('class', 'thumbnail');
    thumbnail.addEventListener('click', toggleActive);
    container.appendChild(thumbnail);
}

var navImages = document.querySelectorAll('.thumbnail');
var heroImage = document.querySelector('.hero-image');
var modal = document.querySelector('.modal');
var closeX = document.querySelector('.fa-times');
closeX.addEventListener('click', toggleHidden);

var rightArrow = document.querySelector('.fa-chevron-right');
rightArrow.addEventListener('click', slideRight);

var leftArrow = document.querySelector('.fa-chevron-left');
leftArrow.addEventListener('click', slideLeft);