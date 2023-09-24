document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll(".list-group-item");
    const tabContents = document.querySelectorAll(".tab-pane");

    listItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetTab = document.getElementById(targetId);

        tabContents.forEach((content) => {
          content.classList.remove("show", "active");
        });

        targetTab.classList.add("show", "active");

        targetTab.scrollIntoView({ behavior: "smooth" });
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const toastTrigger = document.getElementById('liveToastBtn');

    const toastLiveExample = document.getElementById('liveToast');

    if (toastTrigger) {
        const toastBootstrap = new bootstrap.Toast(toastLiveExample);
        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show();
        });
    }
});

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

window.addEventListener("load", () => {
  const loader2 = document.querySelector(".loader2");

  loader2.classList.add("loader2--hidden");

  loader2.addEventListener("transitionend", () => {
    document.body.removeChild(loader2);
  });
});

function openLinkInNewTab(url) {
  window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.carousel-control-prev');
  const nextButton = document.querySelector('.carousel-control-next');
  const carousel = new bootstrap.Carousel(document.getElementById('carousel'));

  prevButton.addEventListener('click', function() {
    carousel.prev();
  });

  nextButton.addEventListener('click', function() {
    carousel.next();
  });
});

function selectSlide(index) {
  const carousel = document.getElementById('carousel');
  const carouselInstance = new bootstrap.Carousel(carousel);
  carouselInstance.to(index);
}

// Add event listeners to the indicator buttons
const indicatorButtons = document.querySelectorAll('.carousel-indicators button');
indicatorButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    selectSlide(index);
  });
});