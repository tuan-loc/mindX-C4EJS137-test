function numberOneTriangle(number) {
  let html = "";
  for (let i = 0; i < number; i++) {
    for (let j = 0; j <= i; j++) {
      html += "* ";
    }
    html += "<br>";
  }
  return html;
}

function printTriangle() {
  let number = +document.getElementById("number").value;
  document.getElementById("result").innerHTML = numberOneTriangle(number);
}

document
  .getElementById("printOneTriangle")
  .addEventListener("click", printTriangle);
