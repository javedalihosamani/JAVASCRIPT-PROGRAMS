const inputKey = document.getElementById("inputKey");
const inputValue = document.getElementById("inputValue");

// INSERTING DATA
document.getElementById("btnInsert").onclick = function () {
  const key = inputKey.value;
  const value = inputValue.value;

  if (key && value) {
    localStorage.setItem(key, value);
    window.location.reload();
    inputKey.value = "";
    inputValue.value = "";
  } else {
    alert("Must Enter Value");
  }
};

if (localStorage.length !== 0) {
  document.getElementById(
    "avialRecords"
  ).innerHTML = `Records Available in Local Storage`;
}

if (localStorage.length === 0) {
  document.getElementById("btnAllDelete").style.display = "none";
  document.getElementById(
    "autoFILL"
  ).innerHTML = `Add Some Key - Value Records using INSERT box`;
  document.getElementById("avialRecords").style.display = "none";
}

// READ ALL THE VALUE
for (let index = 0; index < localStorage.length; index++) {
  const key = localStorage.key(index);
  const value = localStorage.getItem(key);

  document.getElementById(
    "lsOutput"
  ).innerHTML += `<br><hr><br> Key is : ${key} <br> Value is : ${value} <br> <br>`;
}

// DELETE ALL DATA
document.getElementById("btnAllDelete").onclick = function () {
  localStorage.clear();
  location.reload();
};

// READ SINGLE VALUE
document.getElementById("btnReadData").onclick = function () {
  const inputReadDataKeyNew = document.getElementById("inputReadDataKey").value;

  const readedData = localStorage.getItem(inputReadDataKeyNew);

  if (inputReadDataKeyNew) {
    document.getElementById(
      "readedDataHere"
    ).innerHTML = `Data Value of requested KEY is : ${readedData}`;
  }
};

//DELETE SINGLE DATA
document.getElementById("btnDelete").onclick = function () {
  const keyName = document.getElementById("inputDelKey").value;
  if (keyName) {
    localStorage.removeItem(keyName);
    location.reload();
  }
};
