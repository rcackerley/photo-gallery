var main = document.querySelector('.main')
var container = document.createElement('div');
container.classList.add('selections')
var images = ['images/snow.jpg', 'images/bread.jpg', 'images/snow-kristen.jpg', 'images/stranger.jpg', 'images/boston.jpg', 'images/red-sox.jpg', 'images/friends.jpg', 'images/men.jpg']
var posts = [
    {
        img: 'images/snow.jpg',
        user: 'rcackerley',
        comment: "Snowpocalypse",
        userpost0: {
            user0: 'kcackerley',
            comment0: 'Here\'s a sample comment',
            },
        userpost1: {
            user1: 'mellack',
            comment1: 'Here\'s a sample comment',
            },
        userpost2: {
            user2: 'robby',
            comment2: 'Here\'s a sample comment',
            },
        userpost3: {
            user3: 'user_name',
            comment3: 'Here\'s a sample comment',
            } 
    },
    {
        img: 'images/bread.jpg',
        user: 'rcackerley',
        comment: "Fresh bread",
        userpost0: {
            user0: 'kcackerley',
            comment0: 'Love it!',
            },
        userpost1: {
            user1: 'mellack',
            comment1: 'Here\'s a sample comment',
            },
        userpost2: {
            user2: 'robby',
            comment2: 'Here\'s a sample comment',
            },
        userpost3: {
            user3: 'user_name',
            comment3: 'Here\'s a sample comment',
            },
    },
    {
        img: 'images/snow-kristen.jpg',
        user: 'rcackerley',
        comment: "Brrrrrr.",
        userpost0: {
            user0: 'kcackerley',
            comment0: 'Hey that\'s me!',
            },
        userpost1: {
            user1: 'mellack',
            comment1: 'Here\'s a sample comment',
            },
        userpost2: {
            user2: 'robby',
            comment2: 'Here\'s a sample comment',
            },
        userpost3: {
            user3: 'user_name',
            comment3: 'Here\'s a sample comment',
            }
    },
    {
        img: 'images/stranger.jpg',
        user: 'rcackerley',
        comment: "Stranger things",
        userpost0: {
            user0: 'kcackerley',
            comment0: 'Eleven!',
            },
        userpost1: {
            user1: 'mellack',
            comment1: 'Here\'s a sample comment',
            },
        userpost2: {
            user2: 'robby',
            comment2: 'Here\'s a sample comment',
            },
        userpost3: {
            user3: 'user_name',
            comment3: 'Here\'s a sample comment',
        }
    },
    {
        img: 'images/boston.jpg',
        user: 'rcackerley',
        comment: "Best city.",
        userpost0: {
            user0: 'kcackerley',
            comment0: 'I want Donuts',
            },
        userpost1: {
            user1: 'mellack',
            comment1: 'Here\'s a sample comment',
            },
        userpost2: {
            user2: 'robby',
            comment2: 'Here\'s a sample comment',
            },
        userpost3: {
            user3: 'user_name',
            comment3: 'Here\'s a sample comment',
            }
    },
    {
        img: 'images/red-sox.jpg',
        user: 'rcackerley',
        comment: "Fenway",
        userpost0: {
            user0: 'kcackerley',
            comment0: 'Go Red Sox!',
            },
        userpost1: {
            user1: 'mellack',
            comment1: 'Here\'s a sample comment',
            },
        userpost2: {
            user2: 'robby',
            comment2: 'Here\'s a sample comment',
            },
        userpost3: {
            user3: 'user_name',
            comment3: 'Here\'s a sample comment',
            }
    },
    {
        img: 'images/friends.jpg',
        user: 'rcackerley',
        comment: "Good times in Nashville",
        userpost0: {
            user0: 'kcackerley',
            comment0: 'It was hot that day',
            },
        userpost1: {
            user1: 'mellack',
            comment1: 'Here\'s a sample comment',
            },
        userpost2: {
            user2: 'robby',
            comment2: 'Here\'s a sample comment',
            },
        userpost3: {
            user3: 'user_name',
            comment3: 'Here\'s a sample comment',
            }
    },
    {
        img: 'images/men.jpg',
        user: 'rcackerley',
        comment: "Thanksgiving",
        userpost0: {
            user0: 'kcackerley',
            comment0: 'Hey, that\'s my family.',
            },
        userpost1: {
            user1: 'mellack',
            comment1: 'Here\'s a sample comment',
            },
        userpost2: {
            user2: 'robby',
            comment2: 'Here\'s a sample comment',
            },
        userpost3: {
            user3: 'user_name',
            comment3: 'Here\'s a sample comment',
            }
    },
];

var toggleActive = function(event) {
    for (i=0; i<navImages.length; i++) {
        if (navImages[i].classList.contains('active')) {
            navImages[i].classList.toggle('active');
        }
    }
    event.target.classList.toggle('active');
    heroImage.src = event.target.src;

    for (i = 0; i < navImages.length; i++) {
        if (event.target.src === posts[i].img) {
            
        }
    }
    
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
    thumbnail.src = posts[i].img;
    thumbnail.setAttribute('class', 'thumbnail');
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