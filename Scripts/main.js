function myFunction(btn) {
    // var parent = btn.parentNode;
    var container = btn.parentElement;
    var dots = container.querySelector(".dots");
    var moreText = container.querySelector(".more");
    var btnText = btn;

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "block";
    }
}