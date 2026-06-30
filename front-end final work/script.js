document.addEventListener("DOMContentLoaded", () => {

  const cookieBanner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");

  if (!localStorage.getItem("cookiesAccepted")) {
    cookieBanner.style.display = "flex"; 
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true"); 
    cookieBanner.style.display = "none"; 
  });

  // 3. Burger Menu Logic
  const burgerBtn = document.getElementById("burger-btn");
  const mobileNav = document.getElementById("mobile-nav");
  const menuCheck = document.getElementById("menu-check");

  burgerBtn.addEventListener("click", (e) => {
    mobileNav.classList.toggle("active");
  });

  const reviewsContainer = document.getElementById("reviews-container");

  async function fetchReviews() {
    try {
      const response = await fetch("https://randomuser.me/api/?results=4");
      const data = await response.json();

      const users = data.results;
      let generatedHTML = "";

      users.forEach((user) => {
        generatedHTML += `
          <div class="review-card">
            <img src="${user.picture.large}" alt="${user.name.first}" />
            <p class="review">"The platform is fantastic for finding local events! - ${user.name.first}"</p>
            <div class="stars">
              <span class="material-symbols-outlined">star_rate</span>
              <span class="material-symbols-outlined">star_rate</span>
              <span class="material-symbols-outlined">star_rate</span>
              <span class="material-symbols-outlined">star_rate</span>
              <span class="material-symbols-outlined">star_rate</span>
            </div>
          </div>
        `;
      });

      reviewsContainer.insertAdjacentHTML("afterbegin", generatedHTML);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  }

  fetchReviews();
});
