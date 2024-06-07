const menubtn = document.getElementById("dropdownDefaultButton");

menubtn.addEventListener("click", (e) => {
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("hidden");
});
