var lis = document.querySelectorAll("li");

for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener("mouseover", function () {
        this.classList.add("selected");
        // this.style.color = "green";
    });

    lis[i].addEventListener("mouseout", function () {
        this.classList.remove("selected");
        // this.style.color = "black";
    });
    lis[i].addEventListener("click", function () {
        this.classList.toggle("done");
    })
}