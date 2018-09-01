window.onload = function () {
    document.getElementsByTagName('input')[0].focus();
    const arrow = document.getElementsByClassName('arrowContainer')[0]
    arrow.addEventListener("click", listener, false);

    function listener() {
        var timerID = setInterval(function () {
            window.scrollBy(0, 5);

            if (window.pageYOffset >= 700)
                clearInterval(timerID);
        }, 13);

    }
}

