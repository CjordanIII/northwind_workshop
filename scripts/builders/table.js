const table = (parent, data, arr) => {
  // clearing out data
  parent.innerText = "";
  // createing thead
  const row = parent.createTHead();
  // inserting row inside thead
  const rowdata = row.insertRow();
  // inserting cell in thead

  arr.forEach((arrData) => {
    let cell = rowdata.insertCell();
    cell.innerText = arrData;
  });
  // createomg tbody
  const tbody = parent.createTBody();

  //  builing body over arr
  data.forEach((item, index) => {
    //  incert row into body
    const tdata = tbody.insertRow();
    // incert cell into row
    let pId = tdata.insertCell();
    // insert text into cell
    pId.innerText = item.productId;
    let pName = tdata.insertCell();
    pName.innerText = item.productName;
    let pU = tdata.insertCell();
    pU.innerText = item.unitPrice;
    let seemore = tdata.insertCell();
    const link = document.createElement("a");

    link.href = `/product_details.html?id=${item.productId}`;
    link.innerText = "seemore";
    seemore.appendChild(link);
  });
};

const table2 = (parent, data, arr) => {
  // clearing out data
  parent.innerText = "";
  // createing thead
  const row = parent.createTHead();
  // inserting row inside thead
  const rowdata = row.insertRow();
  // inserting cell in thead

  arr.forEach((arrData) => {
    let cell = rowdata.insertCell();
    cell.innerText = arrData;
  });
  // createomg tbody
  const tbody = parent.createTBody();

  //  builing body over arr
  data.forEach((item) => {
    //  incert row into body
    const tdata = tbody.insertRow();
    // incert cell into row
    const catId = tdata.insertCell();
    catId.innerText = item.categoryId;
    // =====
    const prodId = tdata.insertCell();
    prodId.innerText = item.productId;
    // =====
    const prodName = tdata.insertCell();
    prodName.innerText = item.productName;
    // =====
    const prodsuppy = tdata.insertCell();
    prodsuppy.innerText = item.supplier;
    // ====
    const pPrice = tdata.insertCell();
    pPrice.innerText = item.unitPrice;
    // ====
    const pUnits = tdata.insertCell();
    pUnits.innerText = item.unitsInStock;
    // ====
    const pDis = tdata.insertCell();
    if (item.discontinued) {
      pDis.innerText = "yes";
    } else {
      pDis.innerText = "no";
    }
  });
};

export { table, table2 };
