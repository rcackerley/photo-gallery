var $main = $('.main')
var $container = $('<div>');
$container.addClass('selections')
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
    {
        img: 'images/apartment.jpg',
        comments: [
            {
                user: 'rcackerley',
                comment: "Home"
            },
            {
                user: 'kcackerley',
                comment: "Rooftop."
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
        data: "8"
    },
];
var updatePostContent = function () {
    for (i = 0; i < posts.length; i++) {

        if ($heroImage.attr('data-id') === posts[i].data) {
            for (j = 0; j < posts[i].comments.length; j++) {
                comments[j].children[0].textContent = posts[i].comments[j].user;
                comments[j].children[1].textContent = posts[i].comments[j].comment;
            }
        }
    }
}
var toggleActive = function(event) {
    console.log(event.target.src);
    $heroImage.attr('src', event.target.src);
    $heroImage.attr('data-id', event.target.getAttribute('data-id'));
    updatePostContent();
    $modal.toggleClass('hidden');

}
var toggleHidden = function(event) {
    $modal.toggleClass('hidden');
}

var slideRight = function (event) {
    event.preventDefault();
    for (i = 0; i < $navImages.length; i++) {
        if ($heroImage.attr('src') === $navImages[i].src) {
            if (i + 1 >= $navImages.length) {
                $heroImage.attr('src', $navImages[0].src);
                $heroImage.attr('data-id', $navImages[0].dataset['id']);
                updatePostContent();
                break;
            } else {
                $heroImage.attr('src', $navImages[i + 1].src);
                $heroImage.attr("data-id", $navImages[i + 1].dataset['id']);
                updatePostContent();
                break;
            }
        }
    }
}

var slideLeft = function (event) {
    event.preventDefault();
    for (i = 0; i < $navImages.length; i++) {
        if ($heroImage.attr('src') === $navImages[i].src) {
            if (i - 1 < 0 ) {
                $heroImage.attr('src', $navImages[$navImages.length - 1].src);
                $heroImage.attr("data-id", $navImages[$navImages.length - 1].dataset['id']);
                updatePostContent();
                break;
            } else {
                $heroImage.attr('src', $navImages[i - 1].src );
                $heroImage.attr("data-id", $navImages[i - 1].dataset['id']);
                updatePostContent();
                break;
            }
        }
    }
}

var locator = 0;

posts.forEach(function(post) {
    var $thumbnail = $('<img>', {
      'src': post.img,
      'class': 'thumbnail',
      'data-id': locator,
    });
    locator++;
    $thumbnail.on('click', toggleActive);
    $container.append($thumbnail);
});

$main.append($container);

var $navImages = $('.thumbnail');
var $heroImage = $('.hero-image');
var $modal = $('.modal');
var $closeX = $('.fa-times');
$closeX.on('click', toggleHidden);

var $rightArrow = $('.fa-chevron-right');
$rightArrow.on('click', slideRight);

var $leftArrow = $('.fa-chevron-left');
$leftArrow.on('click', slideLeft);

var $getModal = $('.modal-flex');

var comments = $getModal[0].children[1].children[2].children
