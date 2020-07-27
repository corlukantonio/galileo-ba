var isHeaderRWDNavOpen = false;

function headerRWDNavHandler() {
    var header = document.getElementsByTagName("header")[0];

    if (!isHeaderRWDNavOpen) {
        header.className = "open";
        isHeaderRWDNavOpen = true;
    } else {
        header.className = "close";
        isHeaderRWDNavOpen = false;
    }

}