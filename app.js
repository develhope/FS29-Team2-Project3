function openCity(event, tabName) {
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

checkScrollButton();

leftScrollButton.addEventListener("click", () => {
  newsTab.scrollLeft += 300;
  checkScrollButton();
});

rightScrollButton.addEventListener("click", () => {
  newsTab.scrollLeft -= 300;
  checkScrollButton();
});

newsTab.addEventListener("scroll", checkScrollButton);

window.addEventListener("resize", checkScrollButton);

function checkScrollButton() {
  const maxScrollLeft = newsTab.scrollWidth - newsTab.clientWidth;

  if (newsTab.scrollLeft <= 0) {
    // Applica hidden al right button se all'inizio del menu
    rightScrollButton.classList.add("hidden");
  } else {
    rightScrollButton.classList.remove("hidden");
  }

  if (newsTab.scrollLeft >= newsTab.scrollWidth - newsTab.clientWidth) {
    // Applica hidden al left button se alla fine del menu
    leftScrollButton.classList.add("hidden");
  } else {
    leftScrollButton.classList.remove("hidden");
  }

  // Always hide both buttons if content is not wider than the container
  if (newsTab.scrollWidth <= newsTab.clientWidth) {
    leftScrollButton.classList.add("hidden");
    rightScrollButton.classList.add("hidden");
  }
}
