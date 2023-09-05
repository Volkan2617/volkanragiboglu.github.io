// JavaScript to handle tab switching and scrolling
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

        // Scroll to the selected tab content
        targetTab.scrollIntoView({ behavior: "smooth" });
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Get the button element
    const toastTrigger = document.getElementById('liveToastBtn');

    // Get the toast element
    const toastLiveExample = document.getElementById('liveToast');

    if (toastTrigger) {
        // Create or get the Bootstrap toast instance
        const toastBootstrap = new bootstrap.Toast(toastLiveExample);

        // Add a click event listener to show the toast when the button is clicked
        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show();
        });
    }
});