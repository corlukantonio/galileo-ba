function openSliderNavigation() {
    var sliderNav = document.getElementById("sliderNav");

    sliderNav.style.bottom = 0 + "px";

    sliderNav.style.msTransition = "bottom .5s cubic-bezier(.35, .82, .4, 1)";
    sliderNav.style.transition = "bottom .5s cubic-bezier(.35, .82, .4, 1)";
}

function closeSliderNavigation() {
    var sliderNav = document.getElementById("sliderNav");

    sliderNav.style.bottom = -42 + "px";

    sliderNav.style.msTransition = "bottom .5s cubic-bezier(.4, 0, .65, .18)";
    sliderNav.style.transition = "bottom .5s cubic-bezier(.4, 0, .65, .18)";
}

var autoSlideShow = setTimeout(nextSliderImage, 10000);
var autoSlideShowProgress = setTimeout(progressImage, 0);

function slideShow() {
    var sliderPlay = document.getElementById("sliderPlay");
    var sliderPlaySpan = sliderPlay.getElementsByTagName("span")[0];

    if (autoSlideShow) {
        sliderPlaySpan.innerHTML = "Play";

        clearTimeout(autoSlideShow);
        autoSlideShow = false;

        clearTimeout(autoSlideShowProgress);
        autoSlideShowProgress = false;
        progressImage();
    }

    else {
        sliderPlaySpan.innerHTML = "Pause";

        autoSlideShow = setTimeout(nextSliderImage, 10000);

        autoSlideShowProgress = true;
        progressImage();
    }
}

function previousSliderImage() {
    var sliderImgs = document.getElementById("sliderImgs");
    var sliderImg = document.getElementsByClassName("s_img");
    
    if (parseInt(sliderImgs.style.left) >= 0) {
        sliderImgs.style.left = ((sliderImg.length - 1) * (-100)) + "%";
    }

    else {
        sliderImgs.style.left = (parseInt(sliderImgs.style.left) + 100) + "%";
    }

    if (autoSlideShow) {
        clearTimeout(autoSlideShow);
        autoSlideShow = setTimeout(nextSliderImage, 10000);
    }

    clearTimeout(autoSlideShowProgress);
    progressImage();
}

function nextSliderImage() {
    var sliderImgs = document.getElementById("sliderImgs");
    var sliderImg = document.getElementsByClassName("s_img");

    if (parseInt(sliderImgs.style.left) <= ((sliderImg.length - 1) * (-100))) {
        sliderImgs.style.left = 0 + "%";
    }

    else {
        sliderImgs.style.left = (parseInt(sliderImgs.style.left) - 100) + "%";
    }

    if (autoSlideShow) {
        clearTimeout(autoSlideShow);
        autoSlideShow = setTimeout(nextSliderImage, 10000);
    }

    clearTimeout(autoSlideShowProgress);
    progressImage();
}

function progressImage() {
    var sliderProgress1 = document.getElementById("sliderProgress1");
    var sliderProgress2 = document.getElementById("sliderProgress2");

    if (parseInt(sliderProgress2.style.width) <= 0 || ((parseInt(sliderProgress2.style.width) > 0) && (parseInt(sliderProgress2.style.width) < 100))) {
        if (autoSlideShowProgress) {
            sliderProgress2.style.opacity = 0;
            sliderProgress2.style.width = 100 + "%";
            sliderProgress2.style.transition = "";

            sliderProgress1.style.opacity = 1;
            sliderProgress1.style.width = 0 + "%";
            sliderProgress1.style.transition = "width 10s linear";

            clearTimeout(autoSlideShowProgress);
            autoSlideShowProgress = setTimeout(progressImage, 10000);
        }

        else {
            sliderProgress2.style.opacity = 0;
        }
    }

    else if (parseInt(sliderProgress1.style.width) <= 0 || ((parseInt(sliderProgress1.style.width) > 0) && (parseInt(sliderProgress1.style.width) < 100))) {
        if (autoSlideShowProgress) {
            sliderProgress1.style.opacity = 0;
            sliderProgress1.style.width = 100 + "%";
            sliderProgress1.style.transition = "";

            sliderProgress2.style.opacity = 1;
            sliderProgress2.style.width = 0 + "%";
            sliderProgress2.style.transition = "width 10s linear";

            clearTimeout(autoSlideShowProgress);
            autoSlideShowProgress = setTimeout(progressImage, 10000);
        }

        else {
            sliderProgress1.style.opacity = 0;
        }
    }
}