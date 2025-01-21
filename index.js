let dropDown = document.getElementsByClassName("dropDown");
let dropDownSpan = document.getElementsByClassName("arrow");

for (let i = 0; i < dropDown.length; i++) {
  dropDown[i].addEventListener("click", function () {
    let dropDownContent = this.nextElementSibling;

    if (dropDownContent.style.display === "block") {
      dropDownContent.style.display = "none";
      dropDownSpan[i].innerHTML = "&#8595";
    } else {
      dropDownContent.style.display = "block";
      dropDownSpan[i].innerHTML = "&#8593";
    }

    this.classList.toggle("active");
  });
}
