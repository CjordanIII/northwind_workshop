const table = (parent, data) => {
  // clearing out data
  parent.innerText = "";
  // createing thead
  const row = parent.createTHead();
  // inserting row inside thead
  const rowdata = row.insertRow();
  // inserting cell in thead
  const pID = rowdata.insertCell();
  const pname = rowdata.insertCell();
  const pPrice = rowdata.insertCell();
  const pUnit = rowdata.insertCell();
  const pSupplier = rowdata.insertCell();
  const pIsDiscontinued = rowdata.insertCell();
  // assigning tittles
  pID.innerText = "product Id";
  pname.innerText = "name";
  pPrice.innerText = "price";
  pUnit.innerText = "Units";
  pSupplier.innerText = "supplier";
  pIsDiscontinued.innerText = "discontinued";
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
    let punitsLeft = tdata.insertCell();
    punitsLeft.innerText = item.unitsInStock;
    let psupplier = tdata.insertCell();
    psupplier.innerText = item.supplier;
    let isDiscontinued = tdata.insertCell();
    // is discontinued?
    if (item.discontinued) {
      isDiscontinued.innerText = "yes";
    } else {
      isDiscontinued.innerText = "no";
    }
  });
};

export { table };
