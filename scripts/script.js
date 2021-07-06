"use strict";

const headerCityButton = document.querySelector(".header__city-button");

headerCityButton.textContent =
  localStorage.getItem("lomodaLocation") || "Ваш город?";

headerCityButton.addEventListener("click", () => {
  const city = prompt("Укажите ваш город") || "Ваш город?";
  headerCityButton.textContent = city;
  localStorage.setItem("lomodaLocation", city);
});

// modal

const subheaderCart = document.querySelector(".subheader__cart");
const cartOverlay = document.querySelector(".cart-overlay");

const cartModalOpen = () => {
  cartOverlay.classList.add("cart-overlay-open");
};
const cartModalClose = () => {
  cartOverlay.classList.remove("cart-overlay-open");
};

subheaderCart.addEventListener("click", cartModalOpen);
cartOverlay.addEventListener("click", (e) => {
  const target = e.target;

  if (target.matches(".cart__btn-close") || target.matches(".cart-overlay")) {
    cartModalClose();
  }
});
