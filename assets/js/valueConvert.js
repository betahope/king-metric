function ValueConverter() {
  const enteredValue = parseInt(document.getElementById("inputValue").value);
  const unit = document.getElementById("units").value;

  if (!enteredValue) {
    document.getElementById("unitConverted").innerText =
      "Please, enter a value to be converted! 🙏🏼";
  } else {
    switch (unit) {
      // Unit switch for Length
      case "inch":
        document.getElementById("unitConverted").innerHTML = `<p>${
          enteredValue * 2.54
        }&nbsp; 🎉</p>`;
        break;
      case "foot":
        document.getElementById("unitConverted").innerHTML = `<p>${
          enteredValue * 0.3048
        }&nbsp; 🎉</p>`;
        break;
      case "yard":
        document.getElementById("unitConverted").innerHTML = `<p>${
          enteredValue * 0.9144
        }&nbsp; 🎉</p>`;
        break;
      case "mile":
        document.getElementById("unitConverted").innerHTML = `<p>${
          enteredValue * 1.6093
        }&nbsp; 🎉</p>`;
        break;

      //Unit switch for Area
      case "sqinch":
        document.getElementById("unitConverted").innerHTML = `<p>${
          enteredValue * 6.4516
        }&nbsp; 🎉</p>`;
        break;
      case "sqfoot":
        document.getElementById("unitConverted").innerHTML = `<p>${
          enteredValue * 0.0929
        }&nbsp; 🎉</p>`;
        break;
      case "sqyard":
        document.getElementById("unitConverted").innerHTML = `<p>${
          enteredValue * 0.8361
        }&nbsp; 🎉</p>`;
        break;
      case "sqmile":
        document.getElementById("unitConverted").innerHTML = `<p>${
          enteredValue * 2.59
        }&nbsp; 🎉</p>`;
        break;

      //Unit switch for Volume
      case "cuinch":
        document.getElementById("unitConverted").innerHTML = `<p>${
          enteredValue * 16.387
        }&nbsp; 🎉</p>`;
        break;
      case "cufoot":
        document.getElementById("unitConverted").innerHTML = `<p>${
          enteredValue * 0.02832
        }&nbsp; 🎉</p>`;
        break;
      case "flounce":
        document.getElementById("unitConverted").innerHTML = `<p>${
          enteredValue * 29.574
        }&nbsp; 🎉</p>`;
        break;
      case "gallon":
        document.getElementById("unitConverted").innerHTML = `<p>${
          enteredValue * 3.7854
        }&nbsp; 🎉</p>`;
        break;

      //Unit switch for Weigth
      case "ounce":
        document.getElementById("unitConverted").innerHTML = `<p>${
          enteredValue * 28.35
        }&nbsp; 🎉</p>`;
        break;
      case "pound":
        document.getElementById("unitConverted").innerHTML = `<p>${
          enteredValue * 0.4536
        }&nbsp; 🎉</p>`;
        break;
      case "stone":
        document.getElementById("unitConverted").innerHTML = `<p>${
          enteredValue * 6.3503
        }&nbsp; 🎉</p>`;
        break;
      case "ton":
        document.getElementById("unitConverted").innerHTML = `<p>${
          enteredValue * 1.016
        }&nbsp; 🎉</p>`;
        break;
    }
  }
  return;
}