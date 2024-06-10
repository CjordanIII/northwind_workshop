import { table2 } from "./builders/table.js";
import { productsArrAll } from "./services/products.js";
const tableHTML = document.querySelector("#table");
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const getProdects = async (id) => {
  const products = await productsArrAll(id);
  const arr = [
    "categoryId",
    "product Id",
    "product name",
    "supplier",
    "price",
    "units in stock",
    "discontinued",
  ];
  table2(tableHTML, [products], arr);
  console.log(products);
};
getProdects(id);
