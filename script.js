const productImgEl = document.getElementById("product-img");
const containerEl = document.getElementById("container");
const loaderEl = document.getElementById("loader");

// grabbing color

// const blueColEl = document.getElementById("Blue");
// const pinkColEl = document.getElementById("Pink");
// const yellowColEl = document.getElementById("Yellow");

const colorObj = {
  Blue: "#e3f5fb",
  Pink: "#fdf1f7",
  Yellow: "#fffbef",
  Blueborder: "7px solid #adddf6",
  Pinkborder: "7px solid #f3a4c7 ",
  Yellowborder: "7px solid #ffe08a ",
  Blueloader: "#0095e4 ",
  Pinkloader: "#e11a72",
  Yellowloader: "#ffcc3c",
};

function changeProductImage(val) {
  clearTimeout(newTimeout);
  const spanId = document.querySelectorAll("span");
  for (let i = 0; i < spanId.length; i++) {
    spanId[i].style.border = "none";
  }

  productImgEl.style.display = "none";

  loaderStyle(true, val);

  if (val == "Blue") {
    document.getElementById(val).style.border = `${colorObj.Blueborder}`;
  } else if (val == "Pink") {
    document.getElementById(val).style.border = `${colorObj.Pinkborder} `;
  } else if (val == "Yellow") {
    document.getElementById(val).style.border = `${colorObj.Yellowborder} `;
  }

  var newTimeout = setTimeout(() => {
    loaderStyle(false);
    productImgEl.src = `./images/umbrella-images/${val}umbrella.png`;
    productImgEl.style.display = "block";
  }, 3000);
  containerEl.style.backgroundColor = `${colorObj[val]}`;

  //   document.getElementById("product-img").src = selectedColor + "-image.jpg";
}

function loaderStyle(val, col = "#fff") {
  if (val) {
    loaderEl.style.display = "block";
    loaderEl.setAttribute("fill", `${colorObj[col + "loader"]}`);
  } else {
    loaderEl.style.display = "none";
  }
}
