import { table } from "../builders/table.js";
import { arr } from "../constants/tableArr.js";
import { productsArr } from "../services/products.js";

const viewAll = async (tablehtml) => {
  const products = await productsArr();
  table(tablehtml, products, arr);
};

export { viewAll };
