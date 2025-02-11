let arrList = [];

function onFormSubmit() {
  let formData = readFormData();
  console.log(formData);

  arrList.push(formData);
  poorTable();
  averageTable();
  goodTable();
  niceTable();
  excellentTable();

  resetForm();
}

function readFormData() {
  let formData = {};
  formData.name = document.getElementById("name").value;
  formData.rating = document.getElementById("rating").value;
  return formData;
}

function poorTable() {
  let html = "";
  document.getElementById("poor").innerHTML = "";

  arrList
    .filter((data) => data.rating == "Poor")
    .forEach((element, index) => {
      html += `<tr>`;
      html += `<td>${element.name}</td>`;
      html += `<td>${`<select id="category" onchange=onShift(${index},'Poor') >
                <option value="">Move To</option>
                <option value="Average">Average</option>
                <option value="Good">Good</option>
                <option value="Nice">Nice</option>
                <option value="Excellent">Excellent</option>
                </select>`}</td>`;
      html += `</tr>`;
    });
  document.getElementById("poor").innerHTML = html;
}

function averageTable() {
  let html = "";
  document.getElementById("average").innerHTML = "";

  arrList
    .filter((data) => data.rating == "Average")
    .forEach((element, index) => {
      html += `<tr>`;
      html += `<td>${element.name}</td>`;
      html += `<td>${`<select id="categorya" onchange=onShifta(${index},'Average') >
        <option value="">Move To</option>
        <option value="Poor">Poor</option>
        <option value="Good">Good</option>
        <option value="Nice">Nice</option>
        <option value="Excellent">Excellent</option>
        </select>`}</td>`;
      html += `</tr>`;
    });
  document.getElementById("average").innerHTML = html;
}

function goodTable() {
  let html = "";
  document.getElementById("good").innerHTML = "";
  arrList
    .filter((data) => data.rating == "Good")
    .forEach((element, index) => {
      html += `<tr>`;
      html += `<td>${element.name}</td>`;
      html += `<td>${`<select id="categoryg" onchange=onShiftg(${index},'Good') >
        <option value="">Move To</option>
        <option value="Poor">Poor</option>
        <option value="Average">Average</option>
        <option value="Nice">Nice</option>
        <option value="Excellent">Excellent</option>
        </select>`}</td>`;
      html += `</tr>`;
    });
  document.getElementById("good").innerHTML = html;
}

function niceTable() {
  let html = "";
  document.getElementById("nice").innerHTML = "";

  arrList
    .filter((data) => data.rating == "Nice")
    .forEach((element, index) => {
      html += `<tr>`;
      html += `<td>${element.name}</td>`;
      html += `<td>${`<select id="categoryn" onchange=onShiftn(${index},'Nice') >
        <option value="">Move To</option>
        <option value="Poor">Poor</option>
        <option value="Average">Average</option>
        <option value="Good">Good</option>
        <option value="Excellent">Excellent</option>
        </select>`}</td>`;
      html += `</tr>`;
    });
  document.getElementById("nice").innerHTML = html;
}

function excellentTable() {
  let html = "";
  document.getElementById("excellent").innerHTML = "";

  arrList
    .filter((data) => data.rating == "Excellent")
    .forEach((element, index) => {
      html += `<tr>`;
      html += `<td>${element.name}</td>`;
      html += `<td>${`<select id="categorye" onchange=onShifte(${index},'Excellent') >
        <option value="">Move To</option>
        <option value="Poor">Poor</option>
        <option value="Average">Average</option>
        <option value="Good">Good</option>
        <option value="Nice">Nice</option>
        </select>`}</td>`;
      html += `</tr>`;
    });
  document.getElementById("excellent").innerHTML = html;
}

function resetForm() {
  document.getElementById("form").reset();
  selectedRowIndex = null;
}

function onShift(index, rating) {
  let arr = arrList.filter((data) => data.rating == rating);

  let option = document.getElementById("category").value;
  if (option === "Poor") {
    arr[index].rating = "Poor";
  }
  if (option === "Average") {
    arr[index].rating = "Average";
  }
  if (option === "Good") {
    arr[index].rating = "Good";
  }
  if (option === "Nice") {
    arr[index].rating = "Nice";
  }
  if (option === "Excellent") {
    arr[index].rating = "Excellent";
  }

  poorTable();
  averageTable();
  goodTable();
  niceTable();
  excellentTable();
}

function onShifta(index, rating) {
  let arr = arrList.filter((data) => data.rating == rating);

  let option = document.getElementById("categorya").value;
  if (option === "Poor") {
    arr[index].rating = "Poor";
  }
  if (option === "Average") {
    arr[index].rating = "Average";
  }
  if (option === "Good") {
    arr[index].rating = "Good";
  }
  if (option === "Nice") {
    arr[index].rating = "Nice";
  }
  if (option === "Excellent") {
    arr[index].rating = "Excellent";
  }

  poorTable();
  averageTable();
  goodTable();
  niceTable();
  excellentTable();
}

function onShiftg(index, rating) {
  let arr = arrList.filter((data) => data.rating == rating);

  let option = document.getElementById("categoryg").value;
  if (option === "Poor") {
    arr[index].rating = "Poor";
  }
  if (option === "Average") {
    arr[index].rating = "Average";
  }
  if (option === "Good") {
    arr[index].rating = "Good";
  }
  if (option === "Nice") {
    arr[index].rating = "Nice";
  }
  if (option === "Excellent") {
    arr[index].rating = "Excellent";
  }

  poorTable();
  averageTable();
  goodTable();
  niceTable();
  excellentTable();
}

function onShiftn(index, rating) {
  let arr = arrList.filter((data) => data.rating == rating);

  let option = document.getElementById("categoryn").value;
  if (option === "Poor") {
    arr[index].rating = "Poor";
  }
  if (option === "Average") {
    arr[index].rating = "Average";
  }
  if (option === "Good") {
    arr[index].rating = "Good";
  }
  if (option === "Nice") {
    arr[index].rating = "Nice";
  }
  if (option === "Excellent") {
    arr[index].rating = "Excellent";
  }

  poorTable();
  averageTable();
  goodTable();
  niceTable();
  excellentTable();
}

function onShifte(index, rating) {
  let arr = arrList.filter((data) => data.rating == rating);

  let option = document.getElementById("categorye").value;
  if (option === "Poor") {
    arr[index].rating = "Poor";
  }
  if (option === "Average") {
    arr[index].rating = "Average";
  }
  if (option === "Good") {
    arr[index].rating = "Good";
  }
  if (option === "Nice") {
    arr[index].rating = "Nice";
  }
  if (option === "Excellent") {
    arr[index].rating = "Excellent";
  }

  poorTable();
  averageTable();
  goodTable();
  niceTable();
  excellentTable();
}
