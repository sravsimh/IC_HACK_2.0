const addToCartButton = document.querySelector(".add-to-cart");
const counter = document.querySelector(".counter");

addToCartButton.addEventListener("click", () => {
  // Get the current quantity in the counter.
  const quantity = parseInt(counter.value);

  // Increment the quantity.
  quantity++;

  // Update the counter.
  counter.value = quantity;
});
