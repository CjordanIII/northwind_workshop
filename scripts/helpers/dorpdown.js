import { dropdown } from "../builders/dropdownBuilder.js";
import { table } from "../builders/table.js";
import { arr } from "../constants/tableArr.js";
import { catagoriesArr, catogorieDropdown } from "../services/products.js";

const intoDropdown = async (byCatgory, tablehtml) => {
  try {
    const catagories = await catogorieDropdown();

    // dropdown builder
    dropdown(byCatgory, "catagories", catagories);
    // search by id
    const catagoriesDropdown = document.querySelector("#catagories");
    catagoriesDropdown.addEventListener("change", (e) => {
      // console.log(e.target.value);
      const responciveCatagories = async () => {
        const responce = await catagoriesArr(e.target.value);

        table(tablehtml, responce, arr);
      };
      responciveCatagories();
    });
  } catch (error) {
    console.log(error);
  }
};

export { intoDropdown };
