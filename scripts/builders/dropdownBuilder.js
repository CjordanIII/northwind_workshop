const dropdown = (parent, id, data) => {
  const dropdown = document.createElement("select");
  dropdown.className = "form-select text-center";
  dropdown.ariaLabel = "Default select example";
  dropdown.id = id;

  data.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.categoryId;
    option.text = item.name;
    dropdown.appendChild(option);
  });

  parent.appendChild(dropdown);
  console.log("dropdown");
};

export { dropdown };
