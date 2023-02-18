let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let url = "https://www.youtube.com/watch?v=PtfbgGNZ4B0";
let feature = "height=550,width=500,top=60";
let newwin;
btn1.addEventListener("click", function () {
  newwin = window.open(url, "goto", feature);
});
// name is define because it can be changed later
btn2.addEventListener("click", function () {
  window.open("https://www.w3schools.com", "goto");
});
btn3.addEventListener("click", function () {
  newwin.close();
});
