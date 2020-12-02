// window.onload =

function pageLoaded() {
  function hello () {
    console.log("Hello"); 
  }
  document.getElementById("logo").addEventListener("click", hello);
};


window.addEventListener("load", pageLoaded);