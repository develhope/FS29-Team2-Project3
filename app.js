function openCity(event, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "grid";
  event.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

const leftScrollButton = document.querySelector(".scroll-left");
const rightScrollButton = document.querySelector(".scroll-right");
const newsTab = document.querySelector(".news-tab");

leftScrollButton.addEventListener("click", () => {
  newsTab.scrollLeft += 200;
});

rightScrollButton.addEventListener("click", () => {
  newsTab.scrollLeft -= 200;
});
