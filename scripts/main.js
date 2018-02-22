var main = document.querySelector('.main')
var container = document.createElement('div');
container.classList.add('selections')
var images = ['images/snow.jpg', 'images/bread.jpg', 'images/snow-kristen.jpg', 'images/stranger.jpg', 'images/boston.jpg', 'images/red-sox.jpg', 'images/friends.jpg', 'images/men.jpg']
var posts = [
    {
        img: 'images/snow.jpg',
        comments: [
            {
                user: 'rcackerley',
                comment: "Snowpocalypse"
            },
            {
                user: 'kcackerley',
                comment: "A great Day!"
            },
            {
                user: 'mellack',
                comment: "This is a sample comment"
            },
            {
                user: 'robby',
                comment: "This is a sample comment"
            },
            {
                user: 'rcackerley',
                comment: "This is a sample comment"
            },
        ],
        data: "0"
    },
    {
        img: 'images/bread.jpg',
        comments: [
            {
                user: 'rcackerley',
                comment: "Fresh bread"
            },
            {
                user: 'kcackerley',
                comment: "Mmmmmm."
            },
            {
                user: 'mellack',
                comment: "This is a sample comment"
            },
            {
                user: 'robby',
                comment: "This is a sample comment"
            },
            {
                user: 'rcackerley',
                comment: "This is a sample comment"
            },
        ],
        data: "1"
    },
    {
        img: 'images/snow-kristen.jpg',
        comments: [
            {
                user: 'rcackerley',
                comment: "It's a snow day!"
            },
            {
                user: 'kcackerley',
                comment: "A great Day!"
            },
            {
                user: 'mellack',
                comment: "This is a sample comment"
            },
            {
                user: 'robby',
                comment: "This is a sample comment"
            },
            {
                user: 'rcackerley',
                comment: "This is a sample comment"
            },
        ],
        data: "2"
    },
    {
        img: 'images/stranger.jpg',
        comments: [
            {
                user: 'rcackerley',
                comment: "Stranger Things"
            },
            {
                user: 'kcackerley',
                comment: "Eleven"
            },
            {
                user: 'mellack',
                comment: "This is a sample comment"
            },
            {
                user: 'robby',
                comment: "This is a sample comment"
            },
            {
                user: 'rcackerley',
                comment: "This is a sample comment"
            },
        ],
        data: "3"
    },
    {
        img: 'images/boston.jpg',
        comments: [
            {
                user: 'rcackerley',
                comment: "The best city"
            },
            {
                user: 'kcackerley',
                comment: "Let's move there!"
            },
            {
                user: 'mellack',
                comment: "This is a sample comment"
            },
            {
                user: 'robby',
                comment: "This is a sample comment"
            },
            {
                user: 'rcackerley',
                comment: "This is a sample comment"
            },
        ],
        data: "4"
    },
    {
        img: 'images/red-sox.jpg',
        comments: [
            {
                user: 'rcackerley',
                comment: "Fenway"
            },
            {
                user: 'kcackerley',
                comment: "Go Red Sox"
            },
            {
                user: 'mellack',
                comment: "This is a sample comment"
            },
            {
                user: 'robby',
                comment: "This is a sample comment"
            },
            {
                user: 'rcackerley',
                comment: "This is a sample comment"
            },
        ],
        data: "5"
    },
    {
        img: 'images/friends.jpg',
        comments: [
            {
                user: 'rcackerley',
                comment: "Friends"
            },
            {
                user: 'kcackerley',
                comment: "It was so hot."
            },
            {
                user: 'mellack',
                comment: "This is a sample comment"
            },
            {
                user: 'robby',
                comment: "This is a sample comment"
            },
            {
                user: 'rcackerley',
                comment: "This is a sample comment"
            },
        ],
        data: "6"
    },
    {
        img: 'images/men.jpg',
        comments: [
            {
                user: 'rcackerley',
                comment: "Family"
            },
            {
                user: 'kcackerley',
                comment: "That's our family."
            },
            {
                user: 'mellack',
                comment: "This is a sample comment"
            },
            {
                user: 'robby',
                comment: "This is a sample comment"
            },
            {
                user: 'rcackerley',
                comment: "This is a sample comment"
            },
        ],
        data: "7"
    },
];
var updatePostContent = function () {
    for (i = 0; i < posts.length; i++) {

        if (heroImage.getAttribute('data-id') === posts[i].data) {
            for (j = 0; j < posts[i].comments.length; j++) {
                comments[j].children[0].textContent = posts[i].comments[j].user;
                comments[j].children[1].textContent = posts[i].comments[j].comment;
            }
        }
    }
}
var toggleActive = function(event) {
    for (i=0; i<navImages.length; i++) {
        if (navImages[i].classList.contains('active')) {
            navImages[i].classList.toggle('active');
        }
    }
    event.target.classList.toggle('active');
    heroImage.src = event.target.src;
    heroImage.dataset["id"] = event.target.getAttribute('data-id');
    updatePostContent();
    modal.classList.toggle('hidden');

}
var toggleHidden = function(event) {
    modal.classList.toggle('hidden');
}

var slideRight = function (event) {
    event.preventDefault();
    for (i = 0; i < navImages.length; i++) {
        if (heroImage.src === navImages[i].src) {
            if (i + 1 >= navImages.length) {
                heroImage.src = navImages[0].src;
                heroImage.dataset["id"] = navImages[0].dataset['id'];
                updatePostContent();
                break;
            } else {
                heroImage.src = navImages[i + 1].src;
                heroImage.dataset["id"] = navImages[i + 1].dataset['id'];
                updatePostContent();
                break;
            }
        }
    }
}

var slideLeft = function (event) {
    event.preventDefault();
    for (i = 0; i < navImages.length; i++) {
        if (heroImage.src === navImages[i].src) {
            if (i - 1 < 0 ) {
                heroImage.src = navImages[navImages.length - 1].src;
                heroImage.dataset["id"] = navImages[navImages.length - 1].dataset['id'];
                updatePostContent();
                break;
            } else {
                heroImage.src = navImages[i - 1].src;
                heroImage.dataset["id"] = navImages[i - 1].dataset['id'];
                updatePostContent();
                break;
            }
        }
    }
}

for (i=0; i < images.length; i++) {
    var thumbnail = document.createElement('img');
    thumbnail.src = posts[i].img;
    thumbnail.setAttribute('class', 'thumbnail');
    thumbnail.setAttribute('data-id', i)
    thumbnail.addEventListener('click', toggleActive);
    container.appendChild(thumbnail);
}
main.appendChild(container);

var navImages = document.querySelectorAll('.thumbnail');
var heroImage = document.querySelector('.hero-image');
var modal = document.querySelector('.modal');
var closeX = document.querySelector('.fa-times');
closeX.addEventListener('click', toggleHidden);

var rightArrow = document.querySelector('.fa-chevron-right');
rightArrow.addEventListener('click', slideRight);

var leftArrow = document.querySelector('.fa-chevron-left');
leftArrow.addEventListener('click', slideLeft);

var getModal = document.querySelectorAll('.modal-flex');

var comments = getModal[0].children[1].children[2].children