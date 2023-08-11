// JavaScript for toggle menu

var navlinks = document.getElementById("navlinks");

function showMenu() {
  navlinks.style.right = "0";
}
function hideMenu() {
  navlinks.style.right = "-200px";
}

// Save Data to Table from Donate Food Button

function getAndUpdate() {
  console.log("Updating List...");
  City = document.getElementById("City").value;
  FoodName = document.getElementById("FoodName").value;
  FoodType = document.getElementById("foodtype").value;
  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    itemJsonArray.push([City, FoodName, FoodType]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.push([City, FoodName, FoodType]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  }
  update();
}
function update() {
  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
  }
  // Populate the table
  let tableBody = document.getElementById("tableBody");
  let str = "";
  itemJsonArray.forEach((element) => {
    str += `
                    <tr>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td> 
                    <td>${element[2]}</td>
                    <td><button class="dark-btn" onclick="details(${index})">Get Now</button></td> 
                    </tr>`;
  });
  tableBody.innerHTML = str;
}

FoodDetails = document.getElementById("FoodDetails");
FoodDetails.addEventListener("click", getAndUpdate);
update();

function deleted(itemIndex) {
  console.log("Delete", itemIndex);
  itemJsonArrayStr = localStorage.getItem("itemsJson");
  itemJsonArray = JSON.parse(itemJsonArrayStr);
  // Delete itemIndex element from the array
  itemJsonArray.splice(itemIndex, 1);
  localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  update();
}
function clearStorage() {
  if (confirm("Do you really want to clear?")) {
    console.log("Clearing the storage");
    localStorage.clear();
    update();
  }
}
