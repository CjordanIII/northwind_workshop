import { baseRoute } from "../constants/baseRoute.js";
const catogorieDropdown = async () => {
  try {
    let res = await fetch(`${baseRoute}/api/categories`);
    res = await res.json();

    return res;
  } catch (error) {
    return error;
  }
};

const catagoriesArr = async (id) => {
  try {
    let res = await fetch(`${baseRoute}/api/products/bycategory/${id}`);

    return res.json();
  } catch (error) {
    return error;
  }
};

const productsArr = async () => {
  try {
    let res = await fetch(`${baseRoute}/api/products`);
    res = res.json();
    return res;
  } catch (error) {
    return error;
  }
};

const productsArrAll = async (id) => {
  try {
    let res = await fetch(`${baseRoute}/api/products/${id}`);
    res = res.json();
    return res;
  } catch (error) {
    return error;
  }
};
export { catagoriesArr, catogorieDropdown, productsArr, productsArrAll };
