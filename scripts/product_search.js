import { dropdown } from "./builders/dropdownBuilder.js";
import { intoDropdown } from "./helpers/dorpdown.js";
import { viewAll } from "./helpers/viewAll.js";
// dom search
const byCatgory = document.querySelector("#category_drop_down");
const tablehtml = document.querySelector("#table");
const searchByDropDown = document.querySelector("#search_by");

// builds drop down
const searchByDp = async () => {
  const dpData = [
    { categoryId: 1, name: "Select one..." },
    { categoryId: 2, name: "Search by category" },
    { categoryId: 3, name: "View all" },
  ];
  dropdown(searchByDropDown, "search_by_db", dpData);
  document.querySelector("#search_by_db").addEventListener("change", (w) => {
    // if catagorys true show
    if (w.target.value == dpData[1].categoryId) {
      // clear out before start might be data there
      byCatgory.innerText = "";
      tablehtml.innerText = "";
      intoDropdown(byCatgory, tablehtml);
    } else if (w.target.value == dpData[2].categoryId) {
      byCatgory.innerText = "";
      tablehtml.innerText = "";
      viewAll(tablehtml);
    } else {
      byCatgory.innerText = "";
      tablehtml.innerText = "";
    }
  });
};

searchByDp();
