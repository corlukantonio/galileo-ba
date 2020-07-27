function mouseHandler(event) {
    var eSrc = eventUtility.getTarget(event);
    var eType = event.type;

    if (eType === "click") {
        if (eSrc.id === "openHeaderRWDNav") {
            headerRWDNavHandler();
        }

        else if ((eSrc.id === "sliderPlay") || (eSrc.parentNode.id === "sliderPlay")) {
            slideShow();
        }

        else if ((eSrc.id === "sliderPrev") || (eSrc.className === "s_prev_img") || (eSrc.className === "s_prev_ttl")) {
            previousSliderImage();
        }

        else if ((eSrc.id === "sliderNext") || (eSrc.className === "s_next_img") || (eSrc.className === "s_next_ttl")) {
            nextSliderImage();
        }
    }

    else if (eType === "mouseover") {
        if ((eSrc.className === "s_img") || (eSrc.parentNode.className === "s_img") || (eSrc.id === "sliderNav") || (eSrc.parentNode.id === "sliderNav") || (eSrc.parentNode.parentNode.id === "sliderNav") || (eSrc.parentNode.parentNode.parentNode.id === "sliderNav")) {
            openSliderNavigation();
        }

        else if ((eSrc.className !== "s_img") && (eSrc.parentNode.className !== "s_img") && (eSrc.id !== "sliderNav") && (eSrc.parentNode.id !== "sliderNav") && (eSrc.parentNode.parentNode.id !== "sliderNav") && (eSrc.parentNode.parentNode.parentNode.id !== "sliderNav")) {
            closeSliderNavigation();
        }
    }
}

eventUtility.addEvent(document, "click", mouseHandler);
eventUtility.addEvent(document, "mouseover", mouseHandler);