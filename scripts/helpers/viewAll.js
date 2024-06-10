import { productsArr } from "../services/products.js";

import { table } from "../builders/table.js";

const viewAll = async (tablehtml) => {
  const products = await productsArr();
  table(tablehtml, products);
};

export { viewAll };
