// window.onload =

function pageLoaded() {
  document.getElementById("logo").addEventListener("click", hello);
};

function hello () {
  console.log("Hello"); 
}

window.addEventListener("load", pageLoaded);