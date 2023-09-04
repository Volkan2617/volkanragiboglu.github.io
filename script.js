// function GeneralInfo() {
//     var infoCard = document.getElementById("GeneralInfoCard");

//     if (infoCard.style.display === "none" || infoCard.style.display === "") {
//       infoCard.style.display = "block";
//     } else {
//       infoCard.style.display = "none";
//     }
//   }

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