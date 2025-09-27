// Dark Mode Toggle
const toggleBtn = document.getElementById("dark-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Change icon
  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});

