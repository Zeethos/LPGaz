const acc = document.getElementsByClassName("sec__five-btn-acc");
let i;



for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle("active");

        this.nextElementSibling.classList.toggle("show");
    }
}