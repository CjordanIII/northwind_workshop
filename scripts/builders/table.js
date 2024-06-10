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
  const pSeeMore = rowdata.insertCell();

  // assigning tittles
  pID.innerText = "product Id";
  pname.innerText = "name";
  pPrice.innerText = "price";
  pSeeMore.innerText = "See more";

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
    link.href = "#";
    link.innerText = "seemore";
    seemore.appendChild(link);
  });
  console.log(parent);
};

export { table };
